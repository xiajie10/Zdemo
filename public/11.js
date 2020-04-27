(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/RoleList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/RoleList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components */ "./resources/assets/js/components/index.js");
/* harmony import */ var _modules_RoleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/RoleModal */ "./resources/assets/js/views/other/modules/RoleModal.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TableList',
  components: {
    STable: _components__WEBPACK_IMPORTED_MODULE_0__["STable"],
    RoleModal: _modules_RoleModal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      description: '列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。',
      visible: false,
      form: null,
      mdl: {},
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [{
        title: '唯一识别码',
        dataIndex: 'id'
      }, {
        title: '角色名称',
        dataIndex: 'name'
      }, {
        title: '状态',
        dataIndex: 'status'
      }, {
        title: '创建时间',
        dataIndex: 'createTime',
        sorter: true
      }, {
        title: '操作',
        width: '150px',
        dataIndex: 'action',
        scopedSlots: {
          customRender: 'action'
        }
      }],
      // 加载数据方法 必须为 Promise 对象
      loadData: function loadData(parameter) {
        return _this.$http.get('/role', {
          params: Object.assign(parameter, _this.queryParam)
        }).then(function (res) {
          return res.result;
        });
      },
      selectedRowKeys: [],
      selectedRows: []
    };
  },
  methods: {
    handleEdit: function handleEdit(record) {
      this.mdl = Object.assign({}, record);
      this.mdl.permissions.forEach(function (permission) {
        permission.actionsOptions = permission.actionEntitySet.map(function (action) {
          return {
            label: action.describe,
            value: action.action,
            defaultCheck: action.defaultCheck
          };
        });
      });
      console.log(this.mdl);
      this.visible = true;
    },
    handleOk: function handleOk() {
      // 新增/修改 成功时，重载列表
      this.$refs.table.refresh();
    },
    onChange: function onChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectedRows = selectedRows;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/manage */ "./resources/assets/js/api/manage.js");
