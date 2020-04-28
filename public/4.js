(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/UserList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.pick */ "./node_modules/lodash.pick/index.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./resources/assets/js/components/index.js");
/* harmony import */ var _api_manage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/manage */ "./resources/assets/js/api/manage.js");
/* harmony import */ var _utils_helper_permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/helper/permission */ "./resources/assets/js/utils/helper/permission.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var STATUS = {
  1: '启用',
  2: '禁用'
};
var columns = [{
  title: '唯一识别码',
  dataIndex: 'id'
}, {
  title: '角色名称',
  dataIndex: 'name'
}, {
  title: '状态',
  dataIndex: 'status',
  scopedSlots: {
    customRender: 'status'
  }
}, {
  title: '创建时间',
  dataIndex: 'createTime',
  scopedSlots: {
    customRender: 'createTime'
  },
  sorter: true
}, {
  title: '操作',
  width: '150px',
  dataIndex: 'action',
  scopedSlots: {
    customRender: 'action'
  }
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TableList',
  components: {
    STable: _components__WEBPACK_IMPORTED_MODULE_1__["STable"]
  },
  data: function data() {
    var _this = this;

    return {
      description: '列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。',
      visible: false,
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 5
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      },
      form: this.$form.createForm(this),
      permissions: [],
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: columns,
      // 加载数据方法 必须为 Promise 对象
      loadData: function loadData(parameter) {
        return Object(_api_manage__WEBPACK_IMPORTED_MODULE_2__["getRoleList"])(parameter).then(function (res) {
          console.log('getRoleList', res); // 展开全部行

          _this.expandedRowKeys = res.result.data.map(function (item) {
            return item.id;
          });
          return res.result;
        });
      },
      expandedRowKeys: [],
      selectedRowKeys: [],
      selectedRows: []
    };
  },
  filters: {
    statusFilter: function statusFilter(key) {
      return STATUS[key];
    },
    permissionFilter: function permissionFilter(key) {
      var permission = _utils_helper_permission__WEBPACK_IMPORTED_MODULE_3__["PERMISSION_ENUM"][key];
      return permission && permission.label;
    }
  },
  created: function created() {
    Object(_api_manage__WEBPACK_IMPORTED_MODULE_2__["getServiceList"])().then(function (res) {
      console.log('getServiceList.call()', res);
    });
    Object(_api_manage__WEBPACK_IMPORTED_MODULE_2__["getRoleList"])().then(function (res) {
      console.log('getRoleList.call()', res);
    });
  },
  methods: {
    handleEdit: function handleEdit(record) {
      var _this2 = this;

      this.visible = true;
      console.log('record', record);
      var checkboxGroup = {};
      this.permissions = record.permissions.map(function (permission) {
        var groupKey = "permissions.".concat(permission.permissionId);
        checkboxGroup[groupKey] = permission.actionList;
        var actionsOptions = permission.actionEntitySet.map(function (action) {
          return {
            label: action.describe,
            value: action.action,
            defaultCheck: action.defaultCheck
          };
        });
        return _objectSpread({}, permission, {
          actionsOptions: actionsOptions
        });
      });
      this.$nextTick(function () {
        console.log('permissions', _this2.permissions);
        console.log('checkboxGroup', checkboxGroup);

        _this2.form.setFieldsValue(lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(record, ['id', 'status', 'describe', 'name']));

        _this2.form.setFieldsValue(checkboxGroup);
      });
    },
    handleOk: function handleOk(e) {
      e.preventDefault();
      this.form.validateFields(function (err, values) {
        console.log(err, values);
      });
    },
    onChange: function onChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectedRows = selectedRows;
    },
    handleExpand: function handleExpand(expanded, record) {
      console.log('expanded', expanded, record);

      if (expanded) {
        this.expandedRowKeys.push(record.id);
      } else {
        this.expandedRowKeys = this.expandedRowKeys.filter(function (item) {
          return record.id !== item;
        });
      }
    },
    toggleAdvanced: function toggleAdvanced() {
      this.advanced = !this.advanced;
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".permission-form[data-v-5e2d63bb] .permission-group {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=template&id=5e2d63bb&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/UserList.vue?vue&type=template&id=5e2d63bb&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "a-card",
    { attrs: { bordered: false } },
    [
      _c(
        "div",
        { staticClass: "table-page-search-wrapper" },
        [
          _c(
            "a-form",
            { attrs: { layout: "inline" } },
            [
              _c(
                "a-row",
                { attrs: { gutter: 48 } },
                [
                  _c(
                    "a-col",
                    { attrs: { md: 8, sm: 24 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "角色ID" } },
                        [_c("a-input", { attrs: { placeholder: "请输入" } })],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { md: 8, sm: 24 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "状态" } },
                        [
                          _c(
                            "a-select",
                            {
                              attrs: {
                                placeholder: "请选择",
                                "default-value": "0"
                              }
                            },
                            [
                              _c("a-select-option", { attrs: { value: "0" } }, [
                                _vm._v("全部")
                              ]),
                              _vm._v(" "),
                              _c("a-select-option", { attrs: { value: "1" } }, [
                                _vm._v("关闭")
                              ]),
                              _vm._v(" "),
                              _c("a-select-option", { attrs: { value: "2" } }, [
                                _vm._v("运行中")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("a-col", { attrs: { md: 8, sm: 24 } }, [
                    _c(
                      "span",
                      { staticClass: "table-page-search-submitButtons" },
                      [
                        _c("a-button", { attrs: { type: "primary" } }, [
                          _vm._v("查询")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a-button",
                          { staticStyle: { "margin-left": "8px" } },
                          [_vm._v("重置")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("s-table", {
        attrs: {
          "row-key": "id",
          size: "default",
          columns: _vm.columns,
          data: _vm.loadData,
          expandedRowKeys: _vm.expandedRowKeys
        },
        on: { expand: _vm.handleExpand },
        scopedSlots: _vm._u([
          {
            key: "expandedRowRender",
            fn: function(record) {
              return _c(
                "div",
                { staticStyle: { margin: "0" } },
                [
                  _c(
                    "a-row",
                    { style: { marginBottom: "12px" }, attrs: { gutter: 24 } },
                    _vm._l(record.permissions, function(role, index) {
                      return _c(
                        "a-col",
                        {
                          key: index,
                          style: { marginBottom: "12px", height: "23px" },
                          attrs: { span: 12 }
                        },
                        [
                          _c("a-col", { attrs: { lg: 4, md: 24 } }, [
                            _c("span", [
                              _vm._v(_vm._s(role.permissionName) + "：")
                            ])
                          ]),
                          _vm._v(" "),
                          role.actionList && role.actionList.length > 0
                            ? _c(
                                "a-col",
                                { attrs: { lg: 20, md: 24 } },
                                _vm._l(role.actionList, function(action) {
                                  return _c(
                                    "a-tag",
                                    { key: action, attrs: { color: "cyan" } },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("permissionFilter")(action)
                                        )
                                      )
                                    ]
                                  )
                                }),
                                1
                              )
                            : _c("a-col", { attrs: { span: 20 } }, [
                                _vm._v("-")
                              ])
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            }
          },
          {
            key: "status",
            fn: function(text) {
              return _c("a-tag", { attrs: { color: "blue" } }, [
                _vm._v(_vm._s(_vm._f("statusFilter")(text)))
              ])
            }
          },
          {
            key: "createTime",
            fn: function(text) {
              return _c("span", {}, [_vm._v(_vm._s(_vm._f("moment")(text)))])
            }
          },
          {
            key: "action",
            fn: function(text, record) {
              return _c(
                "span",
                {},
                [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleEdit(record)
                        }
                      }
                    },
                    [_vm._v("编辑")]
                  ),
                  _vm._v(" "),
                  _c("a-divider", { attrs: { type: "vertical" } }),
                  _vm._v(" "),
                  _c(
                    "a-dropdown",
                    [
                      _c(
                        "a",
                        { staticClass: "ant-dropdown-link" },
                        [
                          _vm._v("\n          更多 "),
                          _c("a-icon", { attrs: { type: "down" } })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu",
                        { attrs: { slot: "overlay" }, slot: "overlay" },
                        [
                          _c("a-menu-item", [
                            _c("a", { attrs: { href: "javascript:;" } }, [
                              _vm._v("详情")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("a-menu-item", [
                            _c("a", { attrs: { href: "javascript:;" } }, [
                              _vm._v("禁用")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("a-menu-item", [
                            _c("a", { attrs: { href: "javascript:;" } }, [
                              _vm._v("删除")
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "a-modal",
        {
          staticStyle: { top: "20px" },
          attrs: { title: "操作", width: 800 },
          on: { ok: _vm.handleOk },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "a-form",
            { staticClass: "permission-form", attrs: { form: _vm.form } },
            [
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "唯一识别码",
                    hasFeedback: "",
                    validateStatus: "success"
                  }
                },
                [
                  _c("a-input", {
                    directives: [
                      {
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["id"],
                        expression: "['id']"
                      }
                    ],
                    attrs: { placeholder: "唯一识别码", disabled: "disabled" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "角色名称",
                    hasFeedback: "",
                    validateStatus: "success"
                  }
                },
                [
                  _c("a-input", {
                    directives: [
                      {
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["name"],
                        expression: "['name']"
                      }
                    ],
                    attrs: { placeholder: "起一个名字" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "状态",
                    hasFeedback: "",
                    validateStatus: "warning"
                  }
                },
                [
                  _c(
                    "a-select",
                    {
                      directives: [
                        {
                          name: "decorator",
                          rawName: "v-decorator",
                          value: ["status", { initialValue: 1 }],
                          expression: "['status', { initialValue: 1 }]"
                        }
                      ]
                    },
                    [
                      _c("a-select-option", { attrs: { value: 1 } }, [
                        _vm._v("正常")
                      ]),
                      _vm._v(" "),
                      _c("a-select-option", { attrs: { value: 2 } }, [
                        _vm._v("禁用")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "描述",
                    hasFeedback: ""
                  }
                },
                [
                  _c("a-textarea", {
                    directives: [
                      {
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["describe"],
                        expression: "['describe']"
                      }
                    ],
                    attrs: { rows: 5, placeholder: "...", id: "describe" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("a-divider", [_vm._v("拥有权限")]),
              _vm._v(" "),
              _vm._l(_vm.permissions, function(permission) {
                return [
                  permission.actionsOptions &&
                  permission.actionsOptions.length > 0
                    ? _c(
                        "a-form-item",
                        {
                          key: permission.permissionId,
                          staticClass: "permission-group",
                          attrs: {
                            labelCol: _vm.labelCol,
                            wrapperCol: _vm.wrapperCol,
                            label: permission.permissionName
                          }
                        },
                        [
                          _c("a-checkbox", [_vm._v("全选")]),
                          _vm._v(" "),
                          _c("a-checkbox-group", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "permissions." + permission.permissionId
                                ],
                                expression:
                                  "[`permissions.${permission.permissionId}`]"
                              }
                            ],
                            attrs: { options: permission.actionsOptions }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
              })
            ],
            2
          )
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

/***/ "./resources/assets/js/api/manage.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/api/manage.js ***!
  \*******************************************/
/*! exports provided: default, getUserList, getRoleList, getServiceList, getPermissions, getOrgTree, saveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserList", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoleList", function() { return getRoleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceList", function() { return getServiceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPermissions", function() { return getPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrgTree", function() { return getOrgTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveService", function() { return saveService; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/assets/js/utils/request.js");

var api = {
  user: '/user',
  role: '/role',
  products: 'api/products',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
};
/* harmony default export */ __webpack_exports__["default"] = (api);
function getUserList(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.user,
    method: 'get',
    params: parameter
  });
}
function getRoleList(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.role,
    method: 'get',
    params: parameter
  });
}
function getServiceList(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.products,
    method: 'get',
    params: parameter
  });
}
function getPermissions(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  });
}
function getOrgTree(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.orgTree,
    method: 'get',
    params: parameter
  });
} // id == 0 add     post
// id != 0 update  put

function saveService(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  });
}

/***/ }),

/***/ "./resources/assets/js/views/other/UserList.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/other/UserList.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_5e2d63bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=5e2d63bb&scoped=true& */ "./resources/assets/js/views/other/UserList.vue?vue&type=template&id=5e2d63bb&scoped=true&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/other/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_id_5e2d63bb_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true& */ "./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_5e2d63bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_5e2d63bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e2d63bb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/other/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/other/UserList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/other/UserList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_5e2d63bb_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=style&index=0&id=5e2d63bb&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_5e2d63bb_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_5e2d63bb_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_5e2d63bb_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_5e2d63bb_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_5e2d63bb_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/views/other/UserList.vue?vue&type=template&id=5e2d63bb&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/views/other/UserList.vue?vue&type=template&id=5e2d63bb&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_5e2d63bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=5e2d63bb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/UserList.vue?vue&type=template&id=5e2d63bb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_5e2d63bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_5e2d63bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);