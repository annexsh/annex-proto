import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Event } from "./event_pb.js";
/**
 * @generated from message annex.events.v1.StreamTestExecutionEventsRequest
 */
export declare class StreamTestExecutionEventsRequest extends Message<StreamTestExecutionEventsRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    constructor(data?: PartialMessage<StreamTestExecutionEventsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.events.v1.StreamTestExecutionEventsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTestExecutionEventsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTestExecutionEventsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTestExecutionEventsRequest;
    static equals(a: StreamTestExecutionEventsRequest | PlainMessage<StreamTestExecutionEventsRequest> | undefined, b: StreamTestExecutionEventsRequest | PlainMessage<StreamTestExecutionEventsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.events.v1.StreamTestExecutionEventsResponse
 */
export declare class StreamTestExecutionEventsResponse extends Message<StreamTestExecutionEventsResponse> {
    /**
     * @generated from field: annex.events.v1.Event event = 1;
     */
    event?: Event;
    constructor(data?: PartialMessage<StreamTestExecutionEventsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.events.v1.StreamTestExecutionEventsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamTestExecutionEventsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamTestExecutionEventsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamTestExecutionEventsResponse;
    static equals(a: StreamTestExecutionEventsResponse | PlainMessage<StreamTestExecutionEventsResponse> | undefined, b: StreamTestExecutionEventsResponse | PlainMessage<StreamTestExecutionEventsResponse> | undefined): boolean;
}
