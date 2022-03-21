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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageCreator = void 0;
var SEND_MESSAGE = 'SEND_MESSAGE';
var initialState = {
    dialogs: [
        { id: 1, name: 'Dmitri' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
};
var dialogsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SEND_MESSAGE:
            var body = action.newMessageBody;
            return __assign(__assign({}, state), { messages: __spreadArray(__spreadArray([], state.messages, true), [{ id: 6, message: body }], false) });
        default:
            return state;
    }
};
var sendMessageCreator = function (newMessageBody) { return ({ type: SEND_MESSAGE, newMessageBody: newMessageBody }); };
exports.sendMessageCreator = sendMessageCreator;
exports.default = dialogsReducer;
