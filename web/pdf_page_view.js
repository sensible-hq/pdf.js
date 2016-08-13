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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('pdfjs-web/pdf_page_view', ['exports',
      'pdfjs-web/ui_utils', 'pdfjs-web/pdf_rendering_queue',
      'pdfjs-web/dom_events', 'pdfjs-web/pdfjs'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./ui_utils.js'),
      require('./pdf_rendering_queue.js'), require('./dom_events.js'),
      require('./pdfjs.js'));
  } else {
    factory((root.pdfjsWebPDFPageView = {}), root.pdfjsWebUIUtils,
      root.pdfjsWebPDFRenderingQueue, root.pdfjsWebDOMEvents,
      root.pdfjsWebPDFJS);
  }
}(this, function (exports, uiUtils, pdfRenderingQueue, domEvents, pdfjsLib) {

var CSS_UNITS = uiUtils.CSS_UNITS;
var DEFAULT_SCALE = uiUtils.DEFAULT_SCALE;
var getOutputScale = uiUtils.getOutputScale;
var approximateFraction = uiUtils.approximateFraction;
var roundToDivide = uiUtils.roundToDivide;
var RenderingStates = pdfRenderingQueue.RenderingStates;


var originalFontFace = FontFace;
var fontFaces = [];
class FontFaceWrapper extends FontFace {
  constructor(name, data, options) {
    fontFaces.push({
      name: name,
      data: data,
    });
    super(name, data, options);
  }
}
window.FontFace = FontFaceWrapper;

function ProxyVariable(value) {
  this.value = value;
}

var Proxy2dContext = function() {
  this.actions = [];
  this.deps = [];
  this.fonts = [];
};
    function escape(a) {
      var type = typeof a;
      if (type === 'number' || type === 'boolean')
        return a;
      if (a instanceof ProxyVariable) {
        return a.value;
      }
      var str = JSON.stringify(a);
      return str;
    }
    function arg(a) {
      var b = [];
      for (var i = 0, ii = a.length; i < ii; i++) {
        b.push(escape(a[i]));
      }
      return b;
    }
Proxy2dContext.prototype = {
  callFunction: function(method, args) {
    // convert args to real array
    args = Array.prototype.slice.call(args);
    this.actions.push([0, method, args]);
  },
  setAttribute: function(key, value) {
    this.actions.push([1, key, value]);
  },
  callCustom: function(str) {
    this.actions.push([2, str]);
  },
  dump: function(limit) {
    limit = limit || this.actions.length;
    var out = '';
    for (var fontName of this.fonts) {
      var font = fontFaces.find((a) => {
        if (a.name === fontName) {
          return true;
        }
        return false;
      });
      b
    }
    out += 'function loadDeps() { return Promise.all([' + this.deps.join(',') + ']); }\n';
    out += 'function draw(ctx, deps) {\n';
    for (var i = 0; i < limit; i++) {
      var action = this.actions[i];
      var type = action[0];
      switch (type) {
        case 0: // function
          out += 'ctx.' + action[1] + '(' + arg(action[2]).join(',') + ');\n';
          break;
        case 1: // attribute
          out += 'ctx.' + action[1] + ' = ' + escape(action[2]) + ';\n';
          break;
        case 2: // custom
          out += action[1];
          break;
      }
    }
    out += '};\n';
    return out;
  },

  // State
  save: function() {
    this.callFunction('save', []);
  },
  restore: function() {
    this.callFunction('restore', []);
  },
  // Transformations
  rotate: function() {
    this.callFunction('rotate', arguments);
  },
  scale: function() {
    this.callFunction('scale', arguments);
  },
  setTransform: function() {
    this.callFunction('setTransform', arguments);
  },
  transform: function() {
    this.callFunction('transform', arguments);
  },
  translate: function() {
    this.callFunction('translate', arguments);
  },
  // rects
  clearRect: function() {
    this.callFunction('clearRect', arguments);
  },
  fillRect: function() {
    this.callFunction('fillRect', arguments);
  },
  strokeRect: function() {
    this.callFunction('strokeRect', arguments);
  },
  // Complex shapes (paths)
  arc: function() {
    this.callFunction('arc', arguments);
  },
  arcTo: function() {
    this.callFunction('arcTo', arguments);
  },
  beginPath: function() {
    this.callFunction('beginPath', []);
  },
  bezierCurveTo: function() {
    this.callFunction('bezierCurveTo', arguments);
  },
  clip: function() {
    this.callFunction('clip', arguments);
  },
  closePath: function() {
    this.callFunction('closePath', arguments);
  },
  fill: function() {
    this.callFunction('fill', arguments);
  },
  lineTo: function() {
    this.callFunction('lineTo', arguments);
  },
  moveTo: function() {
    this.callFunction('moveTo', arguments);
  },
  quadraticCurveTo: function() {
    this.callFunction('quadraticCurveTo', arguments);
  },
  rect: function() {
    this.callFunction('rect', arguments);
  },
  stroke: function() {
    this.callFunction('stroke', arguments);
  },
  // Text
  fillText: function() {
    this.callFunction('fillText', arguments);
  },
  strokeText: function() {
    this.callFunction('strokeText', arguments);
  },
  _addDependentImage: function(canvas) {
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Only HTMLCanvasElement is supported for now.');
    }
    var imgData = canvas.toDataURL();
    var load = "new Promise(function(resolve, reject) {\n";
    load += "var image = new Image();\n";
    load += "image.onload = function() {resolve(image);};\n";
    load += "image.src = \"" + imgData + "\";\n";
    load += "})"
    var id = this.deps.length;
    this.deps.push(load);
    return id;
  },
  drawImage: function(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    var id = this._addDependentImage(image);
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    args = arg(args);
    args.unshift('deps[' + id + ']');
    args = args.join(',');
    this.callCustom('ctx.drawImage(' + args + ');\n');
  },
  createImageData: function(width, height) {
    return {
      data: new Array(width * height * 4),
      length: width * height * 4,
      'width': width,
      'height': height
    }
  },
  createPattern: function(image, repetition) {
    var id = this._addDependentImage(image);
    this.callCustom('var pattern' + id + ' = ctx.createPattern(deps[' + id + '], "' + repetition + '");\n');
    return new ProxyVariable('pattern' + id);
  },
  // Attributes
  set globalAlpha(value) {
    this.setAttribute('globalAlpha', value);
  },
  set globalCompositeOperation(value) {
    this.setAttribute('globalCompositeOperation', value);
  },
  set fillStyle(value) {
    this.setAttribute('fillStyle', value);
  },
  set strokeStyle(value) {
    this.setAttribute('strokeStyle', value);
  },
  set lineCap(value) {
    this.setAttribute('lineCap', value);
  },
  set lineJoin(value) {
    this.setAttribute('lineJoin', value);
  },
  set lineWidth(value) {
    this.setAttribute('lineWidth', value);
  },
  set miterLimit(value) {
    this.setAttribute('miterLimit', value);
  },
  set font(value) {
    // Highly tailored to pdf.js
    var fontName = value.substring(value.indexOf('"') + 1, value.lastIndexOf('"'));
    if (!this.fonts.includes(fontName)) {
      this.fonts.push(fontName);
    }
    this.setAttribute('font', value);
  }
};

var TEXT_LAYER_RENDER_DELAY = 200; // ms

/**
 * @typedef {Object} PDFPageViewOptions
 * @property {HTMLDivElement} container - The viewer element.
 * @property {EventBus} eventBus - The application event bus.
 * @property {number} id - The page unique ID (normally its number).
 * @property {number} scale - The page scale display.
 * @property {PageViewport} defaultViewport - The page viewport.
 * @property {PDFRenderingQueue} renderingQueue - The rendering queue object.
 * @property {IPDFTextLayerFactory} textLayerFactory
 * @property {IPDFAnnotationLayerFactory} annotationLayerFactory
 */

/**
 * @class
 * @implements {IRenderableView}
 */
var PDFPageView = (function PDFPageViewClosure() {
  /**
   * @constructs PDFPageView
   * @param {PDFPageViewOptions} options
   */
  function PDFPageView(options) {
    var container = options.container;
    var id = options.id;
    var scale = options.scale;
    var defaultViewport = options.defaultViewport;
    var renderingQueue = options.renderingQueue;
    var textLayerFactory = options.textLayerFactory;
    var annotationLayerFactory = options.annotationLayerFactory;

    this.id = id;
    this.renderingId = 'page' + id;

    this.rotation = 0;
    this.scale = scale || DEFAULT_SCALE;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this.hasRestrictedScaling = false;

    this.eventBus = options.eventBus || domEvents.getGlobalEventBus();
    this.renderingQueue = renderingQueue;
    this.textLayerFactory = textLayerFactory;
    this.annotationLayerFactory = annotationLayerFactory;

    this.renderingState = RenderingStates.INITIAL;
    this.resume = null;

    this.onBeforeDraw = null;
    this.onAfterDraw = null;

    this.textLayer = null;

    this.zoomLayer = null;

    this.annotationLayer = null;

    var div = document.createElement('div');
    div.id = 'pageContainer' + this.id;
    div.className = 'page';
    div.style.width = Math.floor(this.viewport.width) + 'px';
    div.style.height = Math.floor(this.viewport.height) + 'px';
    div.setAttribute('data-page-number', this.id);
    this.div = div;

    container.appendChild(div);
  }

  PDFPageView.prototype = {
    setPdfPage: function PDFPageView_setPdfPage(pdfPage) {
      this.pdfPage = pdfPage;
      this.pdfPageRotate = pdfPage.rotate;
      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = pdfPage.getViewport(96.0 / 72.0);
      this.stats = pdfPage.stats;
      this.reset();
    },

    destroy: function PDFPageView_destroy() {
      this.zoomLayer = null;
      this.reset();
      if (this.pdfPage) {
        this.pdfPage.cleanup();
      }
    },

    reset: function PDFPageView_reset(keepZoomLayer, keepAnnotations) {
      if (this.renderTask) {
        this.renderTask.cancel();
      }
      this.resume = null;
      this.renderingState = RenderingStates.INITIAL;

      var div = this.div;
      div.style.width = Math.floor(this.viewport.width) + 'px';
      div.style.height = Math.floor(this.viewport.height) + 'px';

      var childNodes = div.childNodes;
      var currentZoomLayerNode = (keepZoomLayer && this.zoomLayer) || null;
      var currentAnnotationNode = (keepAnnotations && this.annotationLayer &&
                                   this.annotationLayer.div) || null;
      for (var i = childNodes.length - 1; i >= 0; i--) {
        var node = childNodes[i];
        if (currentZoomLayerNode === node || currentAnnotationNode === node) {
          continue;
        }
        div.removeChild(node);
      }
      div.removeAttribute('data-loaded');

      if (currentAnnotationNode) {
        // Hide annotationLayer until all elements are resized
        // so they are not displayed on the already-resized page
        this.annotationLayer.hide();
      } else {
        this.annotationLayer = null;
      }

      if (this.canvas && !currentZoomLayerNode) {
        // Zeroing the width and height causes Firefox to release graphics
        // resources immediately, which can greatly reduce memory consumption.
        this.canvas.width = 0;
        this.canvas.height = 0;
        delete this.canvas;
      }

      this.loadingIconDiv = document.createElement('div');
      this.loadingIconDiv.className = 'loadingIcon';
      div.appendChild(this.loadingIconDiv);
    },

    update: function PDFPageView_update(scale, rotation) {
      this.scale = scale || this.scale;

      if (typeof rotation !== 'undefined') {
        this.rotation = rotation;
      }

      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = this.viewport.clone({
        scale: this.scale * CSS_UNITS,
        rotation: totalRotation
      });

      var isScalingRestricted = false;
      if (this.canvas && pdfjsLib.PDFJS.maxCanvasPixels > 0) {
        var outputScale = this.outputScale;
        if (((Math.floor(this.viewport.width) * outputScale.sx) | 0) *
            ((Math.floor(this.viewport.height) * outputScale.sy) | 0) >
            pdfjsLib.PDFJS.maxCanvasPixels) {
          isScalingRestricted = true;
        }
      }

      if (this.canvas) {
        if (pdfjsLib.PDFJS.useOnlyCssZoom ||
            (this.hasRestrictedScaling && isScalingRestricted)) {
          this.cssTransform(this.canvas, true);

          this.eventBus.dispatch('pagerendered', {
            source: this,
            pageNumber: this.id,
            cssTransform: true,
          });
          return;
        }
        if (!this.zoomLayer) {
          this.zoomLayer = this.canvas.parentNode;
          this.zoomLayer.style.position = 'absolute';
        }
      }
      if (this.zoomLayer) {
        this.cssTransform(this.zoomLayer.firstChild);
      }
      this.reset(/* keepZoomLayer = */ true, /* keepAnnotations = */ true);
    },

    /**
     * Called when moved in the parent's container.
     */
    updatePosition: function PDFPageView_updatePosition() {
      if (this.textLayer) {
        this.textLayer.render(TEXT_LAYER_RENDER_DELAY);
      }
    },

    cssTransform: function PDFPageView_transform(canvas, redrawAnnotations) {
      var CustomStyle = pdfjsLib.CustomStyle;

      // Scale canvas, canvas wrapper, and page container.
      var width = this.viewport.width;
      var height = this.viewport.height;
      var div = this.div;
      canvas.style.width = canvas.parentNode.style.width = div.style.width =
        Math.floor(width) + 'px';
      canvas.style.height = canvas.parentNode.style.height = div.style.height =
        Math.floor(height) + 'px';
      // The canvas may have been originally rotated, rotate relative to that.
      var relativeRotation = this.viewport.rotation - canvas._viewport.rotation;
      var absRotation = Math.abs(relativeRotation);
      var scaleX = 1, scaleY = 1;
      if (absRotation === 90 || absRotation === 270) {
        // Scale x and y because of the rotation.
        scaleX = height / width;
        scaleY = width / height;
      }
      var cssTransform = 'rotate(' + relativeRotation + 'deg) ' +
        'scale(' + scaleX + ',' + scaleY + ')';
      CustomStyle.setProp('transform', canvas, cssTransform);

      if (this.textLayer) {
        // Rotating the text layer is more complicated since the divs inside the
        // the text layer are rotated.
        // TODO: This could probably be simplified by drawing the text layer in
        // one orientation then rotating overall.
        var textLayerViewport = this.textLayer.viewport;
        var textRelativeRotation = this.viewport.rotation -
          textLayerViewport.rotation;
        var textAbsRotation = Math.abs(textRelativeRotation);
        var scale = width / textLayerViewport.width;
        if (textAbsRotation === 90 || textAbsRotation === 270) {
          scale = width / textLayerViewport.height;
        }
        var textLayerDiv = this.textLayer.textLayerDiv;
        var transX, transY;
        switch (textAbsRotation) {
          case 0:
            transX = transY = 0;
            break;
          case 90:
            transX = 0;
            transY = '-' + textLayerDiv.style.height;
            break;
          case 180:
            transX = '-' + textLayerDiv.style.width;
            transY = '-' + textLayerDiv.style.height;
            break;
          case 270:
            transX = '-' + textLayerDiv.style.width;
            transY = 0;
            break;
          default:
            console.error('Bad rotation value.');
            break;
        }
        CustomStyle.setProp('transform', textLayerDiv,
            'rotate(' + textAbsRotation + 'deg) ' +
            'scale(' + scale + ', ' + scale + ') ' +
            'translate(' + transX + ', ' + transY + ')');
        CustomStyle.setProp('transformOrigin', textLayerDiv, '0% 0%');
      }

      if (redrawAnnotations && this.annotationLayer) {
        this.annotationLayer.render(this.viewport, 'display');
      }
    },

    get width() {
      return this.viewport.width;
    },

    get height() {
      return this.viewport.height;
    },

    getPagePoint: function PDFPageView_getPagePoint(x, y) {
      return this.viewport.convertToPdfPoint(x, y);
    },

    draw: function PDFPageView_draw() {
      if (this.renderingState !== RenderingStates.INITIAL) {
        console.error('Must be in new state before drawing');
      }

      this.renderingState = RenderingStates.RUNNING;

      var pdfPage = this.pdfPage;
      var viewport = this.viewport;
      var div = this.div;
      // Wrap the canvas so if it has a css transform for highdpi the overflow
      // will be hidden in FF.
      var canvasWrapper = document.createElement('div');
      canvasWrapper.style.width = div.style.width;
      canvasWrapper.style.height = div.style.height;
      canvasWrapper.classList.add('canvasWrapper');

      var canvas = document.createElement('canvas');
      canvas.id = 'page' + this.id;
      // Keep the canvas hidden until the first draw callback, or until drawing
      // is complete when `!this.renderingQueue`, to prevent black flickering.
      canvas.setAttribute('hidden', 'hidden');
      var isCanvasHidden = true;

      canvasWrapper.appendChild(canvas);
      if (this.annotationLayer && this.annotationLayer.div) {
        // annotationLayer needs to stay on top
        div.insertBefore(canvasWrapper, this.annotationLayer.div);
      } else {
        div.appendChild(canvasWrapper);
      }
      this.canvas = canvas;

      var ctx = new Proxy2dContext(); // canvas.getContext('2d', {alpha: false});
      window.z = ctx;

      ctx.canvas = canvas;
      var outputScale = getOutputScale(ctx);
      this.outputScale = outputScale;

      if (pdfjsLib.PDFJS.useOnlyCssZoom) {
        var actualSizeViewport = viewport.clone({scale: CSS_UNITS});
        // Use a scale that will make the canvas be the original intended size
        // of the page.
        outputScale.sx *= actualSizeViewport.width / viewport.width;
        outputScale.sy *= actualSizeViewport.height / viewport.height;
        outputScale.scaled = true;
      }

      if (pdfjsLib.PDFJS.maxCanvasPixels > 0) {
        var pixelsInViewport = viewport.width * viewport.height;
        var maxScale =
          Math.sqrt(pdfjsLib.PDFJS.maxCanvasPixels / pixelsInViewport);
        if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
          outputScale.sx = maxScale;
          outputScale.sy = maxScale;
          outputScale.scaled = true;
          this.hasRestrictedScaling = true;
        } else {
          this.hasRestrictedScaling = false;
        }
      }

      var sfx = approximateFraction(outputScale.sx);
      var sfy = approximateFraction(outputScale.sy);
      canvas.width = roundToDivide(viewport.width * outputScale.sx, sfx[0]);
      canvas.height = roundToDivide(viewport.height * outputScale.sy, sfy[0]);
      canvas.style.width = roundToDivide(viewport.width, sfx[1]) + 'px';
      canvas.style.height = roundToDivide(viewport.height, sfy[1]) + 'px';
      // Add the viewport so it's known what it was originally drawn with.
      canvas._viewport = viewport;

      var textLayerDiv = null;
      var textLayer = null;
      if (this.textLayerFactory) {
        textLayerDiv = document.createElement('div');
        textLayerDiv.className = 'textLayer';
        textLayerDiv.style.width = canvasWrapper.style.width;
        textLayerDiv.style.height = canvasWrapper.style.height;
        if (this.annotationLayer && this.annotationLayer.div) {
          // annotationLayer needs to stay on top
          div.insertBefore(textLayerDiv, this.annotationLayer.div);
        } else {
          div.appendChild(textLayerDiv);
        }

        textLayer = this.textLayerFactory.createTextLayerBuilder(textLayerDiv,
                                                                 this.id - 1,
                                                                 this.viewport);
      }
      this.textLayer = textLayer;

      var resolveRenderPromise, rejectRenderPromise;
      var promise = new Promise(function (resolve, reject) {
        resolveRenderPromise = resolve;
        rejectRenderPromise = reject;
      });

      // Rendering area

      var self = this;
      function pageViewDrawCallback(error) {
        debugger;
        // The renderTask may have been replaced by a new one, so only remove
        // the reference to the renderTask if it matches the one that is
        // triggering this callback.
        if (renderTask === self.renderTask) {
          self.renderTask = null;
        }

        if (error === 'cancelled') {
          rejectRenderPromise(error);
          return;
        }

        self.renderingState = RenderingStates.FINISHED;

        if (isCanvasHidden) {
          self.canvas.removeAttribute('hidden');
          isCanvasHidden = false;
        }

        if (self.loadingIconDiv) {
          div.removeChild(self.loadingIconDiv);
          delete self.loadingIconDiv;
        }

        if (self.zoomLayer) {
          // Zeroing the width and height causes Firefox to release graphics
          // resources immediately, which can greatly reduce memory consumption.
          var zoomLayerCanvas = self.zoomLayer.firstChild;
          zoomLayerCanvas.width = 0;
          zoomLayerCanvas.height = 0;

          if (div.contains(self.zoomLayer)) {
            // Prevent "Node was not found" errors if the `zoomLayer` was
            // already removed. This may occur intermittently if the scale
            // changes many times in very quick succession.
            div.removeChild(self.zoomLayer);
          }
          self.zoomLayer = null;
        }

        self.error = error;
        self.stats = pdfPage.stats;
        if (self.onAfterDraw) {
          self.onAfterDraw();
        }
        self.eventBus.dispatch('pagerendered', {
          source: self,
          pageNumber: self.id,
          cssTransform: false,
        });

        if (!error) {
          resolveRenderPromise(undefined);
        } else {
          rejectRenderPromise(error);
        }
      }

      var renderContinueCallback = null;
      if (this.renderingQueue) {
        renderContinueCallback = function renderContinueCallback(cont) {
          if (!self.renderingQueue.isHighestPriority(self)) {
            self.renderingState = RenderingStates.PAUSED;
            self.resume = function resumeCallback() {
              self.renderingState = RenderingStates.RUNNING;
              cont();
            };
            return;
          }
          if (isCanvasHidden) {
            self.canvas.removeAttribute('hidden');
            isCanvasHidden = false;
          }
          cont();
        };
      }

      var transform = !outputScale.scaled ? null :
        [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
      var renderContext = {
        canvasContext: ctx,
        transform: transform,
        viewport: this.viewport,
        // intent: 'default', // === 'display'
      };
      var renderTask = this.renderTask = this.pdfPage.render(renderContext);
      renderTask.onContinue = renderContinueCallback;

      this.renderTask.promise.then(
        function pdfPageRenderCallback() {
          pageViewDrawCallback(null);
          if (textLayer) {
            self.pdfPage.getTextContent({
              normalizeWhitespace: true,
            }).then(function textContentResolved(textContent) {
              textLayer.setTextContent(textContent);
              textLayer.render(TEXT_LAYER_RENDER_DELAY);
            });
          }
        },
        function pdfPageRenderError(error) {
          pageViewDrawCallback(error);
        }
      );

      if (this.annotationLayerFactory) {
        if (!this.annotationLayer) {
          this.annotationLayer = this.annotationLayerFactory.
            createAnnotationLayerBuilder(div, this.pdfPage);
        }
        this.annotationLayer.render(this.viewport, 'display');
      }
      div.setAttribute('data-loaded', true);

      if (self.onBeforeDraw) {
        self.onBeforeDraw();
      }
      return promise;
    },

    beforePrint: function PDFPageView_beforePrint(printContainer) {
      var CustomStyle = pdfjsLib.CustomStyle;
      var pdfPage = this.pdfPage;

      var viewport = pdfPage.getViewport(1);
      // Use the same hack we use for high dpi displays for printing to get
      // better output until bug 811002 is fixed in FF.
      var PRINT_OUTPUT_SCALE = 2;
      var canvas = document.createElement('canvas');

      // The logical size of the canvas.
      canvas.width = Math.floor(viewport.width) * PRINT_OUTPUT_SCALE;
      canvas.height = Math.floor(viewport.height) * PRINT_OUTPUT_SCALE;

      // The rendered size of the canvas, relative to the size of canvasWrapper.
      canvas.style.width = (PRINT_OUTPUT_SCALE * 100) + '%';

      var cssScale = 'scale(' + (1 / PRINT_OUTPUT_SCALE) + ', ' +
                                (1 / PRINT_OUTPUT_SCALE) + ')';
      CustomStyle.setProp('transform' , canvas, cssScale);
      CustomStyle.setProp('transformOrigin' , canvas, '0% 0%');

      var canvasWrapper = document.createElement('div');
      canvasWrapper.appendChild(canvas);
      printContainer.appendChild(canvasWrapper);

      canvas.mozPrintCallback = function(obj) {
        var ctx = obj.context;

        ctx.save();
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
//#if !(MOZCENTRAL || FIREFOX)
        // Used by the mozCurrentTransform polyfill in src/display/canvas.js.
        ctx._transformMatrix =
          [PRINT_OUTPUT_SCALE, 0, 0, PRINT_OUTPUT_SCALE, 0, 0];
//#endif
        ctx.scale(PRINT_OUTPUT_SCALE, PRINT_OUTPUT_SCALE);

        var renderContext = {
          canvasContext: ctx,
          viewport: viewport,
          intent: 'print'
        };

        pdfPage.render(renderContext).promise.then(function() {
          // Tell the printEngine that rendering this canvas/page has finished.
          obj.done();
        }, function(error) {
          console.error(error);
          // Tell the printEngine that rendering this canvas/page has failed.
          // This will make the print process stop.
          if ('abort' in obj) {
            obj.abort();
          } else {
            obj.done();
          }
        });
      };
    },
  };

  return PDFPageView;
})();

exports.PDFPageView = PDFPageView;
}));