/* harmony import */ var _utils_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/permissions */ "./resources/assets/js/utils/permissions.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.pick */ "./node_modules/lodash.pick/index.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_2__);
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
  name: 'RoleModal',
  data: function data() {
    return {
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
      visible: false,
      confirmLoading: false,
      mdl: {},
      form: this.$form.createForm(this),
      permissions: []
    };
  },
  created: function created() {
    this.loadPermissions();
  },
  methods: {
    add: function add() {
      this.edit({
        id: 0
      });
    },
    edit: function edit(record) {
      var _this2 = this;

      this.mdl = Object.assign({}, record);
      this.visible = true; // 有权限表，处理勾选

      if (this.mdl.permissions && this.permissions) {
        // 先处理要勾选的权限结构
        var permissionsAction = {};
        this.mdl.permissions.forEach(function (permission) {
          permissionsAction[permission.permissionId] = permission.actionEntitySet.map(function (entity) {
            return entity.action;
          });
        }); // 把权限表遍历一遍，设定要勾选的权限 action

        this.permissions.forEach(function (permission) {
          permission.selected = permissionsAction[permission.id] || [];
        });
      }

      this.$nextTick(function () {
        _this2.form.setFieldsValue(lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(_this2.mdl, 'id', 'name', 'status', 'describe'));
      });
      console.log('this.mdl', this.mdl);
    },
    close: function close() {
      this.$emit('close');
      this.visible = false;
    },
    handleOk: function handleOk() {
      var _this = this; // 触发表单验证


      this.form.validateFields(function (err, values) {
        // 验证表单没错误
        if (!err) {
          console.log('form values', values);
          _this.confirmLoading = true; // 模拟后端请求 2000 毫秒延迟

          new Promise(function (resolve) {
            setTimeout(function () {
              return resolve();
            }, 2000);
          }).then(function () {
            // Do something
            _this.$message.success('保存成功');

            _this.$emit('ok');
          })["catch"](function () {// Do something
          })["finally"](function () {
            _this.confirmLoading = false;

            _this.close();
          });
        }
      });
    },
    handleCancel: function handleCancel() {
      this.close();
    },
    onChangeCheck: function onChangeCheck(permission) {
      permission.indeterminate = !!permission.selected.length && permission.selected.length < permission.actionsOptions.length;
      permission.checkedAll = permission.selected.length === permission.actionsOptions.length;
    },
    onChangeCheckAll: function onChangeCheckAll(e, permission) {
      Object.assign(permission, {
        selected: e.target.checked ? permission.actionsOptions.map(function (obj) {
          return obj.value;
        }) : [],
        indeterminate: false,
        checkedAll: e.target.checked
      });
    },
    loadPermissions: function loadPermissions() {
      var that = this;
      Object(_api_manage__WEBPACK_IMPORTED_MODULE_0__["getPermissions"])().then(function (res) {
        var result = res.result;
        that.permissions = result.map(function (permission) {
          var options = Object(_utils_permissions__WEBPACK_IMPORTED_MODULE_1__["actionToObject"])(permission.actionData);
          permission.checkedAll = false;
          permission.selected = [];
          permission.indeterminate = false;
          permission.actionsOptions = options.map(function (option) {
            return {
              label: option.describe,
              value: option.action
            };
          });
          return permission;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/RoleList.vue?vue&type=template&id=1a0e1d66&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/RoleList.vue?vue&type=template&id=1a0e1d66& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                                _vm._v("正常")
                              ]),
                              _vm._v(" "),
                              _c("a-select-option", { attrs: { value: "2" } }, [
                                _vm._v("禁用")
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
        ref: "table",
        attrs: { size: "default", columns: _vm.columns, data: _vm.loadData },
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
                          style: { marginBottom: "12px" },
                          attrs: { span: 12 }
                        },
                        [
                          _c("a-col", { attrs: { span: 4 } }, [
                            _c("span", [
                              _vm._v(_vm._s(role.permissionName) + "：")
                            ])
                          ]),
                          _vm._v(" "),
                          role.actionEntitySet.length > 0
                            ? _c(
                                "a-col",
                                { attrs: { span: 20 } },
                                _vm._l(role.actionEntitySet, function(
                                  action,
                                  k
                                ) {
                                  return _c(
                                    "a-tag",
                                    { key: k, attrs: { color: "cyan" } },
                                    [_vm._v(_vm._s(action.describe))]
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
                          return _vm.$refs.modal.edit(record)
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
      _c("role-modal", { ref: "modal", on: { ok: _vm.handleOk } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=template&id=27c76de6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=template&id=27c76de6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "a-modal",
    {
      attrs: {
        title: "操作",
        width: 800,
        visible: _vm.visible,
        confirmLoading: _vm.confirmLoading
      },
      on: { ok: _vm.handleOk, cancel: _vm.handleCancel }
    },
    [
      _c(
        "a-steps",
        { attrs: { current: 1 } },
        [
          _c(
            "a-step",
            [
              _c("template", { slot: "title" }, [
                _vm._v("\n        Finished\n      ")
              ]),
              _vm._v(" "),
              _c(
                "span",
                { attrs: { slot: "description" }, slot: "description" },
                [_vm._v("This is a description.")]
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("a-step", {
            attrs: {
              title: "In Progress",
              description: "This is a description."
            }
          }),
          _vm._v(" "),
          _c("a-step", {
            attrs: { title: "Waiting", description: "This is a description." }
          })
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
  service: '/service',
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
    url: api.service,
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

/***/ "./resources/assets/js/utils/permissions.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/utils/permissions.js ***!
  \**************************************************/
/*! exports provided: actionToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionToObject", function() { return actionToObject; });
function actionToObject(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.log('err', e.message);
  }

  return [];
}

/***/ }),

/***/ "./resources/assets/js/views/other/RoleList.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/other/RoleList.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleList_vue_vue_type_template_id_1a0e1d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleList.vue?vue&type=template&id=1a0e1d66& */ "./resources/assets/js/views/other/RoleList.vue?vue&type=template&id=1a0e1d66&");
/* harmony import */ var _RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleList.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/other/RoleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleList_vue_vue_type_template_id_1a0e1d66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleList_vue_vue_type_template_id_1a0e1d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/other/RoleList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/other/RoleList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/other/RoleList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/RoleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/other/RoleList.vue?vue&type=template&id=1a0e1d66&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/other/RoleList.vue?vue&type=template&id=1a0e1d66& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_1a0e1d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleList.vue?vue&type=template&id=1a0e1d66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/RoleList.vue?vue&type=template&id=1a0e1d66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_1a0e1d66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_1a0e1d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/other/modules/RoleModal.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/views/other/modules/RoleModal.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleModal_vue_vue_type_template_id_27c76de6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleModal.vue?vue&type=template&id=27c76de6&scoped=true& */ "./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=template&id=27c76de6&scoped=true&");
/* harmony import */ var _RoleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleModal.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleModal_vue_vue_type_template_id_27c76de6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleModal_vue_vue_type_template_id_27c76de6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "27c76de6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/other/modules/RoleModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=template&id=27c76de6&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=template&id=27c76de6&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleModal_vue_vue_type_template_id_27c76de6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleModal.vue?vue&type=template&id=27c76de6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/other/modules/RoleModal.vue?vue&type=template&id=27c76de6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleModal_vue_vue_type_template_id_27c76de6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleModal_vue_vue_type_template_id_27c76de6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);