function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js":
  /*!*******************************************************************!*\
    !*** ./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js ***!
    \*******************************************************************/

  /*! exports provided: CelsiusDialComponent, ClockDialComponent, FarenheitDialComponent, HumidityDialComponent, PressureInDialComponent, PressureMbDialComponent, TempSqDialComponent, WeatherGaugesModule, WindDialComponent */

  /***/
  function distWeatherGaugesFesm2015NjfiorelloWeatherGaugesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CelsiusDialComponent", function () {
      return CelsiusDialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockDialComponent", function () {
      return ClockDialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarenheitDialComponent", function () {
      return FarenheitDialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HumidityDialComponent", function () {
      return HumidityDialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PressureInDialComponent", function () {
      return PressureInDialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PressureMbDialComponent", function () {
      return PressureMbDialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempSqDialComponent", function () {
      return TempSqDialComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherGaugesModule", function () {
      return WeatherGaugesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindDialComponent", function () {
      return WindDialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CelsiusDialComponent = /*#__PURE__*/function () {
      function CelsiusDialComponent() {
        _classCallCheck(this, CelsiusDialComponent);

        this.temperature = 20;
        this.rotate = 'rotate(0)';
      }

      _createClass(CelsiusDialComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['temperature']) {
            // temperature: [-30, 70]
            //   range = abs(-30 - 70) = 100;
            //   center = (range / 2) + min = 20;
            // arc: [-100, 100]
            //   range = abs(-100 - 100) = 200;
            // factor: arc.range / temperature.range = 2;
            // rotation = (t - center) * factor;
            var c = changes['temperature'].currentValue;
            this.rotate = "rotate(".concat((c - 20) * 2 || 0, ")");
          }
        }
      }]);

      return CelsiusDialComponent;
    }();

    CelsiusDialComponent.ɵfac = function CelsiusDialComponent_Factory(t) {
      return new (t || CelsiusDialComponent)();
    };

    CelsiusDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CelsiusDialComponent,
      selectors: [["wg-celsius-dial"]],
      inputs: {
        temperature: "temperature"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 99,
      vars: 5,
      consts: [["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "celsius-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "celsius-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "celsius-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "celsius-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "celsius-dial-glass-clip"], ["r", "43"], ["id", "celsius-dial-ticks"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(2)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(4)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(6)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(8)"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(10)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(12)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(14)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(16)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(18)"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "6"], ["r", "48", "fill", "url(#celsius-dial-metalic)", "filter", "url(#celsius-dial-drop-shadow)"], ["r", "44", "fill", "#ffe", "fill-opacity", "0.6", "stroke", "black", "stroke-width", "0.2", "stroke-opacity", "0.5", "filter", "url(#celsius-dial-inner-shadow)"], ["transform", "rotate(-100)"], ["href", "#celsius-dial-ticks"], ["y", "-34", "transform", "rotate(100 0 -34)"], ["transform", "rotate(-80)"], ["y", "-34", "transform", "rotate(80 0 -34)"], ["transform", "rotate(-60)"], ["y", "-34", "transform", "rotate(60 0 -34)"], ["transform", "rotate(-40)"], ["y", "-35", "transform", "rotate(40 0 -35)"], ["transform", "rotate(-20)"], ["y", "-34", "transform", "rotate(20 0 -34)"], ["transform", "rotate(0)"], ["y", "-34", "transform", "rotate(0 0 -34)"], ["transform", "rotate(20)"], ["y", "-34", "transform", "rotate(-20 0 -34)"], ["transform", "rotate(40)"], ["y", "-34", "transform", "rotate(-40 0 -34)"], ["transform", "rotate(60)"], ["y", "-34", "transform", "rotate(-60 0 -34)"], ["transform", "rotate(80)"], ["y", "-34", "transform", "rotate(-80 0 -34)"], ["transform", "rotate(100)"], ["y1", "-44", "y2", "-40", "stroke-width", ".8", "stroke", "black"], ["y", "-34", "transform", "rotate(-100 0 -34)"], ["transform", "translate(0 14)"], ["y", "4", "x", "-20", "width", "40", "height", "14", "rx", "3", "ry", "3", "fill", "#def", "filter", "url(#celsius-dial-inner-shadow)"], ["y", "12", "font-size", "9", 1, "lcd"], ["fill", "#e00", "filter", "url(#celsius-dial-drop-shadow)"], [1, "needle"], ["r", "4"], ["d", "M-3 0 L-.4 -40 L.4 -40 L3 0"], ["r", "0.75", "fill", "black"], ["r", "53", "cx", "10", "cy", "10", "fill", "none", "stroke", "white", "stroke-width", "4", "opacity", ".5", "filter", "url(#celsius-dial-glass-blur)", "clip-path", "url(#celsius-dial-glass-clip)"]],
      template: function CelsiusDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clipPath", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "text", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "text", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "text", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "text", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "text", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "text", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "text", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "text", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "text", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "text", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "line", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "text", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "g", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Temperature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "rect", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "text", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "circle", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "circle", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "circle", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](92, 2, ctx.temperature, "1.1-1"), " \xB0C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.rotate);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CelsiusDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-celsius-dial',
          templateUrl: './celsius-dial.component.html'
        }]
      }], null, {
        temperature: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var FarenheitDialComponent = /*#__PURE__*/function () {
      function FarenheitDialComponent() {
        _classCallCheck(this, FarenheitDialComponent);

        this.temperature = 60;
        this.rotate = 'rotate(0)';
      }

      _createClass(FarenheitDialComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['temperature']) {
            // temperature: [-30, 150]
            //   range = abs(-30 - 150) = 180;
            //   center = range / 2 + min = 60;
            // arc: [-126, 126]
            //   range = abs(-126 - 126) = 252;
            // factor: arc.range / temperature.range = 1.4;
            // rotation = (t - center) * factor;
            var t = changes['temperature'].currentValue;
            this.rotate = "rotate(".concat((t - 60) * 1.4 || 0, ")");
          }
        }
      }]);

      return FarenheitDialComponent;
    }();

    FarenheitDialComponent.ɵfac = function FarenheitDialComponent_Factory(t) {
      return new (t || FarenheitDialComponent)();
    };

    FarenheitDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FarenheitDialComponent,
      selectors: [["wg-farenheit-dial"]],
      inputs: {
        temperature: "temperature"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 125,
      vars: 5,
      consts: [["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "farenheit-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "farenheit-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "farenheit-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "farenheit-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "farenheit-dial-glass-clip"], ["r", "43"], ["id", "farenheit-dial-ticks"], ["y1", "-44", "y2", "-39", "stroke-width", ".7", "stroke", "black"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(1.4)"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(2.8)"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(4.2)"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(5.6)"], ["y1", "-44", "y2", "-40", "stroke-width", ".5", "stroke", "black", "transform", "rotate(7)"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(8.4)"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(9.8)"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(11.2)"], ["y1", "-44", "y2", "-41", "stroke-width", ".5", "stroke", "black", "transform", "rotate(12.6)"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "6"], ["r", "48", "fill", "url(#farenheit-dial-metalic)", "filter", "url(#farenheit-dial-drop-shadow)"], ["r", "44", "fill", "#ffe", "fill-opacity", "0.6", "stroke", "black", "stroke-width", "0.2", "stroke-opacity", "0.5", "filter", "url(#farenheit-dial-inner-shadow)"], ["transform", "rotate(-126)"], ["href", "#farenheit-dial-ticks"], ["y", "-34", "transform", "rotate(126 0 -34)"], ["transform", "rotate(-112)"], ["transform", "rotate(-98)"], ["transform", "rotate(-105)", "font-size", "5"], ["y", "-35", "transform", "rotate(105 0 -35)"], ["transform", "rotate(-84)"], ["y", "-35", "transform", "rotate(84 0 -35)"], ["transform", "rotate(-70)"], ["transform", "rotate(-56)"], ["transform", "rotate(-63)", "font-size", "5"], ["y", "-35", "transform", "rotate(63 0 -35)"], ["transform", "rotate(-42)"], ["y", "-34", "transform", "rotate(42 0 -34)"], ["transform", "rotate(-28)"], ["transform", "rotate(-14)"], ["transform", "rotate(-21)", "font-size", "5"], ["y", "-35", "transform", "rotate(21 0 -35)"], ["transform", "rotate(0)"], ["y", "-34", "transform", "rotate(0 0 -34)"], ["transform", "rotate(14)"], ["transform", "rotate(28)"], ["transform", "rotate(21)", "font-size", "5"], ["y", "-35", "transform", "rotate(-21 0 -35)"], ["transform", "rotate(42)"], ["y", "-34", "transform", "rotate(-42 0 -34)"], ["transform", "rotate(56)"], ["transform", "rotate(70)"], ["transform", "rotate(63)", "font-size", "5"], ["y", "-34", "transform", "rotate(-63 0 -34)"], ["transform", "rotate(84)"], ["y", "-33", "transform", "rotate(-84 0 -33)"], ["transform", "rotate(98)"], ["transform", "rotate(112)"], ["transform", "rotate(105)", "font-size", "5"], ["y", "-35", "transform", "rotate(-105 0 -35)"], ["transform", "rotate(126)"], ["y1", "-44", "y2", "-40", "stroke-width", ".8", "stroke", "black"], ["y", "-34", "transform", "rotate(-126 0 -34)"], ["transform", "translate(0 14)"], ["y", "4", "x", "-20", "width", "40", "height", "14", "rx", "3", "ry", "3", "fill", "#def", "filter", "url(#farenheit-dial-inner-shadow)"], ["y", "12", "font-size", "9", 1, "lcd"], ["fill", "#e00", "filter", "url(#farenheit-dial-drop-shadow)"], [1, "needle"], ["r", "4"], ["d", "M-3 0 L-.4 -40 L.4 -40 L3 0"], ["r", "0.75", "fill", "black"], ["r", "53", "cx", "10", "cy", "10", "fill", "none", "stroke", "white", "stroke-width", "4", "opacity", ".5", "filter", "url(#farenheit-dial-glass-blur)", "clip-path", "url(#farenheit-dial-glass-clip)"]],
      template: function FarenheitDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clipPath", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "text", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "text", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "text", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "g", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "text", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "g", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "text", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "g", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "text", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "text", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "text", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "g", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "text", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "g", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "text", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "105");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "g", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "text", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "g", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "text", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "135");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "g", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "line", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "text", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "g", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Temperature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "rect", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "text", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](118, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "g", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "g", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "circle", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "circle", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "circle", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](118, 2, ctx.temperature, "1.1-1"), " \xB0F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.rotate);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarenheitDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-farenheit-dial',
          templateUrl: './farenheit-dial.component.html'
        }]
      }], null, {
        temperature: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var HumidityDialComponent = /*#__PURE__*/function () {
      function HumidityDialComponent() {
        _classCallCheck(this, HumidityDialComponent);

        this.humidity = 50;
        this.rotate = 'rotate(0)';
      }

      _createClass(HumidityDialComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['humidity']) {
            // humidity: [0, 100]
            //   range = abs(0 - 100) = 100;
            //   center = (range / 2) + min = 50;
            // arc: [-100, 100]
            //   range = abs(-100 - 100) = 200;
            // factor: arc.range / temperature.range = 2;
            // rotation = (h - center) * factor;
            var h = changes['humidity'].currentValue;
            this.rotate = "rotate(".concat((h - 50) * 2 || 0, ")");
          }
        }
      }]);

      return HumidityDialComponent;
    }();

    HumidityDialComponent.ɵfac = function HumidityDialComponent_Factory(t) {
      return new (t || HumidityDialComponent)();
    };

    HumidityDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HumidityDialComponent,
      selectors: [["wg-humidity-dial"]],
      inputs: {
        humidity: "humidity"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 99,
      vars: 5,
      consts: [["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "humidity-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "humidity-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "humidity-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "humidity-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "humidity-dial-glass-clip"], ["r", "43"], ["id", "humidity-dial-ticks"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(2)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(4)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(6)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(8)"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(10)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(12)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(14)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(16)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(18)"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "6"], ["r", "48", "fill", "url(#humidity-dial-metalic)", "filter", "url(#humidity-dial-drop-shadow)"], ["r", "44", "fill", "#ffe", "fill-opacity", "0.6", "stroke", "black", "stroke-width", "0.2", "stroke-opacity", "0.5", "filter", "url(#humidity-dial-inner-shadow)"], ["transform", "rotate(-100)"], ["href", "#humidity-dial-ticks"], ["y", "-35", "transform", "rotate(100 0 -35)"], ["transform", "rotate(-80)"], ["y", "-34", "transform", "rotate(80 0 -34)"], ["transform", "rotate(-60)"], ["y", "-34", "transform", "rotate(60 0 -34)"], ["transform", "rotate(-40)"], ["y", "-34", "transform", "rotate(40 0 -34)"], ["transform", "rotate(-20)"], ["y", "-34", "transform", "rotate(20 0 -34)"], ["transform", "rotate(0)"], ["y", "-34", "transform", "rotate(0 0 -34)"], ["transform", "rotate(20)"], ["y", "-34", "transform", "rotate(-20 0 -34)"], ["transform", "rotate(40)"], ["y", "-34", "transform", "rotate(-40 0 -34)"], ["transform", "rotate(60)"], ["y", "-34", "transform", "rotate(-60 0 -34)"], ["transform", "rotate(80)"], ["y", "-34", "transform", "rotate(-80 0 -34)"], ["transform", "rotate(100)"], ["y1", "-44", "y2", "-40", "stroke-width", ".8", "stroke", "black"], ["y", "-34", "transform", "rotate(-100 0 -34)"], ["transform", "translate(0 14)"], ["y", "4", "x", "-20", "width", "40", "height", "14", "rx", "3", "ry", "3", "fill", "#def", "filter", "url(#humidity-dial-inner-shadow)"], ["y", "12", "font-size", "9", 1, "lcd"], ["fill", "#e00", "filter", "url(#humidity-dial-drop-shadow)"], [1, "needle"], ["r", "4"], ["d", "M-3 0 L-.4 -40 L.4 -40 L3 0"], ["r", "0.75", "fill", "black"], ["r", "53", "cx", "10", "cy", "10", "fill", "none", "stroke", "white", "stroke-width", "4", "opacity", ".5", "filter", "url(#humidity-dial-glass-blur)", "clip-path", "url(#humidity-dial-glass-clip)"]],
      template: function HumidityDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clipPath", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "text", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "text", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "text", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "text", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "text", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "text", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "text", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "text", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "text", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "text", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "line", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "text", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "g", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Relative Humidity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "rect", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "text", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "circle", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "circle", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "circle", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](92, 2, ctx.humidity, "1.1-1"), " %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.rotate);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HumidityDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-humidity-dial',
          templateUrl: './humidity-dial.component.html'
        }]
      }], null, {
        humidity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var WindDialComponent = /*#__PURE__*/function () {
      function WindDialComponent() {
        _classCallCheck(this, WindDialComponent);

        this.direction = 0;
        this.speed = 0;
        this.units = 'mph';
        this.rotate = 'rotate(0)';
      }

      _createClass(WindDialComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['direction']) {
            var d = changes['direction'].currentValue;
            this.rotate = "rotate(".concat(d || 0, ")");
          }
        }
      }]);

      return WindDialComponent;
    }();

    WindDialComponent.ɵfac = function WindDialComponent_Factory(t) {
      return new (t || WindDialComponent)();
    };

    WindDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WindDialComponent,
      selectors: [["wg-wind-dial"]],
      inputs: {
        direction: "direction",
        speed: "speed",
        units: "units"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 84,
      vars: 10,
      consts: [["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "wind-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "wind-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "wind-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "wind-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "wind-dial-glass-clip"], ["r", "43"], ["id", "wind-dial-face-clip"], ["r", "44"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "6"], ["r", "48", "fill", "url(#wind-dial-metalic)", "filter", "url(#wind-dial-drop-shadow)"], ["r", "44", "fill", "#ffe", "fill-opacity", "0.6", "stroke", "black", "stroke-width", "0.2", "stroke-opacity", "0.5", "filter", "url(#wind-dial-inner-shadow)"], ["font-size", "8"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black"], ["y", "-34"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(22.5)"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black", "transform", "rotate(45)"], ["x", "25", "y", "-22"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(67.5)"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black", "transform", "rotate(90)"], ["x", "34"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(112.5)"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black", "transform", "rotate(135)"], ["x", "25", "y", "24"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(157.5)"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black", "transform", "rotate(180)"], ["y", "34"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(202.5)"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black", "transform", "rotate(225)"], ["x", "-25", "y", "24"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(247.5)"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black", "transform", "rotate(270)"], ["x", "-34"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(292.5)"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black", "transform", "rotate(315)"], ["x", "-25", "y", "-22"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(337.5)"], ["transform", "translate(0 -22)"], ["y", "4", "x", "-20", "width", "40", "height", "14", "rx", "3", "ry", "3", "fill", "#def", "filter", "url(#wind-dial-inner-shadow)"], ["y", "12", "font-size", "9", 1, "lcd-0"], ["transform", "translate(0 2)"], ["y", "12", "font-size", "9", 1, "lcd-1"], ["fill", "#e00", "filter", "url(#wind-dial-drop-shadow)", "clip-path", "url(#wind-dial-face-clip)"], [1, "needle"], ["d", "M -2.5 -44 L 2.5 -44 L .4 -39 L -.4 -39 z"], ["d", "M -2.5 -44 L 2.5 -44 L .4 -39 L -.4 -39 z", "transform", "translate(0 83)"], ["r", "53", "cx", "10", "cy", "10", "fill", "none", "stroke", "white", "stroke-width", "4", "opacity", ".5", "filter", "url(#wind-dial-glass-blur)", "clip-path", "url(#wind-dial-glass-clip)"]],
      template: function WindDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clipPath", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "clipPath", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "circle", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "text", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "text", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "line", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "text", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "line", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "text", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "SE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "line", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "text", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "line", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "line", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "text", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "SW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "line", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "line", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "text", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "W");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "line", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "line", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "text", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "NW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "line", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Direction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "rect", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "text", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "rect", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "text", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "circle", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](71, 4, ctx.direction, "1.1-1"), "\xB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.units || "Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](78, 7, ctx.speed, "1.1-1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.rotate);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-wind-dial',
          templateUrl: './wind-dial.component.html'
        }]
      }], null, {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        speed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        units: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    function PressureInDialComponent__svg_g_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx_r0.rotPrevious);
      }
    }

    var PressureInDialComponent = /*#__PURE__*/function () {
      function PressureInDialComponent() {
        _classCallCheck(this, PressureInDialComponent);

        this.current = 29;
        this.rotCurrent = 'rotate(0)';
        this.rotPrevious = 'rotate(0)';
      }

      _createClass(PressureInDialComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['current']) {
            // current: [25, 33]
            //   range = abs(25 - 33) = 8;
            //   center = (range / 2) + min = 29;
            // arc: [-120, 120]
            //   range = abs(-120 - 120) = 240;
            // factor: arc.range / pressure.range = 3;
            // rotation = (t - center) * factor;
            var c = changes['current'].currentValue;
            this.rotCurrent = "rotate(".concat((c - 29) * 30 || 0, ")");
          }

          if (changes['previous']) {
            var p = changes['previous'].currentValue;
            this.rotPrevious = "rotate(".concat((p - 29) * 30 || 0, ")");
          }
        }
      }]);

      return PressureInDialComponent;
    }();

    PressureInDialComponent.ɵfac = function PressureInDialComponent_Factory(t) {
      return new (t || PressureInDialComponent)();
    };

    PressureInDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PressureInDialComponent,
      selectors: [["wg-pressure-in-dial"]],
      inputs: {
        current: "current",
        previous: "previous"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 105,
      vars: 6,
      consts: [["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "pressure-in-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "pressure-in-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "pressure-in-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "pressure-in-dial-inner-shadow-2", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "1.5", "result", "blur"], ["in", "firstFilter", "stdDeviation", "1.5", "result", "blur2"], ["id", "pressure-in-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "pressure-in-dial-glass-clip"], ["r", "43"], ["id", "pressure-in-dial-ticks"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(3)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(6)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(9)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(12)"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(15)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(18)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(21)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(24)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(27)"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "6"], ["r", "48", "fill", "url(#pressure-in-dial-metalic)", "filter", "url(#pressure-in-dial-drop-shadow)"], ["r", "44", "fill", "#ffe", "fill-opacity", "0.6", "stroke", "black", "stroke-width", "0.2", "stroke-opacity", "0.5", "filter", "url(#pressure-in-dial-inner-shadow)"], ["transform", "rotate(-120)"], ["href", "#pressure-in-dial-ticks"], ["y", "-34", "transform", "rotate(120 0 -34)"], ["transform", "rotate(-90)"], ["y", "-34", "transform", "rotate(90 0 -34)"], ["transform", "rotate(-60)"], ["y", "-34", "transform", "rotate(60 0 -34)"], ["transform", "rotate(-30)"], ["y", "-34", "transform", "rotate(30 0 -34)"], ["transform", "rotate(0)"], ["y", "-34", "transform", "rotate(-0 0 -34)"], ["transform", "rotate(30)"], ["y", "-34", "transform", "rotate(-30 0 -34)"], ["transform", "rotate(60)"], ["y", "-34", "transform", "rotate(-60 0 -34)"], ["transform", "rotate(90)"], ["y", "-34", "transform", "rotate(-90 0 -34)"], ["transform", "rotate(120)"], ["y1", "-44", "y2", "-40", "stroke-width", ".8", "stroke", "black"], ["y", "-34", "transform", "rotate(-120 0 -34)"], ["transform", "translate(0 14)"], ["y", "4", "x", "-20", "width", "40", "height", "14", "rx", "3", "ry", "3", "fill", "#def", "filter", "url(#pressure-in-dial-inner-shadow)"], ["y", "12", "font-size", "9", 1, "lcd"], ["filter", "url(#pressure-in-dial-drop-shadow)"], ["fill", "#e00", 1, "red-needle"], ["r", "4"], ["d", "M-3 0 L-.4 -40 L.4 -40 L3 0"], ["r", "0.75", "fill", "black"], ["filter", "url(#pressure-in-dial-drop-shadow)", 4, "ngIf"], ["r", "53", "cx", "10", "cy", "10", "fill", "none", "stroke", "white", "stroke-width", "4", "opacity", ".5", "filter", "url(#pressure-in-dial-glass-blur)", "clip-path", "url(#pressure-in-dial-glass-clip)"], ["fill", "#00e", 1, "blue-needle"], ["r", "2.5"], ["d", "M-1 0 L-.3 -40 L.3 -40 L1 0"]],
      template: function PressureInDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "feGaussianBlur", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "filter", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "feGaussianBlur", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "clipPath", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "line", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "line", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "line", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "line", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "line", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "line", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "circle", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "text", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "text", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "26");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "text", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "27");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "text", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "28");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "text", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "29");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "text", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "text", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "31");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "use", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "text", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "32");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "g", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "line", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "text", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "33");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "g", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Pressure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "rect", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "text", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "g", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "g", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "circle", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "circle", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, PressureInDialComponent__svg_g_103_Template, 5, 1, "g", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "circle", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](97, 3, ctx.current, "1.2-2"), " in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.rotCurrent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previous);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PressureInDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-pressure-in-dial',
          templateUrl: './pressure-in-dial.component.html'
        }]
      }], null, {
        current: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    function PressureMbDialComponent__svg_g_98_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx_r0.rotPrevious);
      }
    }

    var PressureMbDialComponent = /*#__PURE__*/function () {
      function PressureMbDialComponent() {
        _classCallCheck(this, PressureMbDialComponent);

        this.current = 980;
        this.rotCurrent = 'rotate(0)';
        this.rotPrevious = 'rotate(0)';
      }

      _createClass(PressureMbDialComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['current']) {
            // current: [880, 1080]
            //   range = abs(880 - 1080) = 200;
            //   center = (range / 2) + min = 980;
            // arc: [-125, 125]
            //   range = abs(-125 - 125) = 250;
            // factor: arc.range / pressure.range = 250 / 200 = 1.25;
            // rotation = (t - center) * factor;
            var c = changes['current'].currentValue;
            this.rotCurrent = "rotate(".concat((c - 980) * 1.25 || 0, ")");
          }

          if (changes['previous']) {
            var p = changes['previous'].currentValue;
            this.rotPrevious = "rotate(".concat((p - 980) * 1.25 || 0, ")");
          }
        }
      }]);

      return PressureMbDialComponent;
    }();

    PressureMbDialComponent.ɵfac = function PressureMbDialComponent_Factory(t) {
      return new (t || PressureMbDialComponent)();
    };

    PressureMbDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PressureMbDialComponent,
      selectors: [["wg-pressure-mb-dial"]],
      inputs: {
        current: "current",
        previous: "previous"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 100,
      vars: 6,
      consts: [["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "pressure-mb-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "pressure-mb-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "pressure-mb-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "pressure-mb-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "pressure-mb-dial-glass-clip"], ["r", "43"], ["id", "pressure-mb-dial-ticks"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(2.5)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(5)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(7.5)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(10)"], ["y1", "-44", "y2", "-40", "stroke-width", ".6", "stroke", "black", "transform", "rotate(12.5)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(15)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(17.5)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(20)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(22.5)"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "6"], ["r", "48", "fill", "url(#pressure-mb-dial-metalic)", "filter", "url(#pressure-mb-dial-drop-shadow)"], ["r", "44", "fill", "#ffe", "fill-opacity", "0.6", "stroke", "black", "stroke-width", "0.2", "stroke-opacity", "0.5", "filter", "url(#pressure-mb-dial-inner-shadow)"], ["transform", "rotate(-125)"], ["href", "#pressure-mb-dial-ticks"], ["y", "-33", "transform", "rotate(125 0 -33)"], ["transform", "rotate(-100)"], ["y", "-33", "transform", "rotate(100 0 -33)"], ["transform", "rotate(-75)"], ["y", "-32", "transform", "rotate(75 0 -32)"], ["transform", "rotate(-50)"], ["y", "-33", "transform", "rotate(50 0 -33)"], ["transform", "rotate(-25)"], ["y", "-34", "transform", "rotate(25 0 -34)"], ["transform", "rotate(0)"], ["y", "-34", "transform", "rotate(0 0 -34)"], ["transform", "rotate(25)"], ["y", "-33", "transform", "rotate(-25 0 -33)"], ["transform", "rotate(50)"], ["y", "-32", "transform", "rotate(-50 0 -32)"], ["transform", "rotate(75)"], ["y", "-31", "transform", "rotate(-75 0 -31)"], ["transform", "rotate(100)"], ["y", "-31", "transform", "rotate(-100 0 -31)"], ["transform", "rotate(125)"], ["y1", "-44", "y2", "-40", "stroke-width", ".8", "stroke", "black"], ["y", "-33", "transform", "rotate(-125 0 -33)"], ["transform", "translate(0 14)"], ["y", "4", "x", "-20", "width", "40", "height", "14", "rx", "3", "ry", "3", "fill", "#def", "filter", "url(#pressure-mb-dial-inner-shadow)"], ["y", "12", "font-size", "9", 1, "lcd"], ["filter", "url(#pressure-mb-dial-drop-shadow)"], ["fill", "#e00", 1, "red-needle"], ["r", "4"], ["d", "M-3 0 L-.4 -40 L.4 -40 L3 0"], ["r", "0.75", "fill", "black"], ["filter", "url(#pressure-mb-dial-drop-shadow)", 4, "ngIf"], ["r", "53", "cx", "10", "cy", "10", "fill", "none", "stroke", "white", "stroke-width", "4", "opacity", ".5", "filter", "url(#pressure-mb-dial-glass-blur)", "clip-path", "url(#pressure-mb-dial-glass-clip)"], ["fill", "#00e", 1, "blue-needle"], ["r", "2.5"], ["d", "M-1 0 L-.3 -40 L.3 -40 L1 0"]],
      template: function PressureMbDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clipPath", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "line", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "text", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "880");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "text", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "900");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "text", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "920");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "text", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "940");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "text", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "960");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "text", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "980");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "text", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "1000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "text", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "1020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "text", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "1040");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "use", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "text", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "1060");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "line", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "text", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "1080");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "g", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Pressure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "rect", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "text", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "circle", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "circle", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, PressureMbDialComponent__svg_g_98_Template, 5, 1, "g", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "circle", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](92, 3, ctx.current, "1.0-0"), " mb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.rotCurrent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previous);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PressureMbDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-pressure-mb-dial',
          templateUrl: './pressure-mb-dial.component.html'
        }]
      }], null, {
        current: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    function TempSqDialComponent__svg_ng_container_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "text", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "text", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xB0C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var c_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("transform", "translate(0, ", c_r2.shift, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, c_r2.text, "2.0-0"));
      }
    }

    function TempSqDialComponent__svg_ng_container_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "text", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var f_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("transform", "translate(0, ", f_r3.shift, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, f_r3.text, "2.0-0"));
      }
    }

    var C = [0, 1, 2, 3, 4, 5, 6];
    var F = [0, 1, 2, 3, 4, 5, 6];

    var TempSqDialComponent = /*#__PURE__*/function () {
      function TempSqDialComponent() {
        _classCallCheck(this, TempSqDialComponent);

        this.temperature = 20;
        this.celsius = this.cscale();
        this.farenheit = this.fscale();
      }
      /**
       *
       * @param changes
       */


      _createClass(TempSqDialComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.temperature) {
            this.celsius = this.cscale();
            this.farenheit = this.fscale();
          }
        }
        /**
         * Create the C scale
         */

      }, {
        key: "cscale",
        value: function cscale() {
          var m = this.temperature % 5 * 4.5;
          var t = Math.floor(this.temperature / 5);
          return C.map(function (c) {
            return {
              shift: 22.5 * (c - 3) - m,
              text: (t + (c - 3)) * 5
            };
          });
        }
        /**
         * Create the F scale
         */

      }, {
        key: "fscale",
        value: function fscale() {
          var tf = this.temperature * 1.8 + 32;
          var t = Math.floor(tf / 10);
          var m = tf % 10 * 2.5;
          return F.map(function (f) {
            return {
              shift: 25 * (f - 3) - m,
              text: (t + (f - 3)) * 10
            };
          });
        }
      }]);

      return TempSqDialComponent;
    }();

    TempSqDialComponent.ɵfac = function TempSqDialComponent_Factory(t) {
      return new (t || TempSqDialComponent)();
    };

    TempSqDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TempSqDialComponent,
      selectors: [["wg-temp-sq-dial"]],
      inputs: {
        temperature: "temperature"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 49,
      vars: 2,
      consts: [["viewBox", "0 0 100 100"], ["id", "temp-sq-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "temp-sq-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "temp-sq-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "temp-sq-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "temp-sq-vis-gradient", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["offset", "0%", "stop-color", "#ccc"], ["offset", "35%", "stop-color", "#fff"], ["offset", "100%", "stop-color", "#aaa"], ["id", "temp-sq-dial-vis", "x", "-45", "y", "-45", "width", "90", "height", "90", "ry", "3", "rx", "3"], ["id", "temp-sq-dial-clip"], ["href", "#temp-sq-dial-vis"], ["id", "temp-sq-deg-c", "x", "-34", "text-anchor", "start", "font-size", "6"], ["id", "temp-sq-deg-f", "x", "34", "text-anchor", "end", "font-size", "6"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "9", "dominant-baseline", "middle"], ["x", "-48", "y", "-48", "width", "96", "height", "96", "ry", "3", "rx", "3", "fill", "url(#temp-sq-dial-metalic)", "filter", "url(#temp-sq-dial-drop-shadow)"], ["href", "#temp-sq-dial-vis", "fill", "url(#temp-sq-vis-gradient)", "filter", "url(#temp-sq-dial-inner-shadow)"], ["clip-path", "url(#temp-sq-dial-clip)"], ["y1", "-50", "y2", "50", "stroke", "black", "stroke-width", ".6"], ["text-anchor", "end"], [4, "ngFor", "ngForIndex", "ngForOf"], ["text-anchor", "start"], [4, "ngFor", "ngForOf"], ["x1", "-44", "x2", "44", "stroke", "red", "stroke-width", ".6"], ["href", "#temp-sq-dial-vis", "fill", "url(#temp-sq-dial-glass-blur)", "opacity", ".4", "stoke", "black", "stroke-width", ".5"], ["href", "#temp-sq-deg-c", "y", "11.25"], ["x", "-12"], ["x", "-48", "font-size", "6", "transform", "translate(0 5)"], ["d", "M0 0 h-8 m8 -4.5 h-4 m4 -4.5 h-4 m4 -4.5 h-4 m4 -4.5 h-4", "stroke", "black", "stroke-width", "1"], ["href", "#temp-sq-deg-f", "y", "12.5"], ["x", "12"], ["d", "M0 0 h8 m-8 -2.5 h4 m-4 -2.5 h4 m-4 -2.5 h4 m-4 -2.5 h4 m-4 -2.5 h6 m-6 -2.5 h4 m-4 -2.5 h4 m-4 -2.5 h4 m-4 -2.5 h4", "stroke", "black", "stroke-width", "1"]],
      template: function TempSqDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "linearGradient", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "stop", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "stop", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "stop", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "clipPath", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "use", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "text", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\xB0C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "text", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\xB0F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "use", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "line", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TempSqDialComponent__svg_ng_container_44_Template, 9, 5, "ng-container", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TempSqDialComponent__svg_ng_container_46_Template, 7, 5, "ng-container", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "use", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.celsius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.farenheit);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TempSqDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-temp-sq-dial',
          templateUrl: './temp-sq-dial.component.html',
          styleUrls: ['./temp-sq-dial.component.scss']
        }]
      }], null, {
        temperature: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var ClockDialComponent = /*#__PURE__*/function () {
      /**
       * Instances are constructed by angular
       */
      function ClockDialComponent() {
        _classCallCheck(this, ClockDialComponent);

        this.time = new Date();
        this.updateHands(this.time);
      }
      /**
       * Update display
       * @param time time to display on the clock
       */


      _createClass(ClockDialComponent, [{
        key: "updateHands",
        value: function updateHands(time) {
          // 360 / 60 = 6 degrees per second
          var s = time.getSeconds() * 6; // 360 / 60 = 6 degrees per minute plus partial second

          var m = time.getMinutes() * 6 + s / 60; // 360 / 12 = 30 degrees per hour plus partials

          var h = time.getHours() * 30 + m / 12;
          this.time = time;
          this.second = "rotate(".concat(s, ")");
          this.minute = "rotate(".concat(m, ")");
          this.hour = "rotate(".concat(h, ")");
        }
        /**
         * Called by angular on update to input
         * @ignore
         * @param changes angular changes
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // using async pipe resulted in null...
          if (this.time) {
            this.updateHands(this.time);
          }
        }
      }]);

      return ClockDialComponent;
    }();

    ClockDialComponent.ɵfac = function ClockDialComponent_Factory(t) {
      return new (t || ClockDialComponent)();
    };

    ClockDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClockDialComponent,
      selectors: [["wg-clock-dial"]],
      inputs: {
        time: "time"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 108,
      vars: 11,
      consts: [["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["id", "clock-dial-metalic", "x1", "0", "y1", "1", "x2", "1", "y2", "0"], ["offset", "0%", "stop-color", "#888"], ["offset", "50%", "stop-color", "#def"], ["offset", "100%", "stop-color", "#888"], ["id", "clock-dial-drop-shadow", "width", "1.5", "height", "1.5"], ["in", "SourceAlpha", "result", "offOut", "dx", "1", "dy", "1"], ["in", "offOut", "result", "blurOut", "stdDeviation", "1"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["id", "clock-dial-inner-shadow", "x0", "-0.5", "y0", "-0.5", "width", "1.25", "height", "1.25"], ["in", "SourceAlpha", "stdDeviation", "2", "result", "blur"], ["dx", "3", "dy", "2"], ["in2", "SourceAlpha", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["flood-color", "#444", "flood-opacity", "0.75"], ["in2", "shadowDiff", "operator", "in"], ["in2", "SourceGraphic", "operator", "over", "result", "firstFilter"], ["in", "firstFilter", "stdDeviation", "2", "result", "blur2"], ["dx", "-3", "dy", "-2"], ["in2", "firstFilter", "operator", "arithmetic", "k2", "-1", "k3", "1", "result", "shadowDiff"], ["in2", "firstFilter", "operator", "over"], ["id", "clock-dial-glass-blur"], ["stdDeviation", "1.75"], ["id", "clock-dial-glass-clip"], ["r", "43"], ["id", "clock-dial-ticks"], ["y1", "-44", "y2", "-39", "stroke-width", ".8", "stroke", "black"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(6)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(12)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(18)"], ["y1", "-44", "y2", "-41", "stroke-width", ".6", "stroke", "black", "transform", "rotate(24)"], ["transform", "translate(50 50)", "font-family", "tahoma", "dominant-baseline", "middle", "text-anchor", "middle", "font-size", "6"], ["r", "48", "fill", "url(#clock-dial-metalic)", "filter", "url(#clock-dial-drop-shadow)"], ["r", "44", "fill", "#ffe", "fill-opacity", "0.6", "stroke", "black", "stroke-width", "0.2", "stroke-opacity", "0.5", "filter", "url(#clock-dial-inner-shadow)"], ["transform", "rotate(0)"], ["href", "#clock-dial-ticks"], ["y", "-35", "transform", "rotate(0 0 -35)"], ["transform", "rotate(30)"], ["y", "-35", "transform", "rotate(-30 0 -35)"], ["transform", "rotate(60)"], ["y", "-35", "transform", "rotate(-60 0 -35)"], ["transform", "rotate(90)"], ["y", "-35", "transform", "rotate(-90 0 -35)"], ["transform", "rotate(120)"], ["y", "-35", "transform", "rotate(-120 0 -35)"], ["transform", "rotate(150)"], ["y", "-35", "transform", "rotate(-150 0 -35)"], ["transform", "rotate(180)"], ["y", "-35", "transform", "rotate(-180 0 -35)"], ["transform", "rotate(210)"], ["y", "-35", "transform", "rotate(-210 0 -35)"], ["transform", "rotate(240)"], ["y", "-35", "transform", "rotate(-240 0 -35)"], ["transform", "rotate(270)"], ["y", "-35", "transform", "rotate(-270 0 -35)"], ["transform", "rotate(300)"], ["y", "-35", "transform", "rotate(-300 0 -35)"], ["transform", "rotate(330)"], ["y", "-35", "transform", "rotate(-330 0 -35)"], ["transform", "translate(0 -27)"], ["y", "4", "x", "-20", "width", "40", "height", "14", "rx", "3", "ry", "3", "fill", "#def", "filter", "url(#clock-dial-inner-shadow)"], ["y", "12", "font-size", "9", 1, "lcd0"], ["transform", "translate(0 7)"], ["y", "12", "font-size", "9", 1, "lcd1"], ["fill", "#e00", "filter", "url(#clock-dial-drop-shadow)", "stroke", "white", "stroke-width", ".2", "stroke-opacity", ".4"], ["d", "M3 0 A3,3 1 1 1 -3 0 L-.6 -33 h.6z", "fill", "black"], ["d", "M3 0 A3,3 1 1 1 -3 0 L-.8 -38 h.8z", "fill", "black"], ["d", "M1 0 A1.25,1.25 1 1 1 -1 0 L-.4 -43 h.4z", "fill", "red"], ["r", "53", "cx", "10", "cy", "10", "fill", "none", "stroke", "white", "stroke-width", "4", "opacity", ".5", "filter", "url(#clock-dial-glass-blur)", "clip-path", "url(#clock-dial-glass-clip)"]],
      template: function ClockDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feGaussianBlur", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feBlend", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feGaussianBlur", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feOffset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feComposite", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "feGaussianBlur", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "feComposite", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "feFlood", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feComposite", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feComposite", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "filter", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "feGaussianBlur", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clipPath", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "text", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "text", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "text", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "text", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "text", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "text", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "g", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "text", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "text", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "text", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "text", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "g", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "text", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "text", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "g", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "use", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "text", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "g", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "rect", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "text", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "g", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "rect", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "text", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "circle", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](95, 5, ctx.time, "HH:mm:ss"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](102, 8, ctx.time, "yy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.hour);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.minute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.second);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wg-clock-dial',
          templateUrl: './clock-dial.component.html'
        }]
      }], function () {
        return [];
      }, {
        time: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var WeatherGaugesModule = function WeatherGaugesModule() {
      _classCallCheck(this, WeatherGaugesModule);
    };

    WeatherGaugesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WeatherGaugesModule
    });
    WeatherGaugesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WeatherGaugesModule_Factory(t) {
        return new (t || WeatherGaugesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeatherGaugesModule, {
        declarations: [CelsiusDialComponent, FarenheitDialComponent, HumidityDialComponent, WindDialComponent, ClockDialComponent, PressureInDialComponent, PressureMbDialComponent, TempSqDialComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [CelsiusDialComponent, FarenheitDialComponent, HumidityDialComponent, WindDialComponent, ClockDialComponent, PressureInDialComponent, PressureMbDialComponent, TempSqDialComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherGaugesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [CelsiusDialComponent, FarenheitDialComponent, HumidityDialComponent, WindDialComponent, ClockDialComponent, PressureInDialComponent, PressureMbDialComponent, TempSqDialComponent],
          exports: [CelsiusDialComponent, FarenheitDialComponent, HumidityDialComponent, WindDialComponent, ClockDialComponent, PressureInDialComponent, PressureMbDialComponent, TempSqDialComponent]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=njfiorello-weather-gauges.js.map

    /***/

  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/celsius/demo.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/celsius/demo.html ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppCelsiusDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-celsius-dial</span> <span class=\"token attr-name\" >[temperature]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>celsius<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-celsius-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-footer p-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Temperature<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-35<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>75<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>celsius<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/clock/demo.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/clock/demo.html ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppClockDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-clock-dial</span> <span class=\"token attr-name\" >[time]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>now<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-clock-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/farenheit/demo.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/farenheit/demo.html ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppFarenheitDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-farenheit-dial</span> <span class=\"token attr-name\" >[temperature]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>farenheit<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-farenheit-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-footer p-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Temperature<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-35<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>155<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>farenheit<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/humidity/demo.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/humidity/demo.html ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppHumidityDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-humidity-dial</span> <span class=\"token attr-name\" >[humidity]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>humidity<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-humidity-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-footer p-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Humidity<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-5<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>105<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>humidity<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/inches/demo.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/inches/demo.html ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppInchesDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-pressure-in-dial</span> <span class=\"token attr-name\" >[current]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>current<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[previous]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>previous<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-pressure-in-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-footer p-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Pressure<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>25<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>33<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >step</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>0.125<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>current<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Previous <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>previous<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>25<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>33<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >step</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>0.125<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>previous<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/millibars/demo.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/millibars/demo.html ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppMillibarsDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-pressure-mb-dial</span> <span class=\"token attr-name\" >[current]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>current<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[previous]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>previous<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-pressure-mb-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-footer p-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Pressure<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>880<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1080<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>current<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Previous <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>checkbox<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>previous<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>880<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1080<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>previous<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/temperature/demo.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/temperature/demo.html ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppTemperatureDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-temp-sq-dial</span> <span class=\"token attr-name\" >[temperature]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>celsius<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-temp-sq-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-footer p-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Temperature<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>-35<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>75<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>celsius<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/wind/demo.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/prismjs-loader?lang=markup!./src/app/wind/demo.html ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsLoaderIndexJsLangMarkupSrcAppWindDemoHtml(module, exports) {
    module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-body<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>wg-wind-dial</span> <span class=\"token attr-name\" >[direction]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>direction<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[speed]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>speed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[units]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>units<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>wg-wind-dial</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card-footer p-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Direction<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>0<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>360<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>direction<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>label</span><span class=\"token punctuation\" >></span></span>Speed<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>label</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>w-100<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>range<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >min</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>0<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >max</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>140<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>speed<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _celsius_celsius_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./celsius/celsius.component */
    "./src/app/celsius/celsius.component.ts");
    /* harmony import */


    var _farenheit_farenheit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./farenheit/farenheit.component */
    "./src/app/farenheit/farenheit.component.ts");
    /* harmony import */


    var _humidity_humidity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./humidity/humidity.component */
    "./src/app/humidity/humidity.component.ts");
    /* harmony import */


    var _wind_wind_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wind/wind.component */
    "./src/app/wind/wind.component.ts");
    /* harmony import */


    var _clock_clock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./clock/clock.component */
    "./src/app/clock/clock.component.ts");
    /* harmony import */


    var _inches_inches_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./inches/inches.component */
    "./src/app/inches/inches.component.ts");
    /* harmony import */


    var _millibars_millibars_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./millibars/millibars.component */
    "./src/app/millibars/millibars.component.ts");
    /* harmony import */


    var _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./temperature/temperature.component */
    "./src/app/temperature/temperature.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'celsius',
      component: _celsius_celsius_component__WEBPACK_IMPORTED_MODULE_3__["CelsiusComponent"]
    }, {
      path: 'farenheit',
      component: _farenheit_farenheit_component__WEBPACK_IMPORTED_MODULE_4__["FarenheitComponent"]
    }, {
      path: 'humidity',
      component: _humidity_humidity_component__WEBPACK_IMPORTED_MODULE_5__["HumidityComponent"]
    }, {
      path: 'wind',
      component: _wind_wind_component__WEBPACK_IMPORTED_MODULE_6__["WindComponent"]
    }, {
      path: 'clock',
      component: _clock_clock_component__WEBPACK_IMPORTED_MODULE_7__["ClockComponent"]
    }, {
      path: 'inches',
      component: _inches_inches_component__WEBPACK_IMPORTED_MODULE_8__["InchesComponent"]
    }, {
      path: 'millibars',
      component: _millibars_millibars_component__WEBPACK_IMPORTED_MODULE_9__["MillibarsComponent"]
    }, {
      path: 'temperature',
      component: _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_10__["TemperatureComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          // godaddy cPanel doesn't do SPA
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = '@njfiorello/weather-gauges';
      this.farenheit = 75;
      this.celsius = 20;
      this.humidity = 63.5;
      this.direction = 45;
      this.speed = 12.5;
      this.units = 'MPH';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 28,
      vars: 1,
      consts: [[1, "navbar", "navbar-light", "navbar-expand-sm", "bg-light"], ["routerLink", "/", 1, "navbar-brand"], [1, "navbar-nav"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdownToggle", "", 1, "nav-link"], ["ngbDropdownMenu", ""], ["routerLink", "/celsius", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["routerLink", "/farenheit", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["routerLink", "/humidity", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["routerLink", "/wind", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["routerLink", "/clock", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["routerLink", "/inches", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["routerLink", "/millibars", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["routerLink", "/temperature", "routerLinkActive", "active", "href", "#", 1, "dropdown-item"], ["href", "https://github.com/melgish/weather-gauges", 1, "nav-link"], [1, "container-fluid"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Components ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Celsius Dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Farenheit Dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Humidity Dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wind Dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Clock Dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pressure (inches) Dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pressure (millibars) Dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Square Temperature Gauge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _celsius_celsius_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./celsius/celsius.component */
    "./src/app/celsius/celsius.component.ts");
    /* harmony import */


    var _farenheit_farenheit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./farenheit/farenheit.component */
    "./src/app/farenheit/farenheit.component.ts");
    /* harmony import */


    var _humidity_humidity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./humidity/humidity.component */
    "./src/app/humidity/humidity.component.ts");
    /* harmony import */


    var _wind_wind_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./wind/wind.component */
    "./src/app/wind/wind.component.ts");
    /* harmony import */


    var _clock_clock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./clock/clock.component */
    "./src/app/clock/clock.component.ts");
    /* harmony import */


    var _inches_inches_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./inches/inches.component */
    "./src/app/inches/inches.component.ts");
    /* harmony import */


    var _millibars_millibars_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./millibars/millibars.component */
    "./src/app/millibars/millibars.component.ts");
    /* harmony import */


    var _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./temperature/temperature.component */
    "./src/app/temperature/temperature.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_5__["WeatherGaugesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _celsius_celsius_component__WEBPACK_IMPORTED_MODULE_8__["CelsiusComponent"], _farenheit_farenheit_component__WEBPACK_IMPORTED_MODULE_9__["FarenheitComponent"], _humidity_humidity_component__WEBPACK_IMPORTED_MODULE_10__["HumidityComponent"], _wind_wind_component__WEBPACK_IMPORTED_MODULE_11__["WindComponent"], _clock_clock_component__WEBPACK_IMPORTED_MODULE_12__["ClockComponent"], _inches_inches_component__WEBPACK_IMPORTED_MODULE_13__["InchesComponent"], _millibars_millibars_component__WEBPACK_IMPORTED_MODULE_14__["MillibarsComponent"], _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_15__["TemperatureComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_5__["WeatherGaugesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _celsius_celsius_component__WEBPACK_IMPORTED_MODULE_8__["CelsiusComponent"], _farenheit_farenheit_component__WEBPACK_IMPORTED_MODULE_9__["FarenheitComponent"], _humidity_humidity_component__WEBPACK_IMPORTED_MODULE_10__["HumidityComponent"], _wind_wind_component__WEBPACK_IMPORTED_MODULE_11__["WindComponent"], _clock_clock_component__WEBPACK_IMPORTED_MODULE_12__["ClockComponent"], _inches_inches_component__WEBPACK_IMPORTED_MODULE_13__["InchesComponent"], _millibars_millibars_component__WEBPACK_IMPORTED_MODULE_14__["MillibarsComponent"], _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_15__["TemperatureComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_5__["WeatherGaugesModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/celsius/celsius.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/celsius/celsius.component.ts ***!
    \**********************************************/

  /*! exports provided: CelsiusComponent */

  /***/
  function srcAppCelsiusCelsiusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CelsiusComponent", function () {
      return CelsiusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // loading this via REQUIRE so prismjs will convert it


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/celsius/demo.html");

    var CelsiusComponent = function CelsiusComponent() {
      _classCallCheck(this, CelsiusComponent);

      this.celsius = Math.round(Math.random() * 100) - 30;
      this.demo = DEMO;
    };

    CelsiusComponent.ɵfac = function CelsiusComponent_Factory(t) {
      return new (t || CelsiusComponent)();
    };

    CelsiusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CelsiusComponent,
      selectors: [["app-celsius"]],
      inputs: {
        celsius: "celsius"
      },
      decls: 18,
      vars: 3,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "temperature"], [1, "card-footer", "p-1"], ["type", "range", "min", "-35", "max", "75", 1, "w-100", 3, "ngModel", "ngModelChange"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"], [1, "card-footer"]],
      template: function CelsiusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-celsius-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Temperature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CelsiusComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.celsius = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "wg-celsius-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Effective Range: -30\xB0 to 70\xB0 C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temperature", ctx.celsius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.celsius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__["CelsiusDialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CelsiusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-celsius',
          templateUrl: './celsius.component.html'
        }]
      }], null, {
        celsius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/clock/clock.component.ts":
  /*!******************************************!*\
    !*** ./src/app/clock/clock.component.ts ***!
    \******************************************/

  /*! exports provided: ClockComponent */

  /***/
  function srcAppClockClockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockComponent", function () {
      return ClockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // loading this via REQUIRE so prismjs will convert it at compile time.


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/clock/demo.html");

    var ClockComponent = function ClockComponent() {
      _classCallCheck(this, ClockComponent);

      /**
       * Current time to display
       */
      this.now$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
        return new Date();
      }));
      /**
       * Demo usage
       */

      this.demo = DEMO;
    };

    ClockComponent.ɵfac = function ClockComponent_Factory(t) {
      return new (t || ClockComponent)();
    };

    ClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClockComponent,
      selectors: [["app-clock"]],
      decls: 13,
      vars: 4,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "time"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"]],
      template: function ClockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-clock-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "wg-clock-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("time", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.now$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_3__["ClockDialComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clock',
          templateUrl: './clock.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/farenheit/farenheit.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/farenheit/farenheit.component.ts ***!
    \**************************************************/

  /*! exports provided: FarenheitComponent */

  /***/
  function srcAppFarenheitFarenheitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarenheitComponent", function () {
      return FarenheitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // loading this via REQUIRE so prismjs will convert it


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/farenheit/demo.html");

    var FarenheitComponent = function FarenheitComponent() {
      _classCallCheck(this, FarenheitComponent);

      /**
       * Current temperature to display
       */
      this.farenheit = Math.round(Math.random() * 180) - 30;
      /**
       * Demo usage
       */

      this.demo = DEMO;
    };

    FarenheitComponent.ɵfac = function FarenheitComponent_Factory(t) {
      return new (t || FarenheitComponent)();
    };

    FarenheitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FarenheitComponent,
      selectors: [["app-farenheit"]],
      inputs: {
        farenheit: "farenheit"
      },
      decls: 18,
      vars: 3,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "temperature"], [1, "card-footer", "p-1"], ["type", "range", "min", "-35", "max", "155", 1, "w-100", 3, "ngModel", "ngModelChange"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"], [1, "card-footer"]],
      template: function FarenheitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-farenheit-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Temperature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarenheitComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.farenheit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "wg-farenheit-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Effective Range: -30\xB0 to 150\xB0 F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temperature", ctx.farenheit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farenheit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__["FarenheitDialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarenheitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-farenheit',
          templateUrl: './farenheit.component.html'
        }]
      }], null, {
        farenheit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      /**
       * Current time to display
       */
      this.now$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
        return new Date();
      })); // randomize the values

      this.celsius = Math.random() * 100 - 25;
      this.farenheit = this.celsius * 9 / 5 + 32; // mb = in / 0.029530

      this.currentInches = Math.random() * 6 + 26;
      this.currentMillibars = this.currentInches / 0.029530;
      this.previousInches = Math.random() * 6 + 26;
      this.previousMillibars = this.previousInches / 0.029530;
      this.humidity = Math.random() * 100;
    };

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 49,
      vars: 14,
      consts: [[1, "row", "pt-2", "pb-2"], [1, "col"], [1, "card-deck"], ["routerLink", "celsius", 1, "card"], [1, "card-header", "text-center"], [1, "card-body"], [3, "temperature"], ["routerLink", "farenheit", 1, "card"], ["routerLink", "humidity", 1, "card"], [3, "humidity"], ["routerLink", "wind", 1, "card"], [3, "direction", "speed", "units"], ["routerLink", "clock", 1, "card"], [3, "time"], ["routerLink", "inches", 1, "card"], [3, "current", "previous"], ["routerLink", "millibars", 1, "card"], ["routerLink", "temperature", 1, "card"], [1, "card"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "wg-celsius-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "wg-celsius-dial", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "wg-farenheit-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "wg-farenheit-dial", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "wg-humidity-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "wg-humidity-dial", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "wg-wind-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "wg-wind-dial", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "wg-clock-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "wg-clock-dial", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "wg-pressure-in-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "wg-pressure-in-dial", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "wg-pressure-mb-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "wg-pressure-mb-dial", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "wg-temp-sq-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "wg-temp-sq-dial", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temperature", ctx.celsius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temperature", ctx.farenheit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("humidity", ctx.humidity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", 45)("speed", 12.3)("units", "MPH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("time", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 12, ctx.now$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current", ctx.currentInches)("previous", ctx.previousInches);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current", ctx.currentMillibars)("previous", ctx.previousMillibars);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temperature", ctx.celsius);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["CelsiusDialComponent"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["FarenheitDialComponent"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["HumidityDialComponent"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["WindDialComponent"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["ClockDialComponent"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["PressureInDialComponent"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["PressureMbDialComponent"], _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_4__["TempSqDialComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".card-body[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25maW9yZWxsby93ZWF0aGVyLWdhdWdlcy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkgc3ZnIHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iLCIuY2FyZC1ib2R5IHN2ZyB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/humidity/humidity.component.ts":
  /*!************************************************!*\
    !*** ./src/app/humidity/humidity.component.ts ***!
    \************************************************/

  /*! exports provided: HumidityComponent */

  /***/
  function srcAppHumidityHumidityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HumidityComponent", function () {
      return HumidityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // loading this via REQUIRE so prismjs will convert it


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/humidity/demo.html");

    var HumidityComponent = function HumidityComponent() {
      _classCallCheck(this, HumidityComponent);

      /**
       * Current humidity to display
       */
      this.humidity = Math.round(Math.random() * 100);
      /**
       * Demo usage
       */

      this.demo = DEMO;
    };

    HumidityComponent.ɵfac = function HumidityComponent_Factory(t) {
      return new (t || HumidityComponent)();
    };

    HumidityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HumidityComponent,
      selectors: [["app-humidity"]],
      inputs: {
        humidity: "humidity"
      },
      decls: 18,
      vars: 3,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "humidity"], [1, "card-footer", "p-1"], ["type", "range", "min", "-5", "max", "105", 1, "w-100", 3, "ngModel", "ngModelChange"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"], [1, "card-footer"]],
      template: function HumidityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-humidity-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Humidity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HumidityComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.humidity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "wg-humidity-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Effective Range: 0 to 100 %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("humidity", ctx.humidity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.humidity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__["HumidityDialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HumidityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-humidity',
          templateUrl: './humidity.component.html'
        }]
      }], null, {
        humidity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/inches/inches.component.ts":
  /*!********************************************!*\
    !*** ./src/app/inches/inches.component.ts ***!
    \********************************************/

  /*! exports provided: InchesComponent */

  /***/
  function srcAppInchesInchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InchesComponent", function () {
      return InchesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // loading this via REQUIRE so prismjs will convert it


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/inches/demo.html");

    var InchesComponent = function InchesComponent() {
      _classCallCheck(this, InchesComponent);

      this.current = (Math.random() * 7 + 25).toFixed(2);
      this.previous = (Math.random() * 7 + 25).toFixed(2);
      this.demo = DEMO;
    };

    InchesComponent.ɵfac = function InchesComponent_Factory(t) {
      return new (t || InchesComponent)();
    };

    InchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InchesComponent,
      selectors: [["app-inches"]],
      inputs: {
        current: "current",
        previous: "previous"
      },
      decls: 24,
      vars: 6,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "current", "previous"], [1, "card-footer", "p-1"], ["type", "range", "min", "25", "max", "33", "step", "0.125", 1, "w-100", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"], [1, "card-footer"]],
      template: function InchesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-pressure-in-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pressure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InchesComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.current = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InchesComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.previous = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InchesComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.previous = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "wg-pressure-in-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Effective Range: 25 to 33 inHg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " [previous] is optional and if falsy, will hide blue needle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current", ctx.current)("previous", ctx.previous);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.current);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.previous);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.previous);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__["PressureInDialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InchesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inches',
          templateUrl: './inches.component.html'
        }]
      }], null, {
        current: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/millibars/millibars.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/millibars/millibars.component.ts ***!
    \**************************************************/

  /*! exports provided: MillibarsComponent */

  /***/
  function srcAppMillibarsMillibarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MillibarsComponent", function () {
      return MillibarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // loading this via REQUIRE so prismjs will convert it


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/millibars/demo.html");

    var MillibarsComponent = function MillibarsComponent() {
      _classCallCheck(this, MillibarsComponent);

      this.current = Math.random() * 200 + 880;
      this.previous = Math.random() * 200 + 880;
      this.demo = DEMO;
    };

    MillibarsComponent.ɵfac = function MillibarsComponent_Factory(t) {
      return new (t || MillibarsComponent)();
    };

    MillibarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MillibarsComponent,
      selectors: [["app-millibars"]],
      inputs: {
        current: "current",
        previous: "previous"
      },
      decls: 24,
      vars: 6,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "current", "previous"], [1, "card-footer", "p-1"], ["type", "range", "min", "880", "max", "1080", 1, "w-100", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"], [1, "card-footer"]],
      template: function MillibarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-pressure-mb-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pressure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MillibarsComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.current = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MillibarsComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.previous = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MillibarsComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.previous = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "wg-pressure-mb-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pre", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Effective Range: 880 to 1080 inHg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " [previous] is optional and if falsy, will hide blue needle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current", ctx.current)("previous", ctx.previous);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.current);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.previous);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.previous);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__["PressureMbDialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MillibarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-millibars',
          templateUrl: './millibars.component.html'
        }]
      }], null, {
        current: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/temperature/temperature.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/temperature/temperature.component.ts ***!
    \******************************************************/

  /*! exports provided: TemperatureComponent */

  /***/
  function srcAppTemperatureTemperatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatureComponent", function () {
      return TemperatureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // loading this via REQUIRE so prismjs will convert it


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/temperature/demo.html");

    var TemperatureComponent = function TemperatureComponent() {
      _classCallCheck(this, TemperatureComponent);

      this.celsius = Math.round(Math.random() * 100) - 30;
      this.demo = DEMO;
    };

    TemperatureComponent.ɵfac = function TemperatureComponent_Factory(t) {
      return new (t || TemperatureComponent)();
    };

    TemperatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TemperatureComponent,
      selectors: [["app-temperature"]],
      inputs: {
        celsius: "celsius"
      },
      decls: 18,
      vars: 3,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "temperature"], [1, "card-footer", "p-1"], ["type", "range", "min", "-35", "max", "75", 1, "w-100", 3, "ngModel", "ngModelChange"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"], [1, "card-footer"]],
      template: function TemperatureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-temp-sq-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Temperature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TemperatureComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.celsius = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "wg-temp-sq-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Effective Range: -30\xB0 to 70\xB0 C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temperature", ctx.celsius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.celsius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__["TempSqDialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemperatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-temperature',
          templateUrl: './temperature.component.html'
        }]
      }], null, {
        celsius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/wind/wind.component.ts":
  /*!****************************************!*\
    !*** ./src/app/wind/wind.component.ts ***!
    \****************************************/

  /*! exports provided: WindComponent */

  /***/
  function srcAppWindWindComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindComponent", function () {
      return WindComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @njfiorello/weather-gauges */
    "./dist/weather-gauges/fesm2015/njfiorello-weather-gauges.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // loading this via REQUIRE so prismjs will convert it


    var DEMO = __webpack_require__(
    /*! !prismjs-loader?lang=markup!./demo.html */
    "./node_modules/prismjs-loader/index.js?lang=markup!./src/app/wind/demo.html");

    var WindComponent = function WindComponent() {
      _classCallCheck(this, WindComponent);

      this.direction = Math.round(Math.random() * 360);
      this.speed = Math.round(Math.random() * 100);
      this.demo = DEMO;
    };

    WindComponent.ɵfac = function WindComponent_Factory(t) {
      return new (t || WindComponent)();
    };

    WindComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WindComponent,
      selectors: [["app-wind"]],
      inputs: {
        direction: "direction",
        speed: "speed"
      },
      decls: 23,
      vars: 6,
      consts: [[1, "row", "no-gutters", "pt-2", "pb-2"], [1, "col-lg-4", "col-md-4", "col-sm-6", "pr-2"], [1, "card"], [1, "card-body"], [3, "direction", "speed", "units"], [1, "card-footer", "p-1"], ["type", "range", "min", "0", "max", "360", 1, "w-100", 3, "ngModel", "ngModelChange"], ["type", "range", "min", "0", "max", "140", 1, "w-100", 3, "ngModel", "ngModelChange"], [1, "col-lg-8", "col-md-8", "col-sm-6", "pl-2"], [1, "card-header"], [1, "language-html", "card-body"], [1, "language-html", 3, "innerHTML"], [1, "card-footer"]],
      template: function WindComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "wg-wind-dial", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Direction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WindComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.direction = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WindComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.speed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "wg-wind-dial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Effective Compass Range: 0 to 360\xB0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Effective Speed Range: 0 to 9999.9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx.direction)("speed", ctx.speed)("units", "MPH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.speed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.demo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_njfiorello_weather_gauges__WEBPACK_IMPORTED_MODULE_1__["WindDialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wind',
          templateUrl: './wind.component.html'
        }]
      }], null, {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        speed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/nfiorello/weather-gauges/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map