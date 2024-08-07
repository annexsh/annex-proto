"use strict";
// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file annex/events/v1/event_service.proto (package annex.events.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const event_service_pb_js_1 = require("./event_service_pb.js");
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from service annex.events.v1.EventService
 */
exports.EventService = {
    typeName: "annex.events.v1.EventService",
    methods: {
        /**
         * @generated from rpc annex.events.v1.EventService.StreamTestExecutionEvents
         */
        streamTestExecutionEvents: {
            name: "StreamTestExecutionEvents",
            I: event_service_pb_js_1.StreamTestExecutionEventsRequest,
            O: event_service_pb_js_1.StreamTestExecutionEventsResponse,
            kind: protobuf_1.MethodKind.ServerStreaming,
        },
    }
};
