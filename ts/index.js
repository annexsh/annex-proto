"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./gen/annex/tests/v1/test_pb"), exports);
__exportStar(require("./gen/annex/tests/v1/test_service_pb"), exports);
__exportStar(require("./gen/annex/tests/v1/test_service_connect"), exports);
__exportStar(require("./gen/annex/events/v1/event_pb"), exports);
__exportStar(require("./gen/annex/events/v1/event_service_connect"), exports);
__exportStar(require("./gen/annex/events/v1/event_service_connect"), exports);
__exportStar(require("./gen/annex/common/pagination/v1/message_pb"), exports);
