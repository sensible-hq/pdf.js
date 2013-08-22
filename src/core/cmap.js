/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// CMap, not to be confused with TrueType's cmap.
var CMap = (function CMapClosure() {
  function CMap() {
    this.codespaceRanges = [];
    this.map = [];
    this.vertical = false;
  }
  CMap.prototype = {
    addCodespaceRange: function(n, low, high) {
      this.codespaceRanges.push({
        n: n,
        low: low,
        high: high
      });
    },

    mapRange: function(low, high, dstLow) {
      var lastByte = dstLow.length - 1;
      if (!isString(dstLow)) {
        debugger;
      }
      while (low <= high) {
        this.map[low] = dstLow;
        dstLow = dstLow.substr(0, lastByte) + String.fromCharCode(dstLow.charCodeAt(lastByte) + 1);
        ++low;
      }
    },

    mapRangeToArray: function(low, high, array) {
      var i = 0;
      while (low <= high) {
        this.map[low] = array[i++];
        ++low;
      }
    },

    mapOne: function(src, dst) {
      this.map[src] = dst;
    },

    lookup: function(code) {
      return this.map[code];
    },

    readCharCode: function(str, offset) {
      var c = 0;
      var codespaceRanges = this.codespaceRanges;
      var codespaceRangesLen = this.codespaceRanges.length;
      // 9.7.6.2 CMap Mapping
      // The code length is at most 4.
      for (var n = 0; n < 4; n++) {
        c = ((c << 8) | str.charCodeAt(offset + n)) >>> 0;
        // Check each codespace range to see if it falls within.
        for (var k = 0; k < codespaceRangesLen; k++) {
          var codespaceRange = codespaceRanges[k];
          if (codespaceRange.n === n + 1) {
            if (c >= codespaceRange.low && c <= codespaceRange.high) {
              return [c, n + 1];
            }
          }
        }
      }

      return [0, 1];
    }

  };
  return CMap;
})();

var IdentityCmap = (function IdentityCmapClosure() {
  function IdentityCmap(vertical, n) {
    CMap.call(this);
    this.vertical = vertical;
    this.addCodespaceRange(n, 0, 0xffff);
    this.mapRange(0, 0xffff, '\u0000');
  }
  Util.inherit(IdentityCmap, CMap, {});

  return IdentityCmap;
})();

var CMapFactory = (function CMapFactoryClosure() {
  function strToInt(str) {
    var a = 0;
    for (var i = 0; i < str.length; i++) {
      a = (a << 8) | str.charCodeAt(i);
    }
    return a >>> 0;
  }

  function expectString(obj) {
    if (!isString(obj)) {
      error('Malformed CMap: expected string.');
    }
  }

  function expectInt(obj) {
    if (!isInt(obj)) {
      error('Malformed CMap: expected int.');
    }
  }

  function parseBfChar(cmap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if (isCmd(obj, 'endbfchar')) {
        return;
      }
      expectString(obj);
      var src = strToInt(obj);
      obj = lexer.getObj();
      // TODO are /dstName used?
      expectString(obj);
      var dst = obj;
      cmap.mapOne(src, dst);
    }
  }

  function parseBfRange(cmap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if (isCmd(obj, 'endbfrange')) {
        return;
      }
      expectString(obj);
      var low = strToInt(obj);
      obj = lexer.getObj();
      expectString(obj);
      var high = strToInt(obj);
      obj = lexer.getObj();
      if (isInt(obj) || isString(obj)) {
        var dstLow = isInt(obj) ? String.fromCharCode(obj) : obj;
        cmap.mapRange(low, high, dstLow);
      } else if (isCmd(obj, '[')) {
        obj = lexer.getObj();
        var array = [];
        while (!isCmd(obj, ']') && !isEOF(obj)) {
          array.push(obj);
          obj = lexer.getObj();
        }
        cmap.mapRangeToArray(low, high, array);
      } else {
        break;
      }
    }
    error('Invalid bf range.');
  }

  function parseCidChar(cmap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if (isCmd(obj, 'endcidchar')) {
        return;
      }
      expectString(obj);
      var src = strToInt(obj);
      obj = lexer.getObj();
      expectInt(obj);
      var dst = String.fromCharCode(obj);
      cmap.mapOne(src, dst);
    }
  }

  function parseCidRange(cmap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if (isCmd(obj, 'endcidrange')) {
        return;
      }
      expectString(obj);
      var low = strToInt(obj);
      obj = lexer.getObj();
      expectString(obj);
      var high = strToInt(obj);
      obj = lexer.getObj();
      expectInt(obj);
      var dstLow = String.fromCharCode(obj);
      cmap.mapRange(low, high, dstLow);
    }
  }

  function parseCodespaceRange(cmap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if (isCmd(obj, 'endcodespacerange')) {
        return;
      }
      if (!isString(obj)) {
        break;
      }
      var low = strToInt(obj);
      obj = lexer.getObj();
      if (!isString(obj)) {
        break;
      }
      var high = strToInt(obj);
      cmap.addCodespaceRange(obj.length, low, high);
    }
    error('Invalid codespace range.');
  }

  function parseCmap(cmap, lexer) {
    objLoop: while (true) {
      var obj = lexer.getObj();
      if (isEOF(obj)) {
        break;
      } else if (isCmd(obj)) {
        switch (obj.cmd) {
          case 'endcmap':
            break objLoop;
          case 'usecmap':
            // TODO
            break;
          case 'begincodespacerange':
            parseCodespaceRange(cmap, lexer);
            break;
          case 'beginbfchar':
            parseBfChar(cmap, lexer);
            break;
          case 'begincidchar':
            parseCidChar(cmap, lexer);
            break;
          case 'beginbfrange':
            parseBfRange(cmap, lexer);
            break;
          case 'begincidrange':
            parseCidRange(cmap, lexer);
            break;
        }
      }
    }
  }
  return {
    create: function (encoding) {
      if (isName(encoding)) {
        // properties.vertical = /-V$/.test(cidEncoding.name);
        switch (encoding.name) {
          case 'Identity-H':
            return new IdentityCmap(false, 2);
          case 'Identity-V':
            return new IdentityCmap(true, 2);
          default:
            return null;
        }
      } else if (isStream(encoding)) {
        var cmap = new CMap();
        var lexer = new Lexer(encoding);
        try {
          parseCmap(cmap, lexer);
        } catch (e) {
          warn('Invalid CMap data. ' + e);
        }
        return cmap;
      }
      error('Encoding required.');
    }
  }
})();