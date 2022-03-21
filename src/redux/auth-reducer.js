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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.getCaptchaUrl = exports.login = exports.getAuthUserData = exports.getCaptchaUrlSuccess = exports.setAuthUserData = void 0;
var api_1 = require("../api/api");
var redux_form_1 = require("redux-form");
var SET_USER_DATA = 'SET_USER_DATA';
var GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';
var initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null, then captcha is not required
};
var authReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return __assign(__assign({ userId: "23" }, state), action.payload);
        default:
            return state;
    }
};
var setAuthUserData = function (userId, email, login, isAuth) { return ({
    type: SET_USER_DATA, payload: { userId: userId, email: email, login: login, isAuth: isAuth }
}); };
exports.setAuthUserData = setAuthUserData;
var getCaptchaUrlSuccess = function (captchaUrl) { return ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl: captchaUrl }
}); };
exports.getCaptchaUrlSuccess = getCaptchaUrlSuccess;
var getAuthUserData = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, _a, id, login_1, email;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, api_1.authAPI.me()];
            case 1:
                response = _b.sent();
                if (response.data.resultCode === 0) {
                    _a = response.data.data, id = _a.id, login_1 = _a.login, email = _a.email;
                    dispatch((0, exports.setAuthUserData)(id, email, login_1, true));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.getAuthUserData = getAuthUserData;
var login = function (email, password, rememberMe, captcha) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.authAPI.login(email, password, rememberMe, captcha)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    //success, get auth data
                    dispatch((0, exports.getAuthUserData)());
                }
                else {
                    if (response.data.resultCode === 10) {
                        dispatch((0, exports.getCaptchaUrl)());
                    }
                    message = response.data.messages.length > 0
                        ? response.data.messages[0] : "Some error";
                    dispatch((0, redux_form_1.stopSubmit)("login", { _error: message }));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.login = login;
var getCaptchaUrl = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response, captchaUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.securityAPI.getCaptchaUrl()];
            case 1:
                response = _a.sent();
                captchaUrl = response.data.url;
                dispatch((0, exports.getCaptchaUrlSuccess)(captchaUrl));
                return [2 /*return*/];
        }
    });
}); }; };
exports.getCaptchaUrl = getCaptchaUrl;
var logout = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.authAPI.logout()];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch((0, exports.setAuthUserData)(null, null, null, false));
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.logout = logout;
exports.default = authReducer;
