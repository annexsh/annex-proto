// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file annex/events/v1/event_service.proto (package annex.events.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { StreamTestExecutionEventsRequest, StreamTestExecutionEventsResponse } from "./event_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service annex.events.v1.EventService
 */
export const EventService = {
  typeName: "annex.events.v1.EventService",
  methods: {
    /**
     * @generated from rpc annex.events.v1.EventService.StreamTestExecutionEvents
     */
    streamTestExecutionEvents: {
      name: "StreamTestExecutionEvents",
      I: StreamTestExecutionEventsRequest,
      O: StreamTestExecutionEventsResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

