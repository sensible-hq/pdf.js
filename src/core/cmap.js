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

var BUILT_IN_CMAPS = [
'78-EUC-H',
'78-EUC-V',
'78-H',
'78-RKSJ-H',
'78-RKSJ-V',
'78-V',
'78ms-RKSJ-H',
'78ms-RKSJ-V',
'83pv-RKSJ-H',
'90ms-RKSJ-H',
'90ms-RKSJ-V',
'90msp-RKSJ-H',
'90msp-RKSJ-V',
'90pv-RKSJ-H',
'90pv-RKSJ-V',
'Add-H',
'Add-RKSJ-H',
'Add-RKSJ-V',
'Add-V',
'Adobe-CNS1-0',
'Adobe-CNS1-1',
'Adobe-CNS1-2',
'Adobe-CNS1-3',
'Adobe-CNS1-4',
'Adobe-CNS1-5',
'Adobe-CNS1-6',
'Adobe-GB1-0',
'Adobe-GB1-1',
'Adobe-GB1-2',
'Adobe-GB1-3',
'Adobe-GB1-4',
'Adobe-GB1-5',
'Adobe-Japan1-0',
'Adobe-Japan1-1',
'Adobe-Japan1-2',
'Adobe-Japan1-3',
'Adobe-Japan1-4',
'Adobe-Japan1-5',
'Adobe-Japan1-6',
'Adobe-Korea1-0',
'Adobe-Korea1-1',
'Adobe-Korea1-2',
'B5-H',
'B5-V',
'B5pc-H',
'B5pc-V',
'CNS-EUC-H',
'CNS-EUC-V',
'CNS1-H',
'CNS1-V',
'CNS2-H',
'CNS2-V',
'ETHK-B5-H',
'ETHK-B5-V',
'ETen-B5-H',
'ETen-B5-V',
'ETenms-B5-H',
'ETenms-B5-V',
'EUC-H',
'EUC-V',
'Ext-H',
'Ext-RKSJ-H',
'Ext-RKSJ-V',
'Ext-V',
'GB-EUC-H',
'GB-EUC-V',
'GB-H',
'GB-V',
'GBK-EUC-H',
'GBK-EUC-V',
'GBK2K-H',
'GBK2K-V',
'GBKp-EUC-H',
'GBKp-EUC-V',
'GBT-EUC-H',
'GBT-EUC-V',
'GBT-H',
'GBT-V',
'GBTpc-EUC-H',
'GBTpc-EUC-V',
'GBpc-EUC-H',
'GBpc-EUC-V',
'H',
'HKdla-B5-H',
'HKdla-B5-V',
'HKdlb-B5-H',
'HKdlb-B5-V',
'HKgccs-B5-H',
'HKgccs-B5-V',
'HKm314-B5-H',
'HKm314-B5-V',
'HKm471-B5-H',
'HKm471-B5-V',
'HKscs-B5-H',
'HKscs-B5-V',
'Hankaku',
'Hiragana',
'KSC-EUC-H',
'KSC-EUC-V',
'KSC-H',
'KSC-Johab-H',
'KSC-Johab-V',
'KSC-V',
'KSCms-UHC-H',
'KSCms-UHC-HW-H',
'KSCms-UHC-HW-V',
'KSCms-UHC-V',
'KSCpc-EUC-H',
'KSCpc-EUC-V',
'Katakana',
'NWP-H',
'NWP-V',
'RKSJ-H',
'RKSJ-V',
'Roman',
'UniCNS-UCS2-H',
'UniCNS-UCS2-V',
'UniCNS-UTF16-H',
'UniCNS-UTF16-V',
'UniCNS-UTF32-H',
'UniCNS-UTF32-V',
'UniCNS-UTF8-H',
'UniCNS-UTF8-V',
'UniGB-UCS2-H',
'UniGB-UCS2-V',
'UniGB-UTF16-H',
'UniGB-UTF16-V',
'UniGB-UTF32-H',
'UniGB-UTF32-V',
'UniGB-UTF8-H',
'UniGB-UTF8-V',
'UniJIS-UCS2-H',
'UniJIS-UCS2-HW-H',
'UniJIS-UCS2-HW-V',
'UniJIS-UCS2-V',
'UniJIS-UTF16-H',
'UniJIS-UTF16-V',
'UniJIS-UTF32-H',
'UniJIS-UTF32-V',
'UniJIS-UTF8-H',
'UniJIS-UTF8-V',
'UniJIS2004-UTF16-H',
'UniJIS2004-UTF16-V',
'UniJIS2004-UTF32-H',
'UniJIS2004-UTF32-V',
'UniJIS2004-UTF8-H',
'UniJIS2004-UTF8-V',
'UniJISPro-UCS2-HW-V',
'UniJISPro-UCS2-V',
'UniJISPro-UTF8-V',
'UniJISX0213-UTF32-H',
'UniJISX0213-UTF32-V',
'UniJISX02132004-UTF32-H',
'UniJISX02132004-UTF32-V',
'UniKS-UCS2-H',
'UniKS-UCS2-V',
'UniKS-UTF16-H',
'UniKS-UTF16-V',
'UniKS-UTF32-H',
'UniKS-UTF32-V',
'UniKS-UTF8-H',
'UniKS-UTF8-V',
'V',
'WP-Symbol'];

