import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { CaseExecution, Log, TestExecution } from "../../tests/v1/test_pb.js";
/**
 * @generated from message annex.events.v1.Event
 */
export declare class Event extends Message<Event> {
    /**
     * @generated from field: string event_id = 1;
     */
    eventId: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: annex.events.v1.Event.Type type = 3;
     */
    type: Event_Type;
    /**
     * @generated from field: annex.events.v1.Event.Data data = 4;
     */
    data?: Event_Data;
    /**
     * @generated from field: google.protobuf.Timestamp create_time = 5;
     */
    createTime?: Timestamp;
    constructor(data?: PartialMessage<Event>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.events.v1.Event";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;
    static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}
/**
 * @generated from enum annex.events.v1.Event.Type
 */
export declare enum Event_Type {
    /**
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TYPE_TEST_EXECUTION_SCHEDULED = 1;
     */
    TEST_EXECUTION_SCHEDULED = 1,
    /**
     * @generated from enum value: TYPE_TEST_EXECUTION_STARTED = 2;
     */
    TEST_EXECUTION_STARTED = 2,
    /**
     * @generated from enum value: TYPE_TEST_EXECUTION_FINISHED = 3;
     */
    TEST_EXECUTION_FINISHED = 3,
    /**
     * @generated from enum value: TYPE_CASE_EXECUTION_SCHEDULED = 4;
     */
    CASE_EXECUTION_SCHEDULED = 4,
    /**
     * @generated from enum value: TYPE_CASE_EXECUTION_STARTED = 5;
     */
    CASE_EXECUTION_STARTED = 5,
    /**
     * @generated from enum value: TYPE_CASE_EXECUTION_FINISHED = 6;
     */
    CASE_EXECUTION_FINISHED = 6,
    /**
     * @generated from enum value: TYPE_LOG_PUBLISHED = 7;
     */
    LOG_PUBLISHED = 7
}
/**
 * @generated from message annex.events.v1.Event.Data
 */
export declare class Event_Data extends Message<Event_Data> {
    /**
     * @generated from field: annex.events.v1.Event.Data.Type type = 1;
     */
    type: Event_Data_Type;
    /**
     * @generated from oneof annex.events.v1.Event.Data.data
     */
    data: {
        /**
         * @generated from field: annex.tests.v1.TestExecution test_execution = 2;
         */
        value: TestExecution;
        case: "testExecution";
    } | {
        /**
         * @generated from field: annex.tests.v1.CaseExecution case_execution = 3;
         */
        value: CaseExecution;
        case: "caseExecution";
    } | {
        /**
         * @generated from field: annex.tests.v1.Log log = 4;
         */
        value: Log;
        case: "log";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Event_Data>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.events.v1.Event.Data";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Data;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Data;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Data;
    static equals(a: Event_Data | PlainMessage<Event_Data> | undefined, b: Event_Data | PlainMessage<Event_Data> | undefined): boolean;
}
/**
 * @generated from enum annex.events.v1.Event.Data.Type
 */
export declare enum Event_Data_Type {
    /**
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TYPE_NONE = 1;
     */
    NONE = 1,
    /**
     * @generated from enum value: TYPE_TEST_EXECUTION = 2;
     */
    TEST_EXECUTION = 2,
    /**
     * @generated from enum value: TYPE_CASE_EXECUTION = 3;
     */
    CASE_EXECUTION = 3,
    /**
     * @generated from enum value: TYPE_LOG = 4;
     */
    LOG = 4
}
