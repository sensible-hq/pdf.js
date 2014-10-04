/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

//
// See README for overview
//

'use strict';

//
// Fetch the PDF document from the URL using promises
//

function mergeGlyphs(glyphs) {
  var part = '';
  var chunks = [];
  for (var i = 0; i < glyphs.length; i++) {
    var glyph = glyphs[i];
    if (isNum(glyph) || glyph === null) {
      chunks.push(part);
      part = '';
    } else {
      part += glyph.unicode;
    }
  }
  if (part !== '') {
    chunks.push(part);
  }
  return chunks;
}

function isTimelinessNumber(num) {
  switch (num) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      return true;
  }
  return false;
}

function isTimelinessChange(chunks) {
  var numChunksToSearch = Math.min(chunks.length, 5);
  for (var i = 1; i < numChunksToSearch - 1; i++) {
    if (chunks[i - 1].length > 1 && isTimelinessNumber(chunks[i]) && isTimelinessNumber(chunks[i + 1])) {
      return [chunks[i], chunks[i + 1]];
    }
  }
  return false;
}

function partialMatch(needle, chunks) {
  if (chunks.length < needle.length) {
    return false;
  }
  for (var i = 0; i < needle.length; i++) {
    if (needle[i] !== chunks[i]) {
      return false;
    }
  }
  return true;
}

var collectChanges = false;

function doPage(pdf, num) {
  var allText = [];
  var currentPos;
  return pdf.getPage(num).then(function(page) {
    return page.getOperatorList();
  }).then(function(opList) {
    var ops = PDFJS.OPS;
    var fns = opList.fnArray;
    var args = opList.argsArray;
    // Collect all the text so we can sort it by position.
    for (var i = 0; i < fns.length; i++) {
      var op = fns[i];
      var arg = args[i];

      if (op == ops.setTextMatrix) {
        var y = arg[5];
        currentPos = {
          y: y,
          text: []
        };
        allText.push(currentPos);
      } else if (op == ops.showText) {
        var chunks = mergeGlyphs(arg[0]);
        Array.prototype.push.apply(currentPos.text, chunks);
      }
    }
    allText.sort(function (a, b) {
      return b.y - a.y;
    });
    // Now search for the timeliness changes.
    for (var i = 0; i < allText.length; i++) {
      var chunks = allText[i].text;
      if (!collectChanges && partialMatch(["ST","OCKS","MOVING","UP"], chunks)) {
        collectChanges = true;
        console.log('hi');
        continue;
      }
      if (collectChanges && partialMatch(["ST","OCKS","MOVING","DOWN"], chunks)) {
        collectChanges = false;
        break;
      }
      if (collectChanges) {
        debugger;
        var change;
        if (change = isTimelinessChange(chunks)) {
          console.log(chunks.join('_'));
          console.log(change);
        }
      }
    }
  });
}


PDFJS.getDocument('/pdfs/Mar0113.pdf').then(function(pdf) {
  // Using promise to fetch the page
  var numPages = pdf.numPages;
  var i = 0;
  function a(i) {
    if (i >= numPages) {
      return;
    }
    console.log("----------------------" + (i+1));
    doPage(pdf, i + 1).then(function() {
      a(++i);
    }, function () {
      console.error('crap');
    });
  }
  a(0);
});

