(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/TestWork.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/TestWork.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TestWork',
  data: function data() {
    return {
      visible: false,
      visible2: false
    };
  },
  created: function created() {
    this.form = this.$form.createForm(this);
    this.form2 = this.$form.createForm(this);
  },
  methods: {
    handleCloseCurrentTab: function handleCloseCurrentTab() {
      this.$multiTab.closeCurrentPage(); // or this.$multiTab.close()
    },
    handleOpenTab: function handleOpenTab() {
      this.$multiTab.open('/features/task');
    },
    handleOpenLoading: function handleOpenLoading() {
      var _this = this;

      this.$nextTick(function () {
        console.log('this', this);
        console.log('this.$refs.tInput', this.$refs.tInput);
      });
      this.$loading.show();
      setTimeout(function () {
        _this.$loading.hide();
      }, 5000);
    },
    handleOpenLoadingCustomTip: function handleOpenLoadingCustomTip() {
      var _this2 = this;

      this.$loading.show({
        tip: '自定义提示语'
      });
      setTimeout(function () {
        _this2.$loading.hide();
      }, 5000);
    },
    // confirm
    confirm: function confirm(e) {
      var _this3 = this;

      e.stopPropagation();
      var path = this.$route.path;
      this.form.validateFields(function (err, values) {
        if (!err) {
          _this3.$multiTab.rename(path, values.tabName);

          _this3.visible = false;
        }
      });
    },
    cancel: function cancel() {
      this.visible = false;
    },
    confirm2: function confirm2(e) {
      var _this4 = this;

      e.stopPropagation();
      this.form2.validateFields(function (err, values) {
        if (!err) {
          _this4.$multiTab.rename(values.tabKey, values.tabName);

          _this4.visible2 = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/TestWork.vue?vue&type=template&id=f5bea01e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dashboard/TestWork.vue?vue&type=template&id=f5bea01e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", [_vm._v("本页面内容均为测试功能，暂不提供稳定性保证")]),
      _vm._v(" "),
      _c("a-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "multi-tab-test" },
        [
          _c("h4", [_vm._v("多标签组件测试功能")]),
          _vm._v(" "),
          _c(
            "a-button",
            {
              staticStyle: { "margin-right": "16px" },
              on: { click: _vm.handleCloseCurrentTab }
            },
            [_vm._v("关闭当前页")]
          ),
          _vm._v(" "),
          _c(
            "a-button",
            {
              staticStyle: { "margin-right": "16px" },
              on: { click: _vm.handleOpenTab }
            },
            [_vm._v("打开 任务列表")]
          ),
          _vm._v(" "),
          _c(
            "a-popconfirm",
            {
              attrs: {
                visible: _vm.visible,
                okText: "确定",
                cancelText: "取消"
              },
              on: { confirm: _vm.confirm, cancel: _vm.cancel },
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c(
                            "a-form",
                            { attrs: { form: _vm.form, layout: "inline" } },
                            [
                              _c(
                                "a-form-item",
                                { attrs: { label: "自定义名称" } },
                                [
                                  _c("a-input", {
                                    directives: [
                                      {
                                        name: "decorator",
                                        rawName: "v-decorator",
                                        value: [
                                          "tabName",
                                          {
                                            rules: [
                                              {
                                                required: true,
                                                message: "请输入新的 Tab 名称"
                                              }
                                            ]
                                          }
                                        ],
                                        expression:
                                          "['tabName', {rules: [{required: true, message: '请输入新的 Tab 名称'}]}]"
                                      }
                                    ]
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "a-button",
                {
                  staticStyle: { "margin-right": "16px" },
                  on: {
                    click: function() {
                      return (_vm.visible = !_vm.visible)
                    }
                  }
                },
                [_vm._v("修改当前 Tab 名称")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-popconfirm",
            {
              attrs: {
                visible: _vm.visible2,
                okText: "确定",
                cancelText: "取消"
              },
              on: {
                confirm: _vm.confirm2,
                cancel: function() {
                  return (_vm.visible2 = false)
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "title",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        [
                          _c("p", [
                            _vm._v("页面 KEY 是由页面的路由 "),
                            _c("code", [_vm._v("path")]),
                            _vm._v(" 决定的")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "如果要修改某一个页面标题，该页面必须已经被打开在 Tab 栏"
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "后期可以考虑优化到编程式 Tab 栏，就可以没有这种限制"
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "a-form",
                            { attrs: { form: _vm.form2, layout: "inline" } },
                            [
                              _c(
                                "a-form-item",
                                { attrs: { label: "页面KEY" } },
                                [
                                  _c("a-input", {
                                    directives: [
                                      {
                                        name: "decorator",
                                        rawName: "v-decorator",
                                        value: [
                                          "tabKey",
                                          {
                                            initialValue: "/dashboard/workplace"
                                          }
                                        ],
                                        expression:
                                          "['tabKey', { initialValue: '/dashboard/workplace' }]"
                                      }
                                    ]
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-form-item",
                                { attrs: { label: "自定义名称" } },
                                [
                                  _c("a-input", {
                                    directives: [
                                      {
                                        name: "decorator",
                                        rawName: "v-decorator",
                                        value: [
                                          "tabName",
                                          {
                                            rules: [
                                              {
                                                required: true,
                                                message: "请输入新的 Tab 名称"
                                              }
                                            ]
                                          }
                                        ],
                                        expression:
                                          "['tabName', {rules: [{required: true, message: '请输入新的 Tab 名称'}]}]"
                                      }
                                    ]
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "a-button",
                {
                  on: {
                    click: function() {
                      return (_vm.visible2 = !_vm.visible2)
                    }
                  }
                },
                [_vm._v("修改某一个 Tab 名称")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("a-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "page-loading-test" },
        [
          _c("h4", [_vm._v("全局遮罩测试")]),
          _vm._v(" "),
          _c(
            "a-button",
            {
              staticStyle: { "margin-right": "16px" },
              on: { click: _vm.handleOpenLoading }
            },
            [_vm._v("打开遮罩(5s 自动关闭)")]
          ),
          _vm._v(" "),
          _c("a-button", { on: { click: _vm.handleOpenLoadingCustomTip } }, [
            _vm._v("打开遮罩(自定义提示语)")
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/dashboard/TestWork.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/views/dashboard/TestWork.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestWork_vue_vue_type_template_id_f5bea01e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestWork.vue?vue&type=template&id=f5bea01e&scoped=true& */ "./resources/assets/js/views/dashboard/TestWork.vue?vue&type=template&id=f5bea01e&scoped=true&");
/* harmony import */ var _TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestWork.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/dashboard/TestWork.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TestWork_vue_vue_type_template_id_f5bea01e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TestWork_vue_vue_type_template_id_f5bea01e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f5bea01e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/dashboard/TestWork.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/dashboard/TestWork.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/TestWork.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestWork.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/TestWork.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/dashboard/TestWork.vue?vue&type=template&id=f5bea01e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/views/dashboard/TestWork.vue?vue&type=template&id=f5bea01e&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_template_id_f5bea01e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestWork.vue?vue&type=template&id=f5bea01e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dashboard/TestWork.vue?vue&type=template&id=f5bea01e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_template_id_f5bea01e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_template_id_f5bea01e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);