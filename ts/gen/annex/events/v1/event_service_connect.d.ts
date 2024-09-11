import { StreamTestExecutionEventsRequest, StreamTestExecutionEventsResponse } from "./event_service_pb.js";
/**
 * @generated from service annex.events.v1.EventService
 */
export declare const EventService: {
    readonly typeName: "annex.events.v1.EventService";
    readonly methods: {
        /**
         * @generated from rpc annex.events.v1.EventService.StreamTestExecutionEvents
         */
        readonly streamTestExecutionEvents: {
            readonly name: "StreamTestExecutionEvents";
            readonly I: typeof StreamTestExecutionEventsRequest;
            readonly O: typeof StreamTestExecutionEventsResponse;
            readonly kind: any;
        };
    };
};
