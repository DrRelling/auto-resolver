"use strict";
(self["webpackChunkauto_resolver"] = self["webpackChunkauto_resolver"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/control-panel/control-panel.component */ 3965);
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/display/display.component */ 1348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





const routes = [{
  path: 'display',
  component: _components_display_display_component__WEBPACK_IMPORTED_MODULE_1__.DisplayComponent
}, {
  path: '',
  component: _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_0__.ControlPanelComponent
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'auto-resolver';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/control-panel/control-panel.component */ 3965);
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/display/display.component */ 1348);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 6667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_2__.ControlPanelComponent, _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__.DisplayComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
  });
})();

/***/ }),

/***/ 9871:
/*!*****************************************!*\
  !*** ./src/app/classes/phaser-scene.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhaserScene: () => (/* binding */ PhaserScene)
/* harmony export */ });
/* harmony import */ var _config_phaser_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/phaser-config.config */ 6026);

class PhaserScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'main'
    });
  }
  preload() {
    this.load.image('worldmap', 'assets/world-map.jpg');
  }
  create() {
    const midX = _config_phaser_config_config__WEBPACK_IMPORTED_MODULE_0__.phaserConfig.scale.width / 2;
    const midY = _config_phaser_config_config__WEBPACK_IMPORTED_MODULE_0__.phaserConfig.scale.height / 2;
    this.worldMap = this.add.image(midX, midY, 'worldmap');
    // this.addShine();
    this.flashMap();
    this.add.text(midX, midY, 'Scanning...').setFontFamily('Orbitron').setFontSize(64).setColor('#ffff00').setAlign('Center');
  }
  update() {
    // tween
    // if (this.tintValue < 0xff0000 || this.tintValue > 0xffeeee) {
    //   this.tintDirection = -this.tintDirection;
    // }
    // this.tintValue += this.tintDirection;
    // console.log(this.tintValue, this.tintDirection);
    // this.worldMap?.setTint(this.tintValue);
  }
  addShine() {
    this.worldMap?.postFX.addShine(0.5, 0.2, 15);
  }
  removeShine() {
    this.worldMap?.clearFX();
  }
  flashMap() {
    this.tweens.addCounter({
      from: parseInt('0xffffff'),
      to: parseInt('0xff0000'),
      duration: 500,
      loop: 4,
      yoyo: true,
      onUpdate: tween => {
        const value = Math.floor(tween.getValue());
        this.worldMap?.setTint(value);
      }
    });
  }
}

/***/ }),

/***/ 3965:
/*!*********************************************************************!*\
  !*** ./src/app/components/control-panel/control-panel.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlPanelComponent: () => (/* binding */ ControlPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ControlPanelComponent {}
_class = ControlPanelComponent;
_class.ɵfac = function ControlPanelComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-control-panel"]],
  decls: 2,
  vars: 0,
  template: function ControlPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "control-panel works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1348:
/*!*********************************************************!*\
  !*** ./src/app/components/display/display.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayComponent: () => (/* binding */ DisplayComponent)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ 601);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var src_app_config_phaser_config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/phaser-config.config */ 6026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 6667);
var _class;





class DisplayComponent {
  constructor() {
    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }]
    };
    this.lineChartOptions = {
      responsive: false
    };
    this.lineChartLegend = true;
  }
  ngOnInit() {
    this.phaserGame = new (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(src_app_config_phaser_config_config__WEBPACK_IMPORTED_MODULE_1__.phaserConfig);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(2000).subscribe(() => {
      const data = this.lineChartData.datasets[0].data;
      this.lineChartData.datasets[0].data = data.map(() => Math.floor(Math.random() * 100));
    });
  }
}
_class = DisplayComponent;
_class.ɵfac = function DisplayComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-display"]],
  decls: 3,
  vars: 4,
  consts: [[2, "display", "block"], ["baseChart", "", "width", "400", "height", "400", 3, "type", "data", "options", "legend"], ["id", "phaser_container"]],
  template: function DisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "canvas", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "line")("data", ctx.lineChartData)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend);
    }
  },
  dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective],
  styles: ["canvas[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6026:
/*!************************************************!*\
  !*** ./src/app/config/phaser-config.config.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   phaserConfig: () => (/* binding */ phaserConfig)
/* harmony export */ });
/* harmony import */ var _classes_phaser_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/phaser-scene */ 9871);

const phaserConfig = {
  type: Phaser.AUTO,
  scene: [_classes_phaser_scene__WEBPACK_IMPORTED_MODULE_0__.PhaserScene],
  scale: {
    parent: 'phaser_container',
    mode: Phaser.Scale.FIT,
    width: 1920,
    height: 800
  }
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map