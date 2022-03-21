"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = exports.initializedSuccess = void 0;
var auth_reducer_1 = require("./auth-reducer");
var INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
var initialState = {
    initialized: false,
};
var appReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return __assign(__assign({}, state), { initialized: true });
        default:
            return state;
    }
};
var initializedSuccess = function () { return ({ type: INITIALIZED_SUCCESS }); };
exports.initializedSuccess = initializedSuccess;
var initializeApp = function () { return function (dispatch) {
    var promise = dispatch((0, auth_reducer_1.getAuthUserData)());
    Promise.all([promise])
        .then(function () {
        dispatch((0, exports.initializedSuccess)());
    });
}; };
exports.initializeApp = initializeApp;
exports.default = appReducer;