// CMap, not to be confused with TrueType's cmap.
var CMap = (function CMapClosure() {
  function CMap() {
    this.codespaceRanges = [];
    this.map = [];
    this.vertical = false;
    this.useCMap = null;
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

  function parseWMode(cmap, lexer) {
    var obj = lexer.getObj();
    if (isInt(obj)) {
      cmap.vertical = !!obj;
    }
  }

  function parseCMap(cmap, lexer, builtInCMapUrl, useCMap) {
    var previous;
    var embededUseCMap;
    objLoop: while (true) {
      var obj = lexer.getObj();
      if (isEOF(obj)) {
        break;
      } else if (isName(obj)) {
        if (obj.name === 'WMode') {
          parseWMode(cmap, lexer);
        }
        previous = obj;
      } else if (isCmd(obj)) {
        switch (obj.cmd) {
          case 'endcmap':
            break objLoop;
          case 'usecmap':
            if (isName(previous)) {
              embededUseCMap = previous.name;
            }
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
    if (!useCMap && embededUseCMap) {
      // Load the usecmap definintion from the file only if there wasn't one
      // specified.
      useCMap = embededUseCMap;
    }
    if (useCMap) {
      cmap.useCMap = createBuiltInCMap(useCMap, builtInCMapUrl);
      if (cmap.codespaceRanges.length === 0) {
        cmap.codespaceRanges = cmap.useCMap.codespaceRanges;
      }
    }
  }

  function createBuiltInCMap(name, builtInCMapUrl) {
    if (name === 'Identity-H') {
      return new IdentityCmap(false, 2);
    } else if (name === 'Identity-V') {
      return new IdentityCmap(true, 2);
    }
    if (BUILT_IN_CMAPS.indexOf(name) === -1) {
      error('Unknown cmap name: ' + name);
    }

    var request = new XMLHttpRequest();
    var url = builtInCMapUrl + name;
    request.open('GET', url, false);
    request.send(null);
    if (request.status !== 200) {
      error('Unable to get cmap at: ' + url);
    }
    var cmap = new CMap();
    var lexer = new Lexer(new StringStream(request.responseText));
    parseCMap(cmap, lexer, builtInCMapUrl, null);
    return cmap;
  }

  return {
    create: function (encoding, builtInCMapUrl, useCMap) {
      if (isName(encoding)) {
        return createBuiltInCMap(encoding.name, builtInCMapUrl);
      } else if (isStream(encoding)) {
        var cmap = new CMap();
        var lexer = new Lexer(encoding);
        try {
          parseCMap(cmap, lexer, builtInCMapUrl, useCMap);
        } catch (e) {
          warn('Invalid CMap data. ' + e);
        }
        return cmap;
      }
      error('Encoding required.');
    }
  }
})();