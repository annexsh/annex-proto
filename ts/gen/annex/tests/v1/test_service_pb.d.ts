import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { CaseExecution, Group, Log, Payload, Test, TestDefinition, TestExecution } from "./test_pb.js";
/**
 * @generated from message annex.tests.v1.RegisterContextRequest
 */
export declare class RegisterContextRequest extends Message<RegisterContextRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    constructor(data?: PartialMessage<RegisterContextRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RegisterContextRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterContextRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterContextRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterContextRequest;
    static equals(a: RegisterContextRequest | PlainMessage<RegisterContextRequest> | undefined, b: RegisterContextRequest | PlainMessage<RegisterContextRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.RegisterContextResponse
 */
export declare class RegisterContextResponse extends Message<RegisterContextResponse> {
    constructor(data?: PartialMessage<RegisterContextResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RegisterContextResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterContextResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterContextResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterContextResponse;
    static equals(a: RegisterContextResponse | PlainMessage<RegisterContextResponse> | undefined, b: RegisterContextResponse | PlainMessage<RegisterContextResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListContextsRequest
 */
export declare class ListContextsRequest extends Message<ListContextsRequest> {
    /**
     * @generated from field: int32 page_size = 1;
     */
    pageSize: number;
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListContextsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListContextsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListContextsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListContextsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListContextsRequest;
    static equals(a: ListContextsRequest | PlainMessage<ListContextsRequest> | undefined, b: ListContextsRequest | PlainMessage<ListContextsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListContextsResponse
 */
export declare class ListContextsResponse extends Message<ListContextsResponse> {
    /**
     * @generated from field: repeated string contexts = 1;
     */
    contexts: string[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListContextsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListContextsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListContextsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListContextsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListContextsResponse;
    static equals(a: ListContextsResponse | PlainMessage<ListContextsResponse> | undefined, b: ListContextsResponse | PlainMessage<ListContextsResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.RegisterGroupRequest
 */
export declare class RegisterGroupRequest extends Message<RegisterGroupRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    constructor(data?: PartialMessage<RegisterGroupRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RegisterGroupRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterGroupRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterGroupRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterGroupRequest;
    static equals(a: RegisterGroupRequest | PlainMessage<RegisterGroupRequest> | undefined, b: RegisterGroupRequest | PlainMessage<RegisterGroupRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.RegisterGroupResponse
 */
export declare class RegisterGroupResponse extends Message<RegisterGroupResponse> {
    constructor(data?: PartialMessage<RegisterGroupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RegisterGroupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterGroupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterGroupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterGroupResponse;
    static equals(a: RegisterGroupResponse | PlainMessage<RegisterGroupResponse> | undefined, b: RegisterGroupResponse | PlainMessage<RegisterGroupResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListGroupsRequest
 */
export declare class ListGroupsRequest extends Message<ListGroupsRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: int32 page_size = 2;
     */
    pageSize: number;
    /**
     * @generated from field: string next_page_token = 3;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListGroupsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListGroupsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGroupsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGroupsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGroupsRequest;
    static equals(a: ListGroupsRequest | PlainMessage<ListGroupsRequest> | undefined, b: ListGroupsRequest | PlainMessage<ListGroupsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListGroupsResponse
 */
export declare class ListGroupsResponse extends Message<ListGroupsResponse> {
    /**
     * @generated from field: repeated annex.tests.v1.Group groups = 1;
     */
    groups: Group[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListGroupsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListGroupsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGroupsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGroupsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGroupsResponse;
    static equals(a: ListGroupsResponse | PlainMessage<ListGroupsResponse> | undefined, b: ListGroupsResponse | PlainMessage<ListGroupsResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.RegisterTestsRequest
 */
export declare class RegisterTestsRequest extends Message<RegisterTestsRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string group = 2;
     */
    group: string;
    /**
     * @generated from field: repeated annex.tests.v1.TestDefinition definitions = 4;
     */
    definitions: TestDefinition[];
    constructor(data?: PartialMessage<RegisterTestsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RegisterTestsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterTestsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterTestsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterTestsRequest;
    static equals(a: RegisterTestsRequest | PlainMessage<RegisterTestsRequest> | undefined, b: RegisterTestsRequest | PlainMessage<RegisterTestsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.RegisterTestsResponse
 */
export declare class RegisterTestsResponse extends Message<RegisterTestsResponse> {
    /**
     * @generated from field: repeated annex.tests.v1.Test tests = 1;
     */
    tests: Test[];
    constructor(data?: PartialMessage<RegisterTestsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RegisterTestsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterTestsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterTestsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterTestsResponse;
    static equals(a: RegisterTestsResponse | PlainMessage<RegisterTestsResponse> | undefined, b: RegisterTestsResponse | PlainMessage<RegisterTestsResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListTestsRequest
 */
export declare class ListTestsRequest extends Message<ListTestsRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string group = 2;
     */
    group: string;
    /**
     * @generated from field: int32 page_size = 3;
     */
    pageSize: number;
    /**
     * @generated from field: string next_page_token = 4;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListTestsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListTestsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTestsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTestsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTestsRequest;
    static equals(a: ListTestsRequest | PlainMessage<ListTestsRequest> | undefined, b: ListTestsRequest | PlainMessage<ListTestsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListTestsResponse
 */
export declare class ListTestsResponse extends Message<ListTestsResponse> {
    /**
     * @generated from field: repeated annex.tests.v1.Test tests = 1;
     */
    tests: Test[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListTestsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListTestsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTestsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTestsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTestsResponse;
    static equals(a: ListTestsResponse | PlainMessage<ListTestsResponse> | undefined, b: ListTestsResponse | PlainMessage<ListTestsResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.GetTestRequest
 */
export declare class GetTestRequest extends Message<GetTestRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_id = 2;
     */
    testId: string;
    constructor(data?: PartialMessage<GetTestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.GetTestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTestRequest;
    static equals(a: GetTestRequest | PlainMessage<GetTestRequest> | undefined, b: GetTestRequest | PlainMessage<GetTestRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.GetTestResponse
 */
export declare class GetTestResponse extends Message<GetTestResponse> {
    /**
     * @generated from field: annex.tests.v1.Test test = 1;
     */
    test?: Test;
    constructor(data?: PartialMessage<GetTestResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.GetTestResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTestResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTestResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTestResponse;
    static equals(a: GetTestResponse | PlainMessage<GetTestResponse> | undefined, b: GetTestResponse | PlainMessage<GetTestResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.GetTestDefaultInputRequest
 */
export declare class GetTestDefaultInputRequest extends Message<GetTestDefaultInputRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_id = 2;
     */
    testId: string;
    constructor(data?: PartialMessage<GetTestDefaultInputRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.GetTestDefaultInputRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTestDefaultInputRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTestDefaultInputRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTestDefaultInputRequest;
    static equals(a: GetTestDefaultInputRequest | PlainMessage<GetTestDefaultInputRequest> | undefined, b: GetTestDefaultInputRequest | PlainMessage<GetTestDefaultInputRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.GetTestDefaultInputResponse
 */
export declare class GetTestDefaultInputResponse extends Message<GetTestDefaultInputResponse> {
    /**
     * @generated from field: string default_input = 1;
     */
    defaultInput: string;
    constructor(data?: PartialMessage<GetTestDefaultInputResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.GetTestDefaultInputResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTestDefaultInputResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTestDefaultInputResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTestDefaultInputResponse;
    static equals(a: GetTestDefaultInputResponse | PlainMessage<GetTestDefaultInputResponse> | undefined, b: GetTestDefaultInputResponse | PlainMessage<GetTestDefaultInputResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ExecuteTestRequest
 */
export declare class ExecuteTestRequest extends Message<ExecuteTestRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_id = 2;
     */
    testId: string;
    /**
     * @generated from field: optional annex.tests.v1.Payload input = 3;
     */
    input?: Payload;
    constructor(data?: PartialMessage<ExecuteTestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ExecuteTestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteTestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteTestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteTestRequest;
    static equals(a: ExecuteTestRequest | PlainMessage<ExecuteTestRequest> | undefined, b: ExecuteTestRequest | PlainMessage<ExecuteTestRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ExecuteTestResponse
 */
export declare class ExecuteTestResponse extends Message<ExecuteTestResponse> {
    /**
     * @generated from field: annex.tests.v1.TestExecution test_execution = 1;
     */
    testExecution?: TestExecution;
    constructor(data?: PartialMessage<ExecuteTestResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ExecuteTestResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteTestResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteTestResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteTestResponse;
    static equals(a: ExecuteTestResponse | PlainMessage<ExecuteTestResponse> | undefined, b: ExecuteTestResponse | PlainMessage<ExecuteTestResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.RetryTestExecutionRequest
 */
export declare class RetryTestExecutionRequest extends Message<RetryTestExecutionRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    constructor(data?: PartialMessage<RetryTestExecutionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RetryTestExecutionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RetryTestExecutionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RetryTestExecutionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RetryTestExecutionRequest;
    static equals(a: RetryTestExecutionRequest | PlainMessage<RetryTestExecutionRequest> | undefined, b: RetryTestExecutionRequest | PlainMessage<RetryTestExecutionRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.RetryTestExecutionResponse
 */
export declare class RetryTestExecutionResponse extends Message<RetryTestExecutionResponse> {
    /**
     * @generated from field: annex.tests.v1.TestExecution test_execution = 1;
     */
    testExecution?: TestExecution;
    constructor(data?: PartialMessage<RetryTestExecutionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.RetryTestExecutionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RetryTestExecutionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RetryTestExecutionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RetryTestExecutionResponse;
    static equals(a: RetryTestExecutionResponse | PlainMessage<RetryTestExecutionResponse> | undefined, b: RetryTestExecutionResponse | PlainMessage<RetryTestExecutionResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.GetTestExecutionRequest
 */
export declare class GetTestExecutionRequest extends Message<GetTestExecutionRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    constructor(data?: PartialMessage<GetTestExecutionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.GetTestExecutionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTestExecutionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTestExecutionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTestExecutionRequest;
    static equals(a: GetTestExecutionRequest | PlainMessage<GetTestExecutionRequest> | undefined, b: GetTestExecutionRequest | PlainMessage<GetTestExecutionRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.GetTestExecutionResponse
 */
export declare class GetTestExecutionResponse extends Message<GetTestExecutionResponse> {
    /**
     * @generated from field: annex.tests.v1.TestExecution test_execution = 1;
     */
    testExecution?: TestExecution;
    /**
     * @generated from field: optional annex.tests.v1.Payload input = 2;
     */
    input?: Payload;
    constructor(data?: PartialMessage<GetTestExecutionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.GetTestExecutionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTestExecutionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTestExecutionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTestExecutionResponse;
    static equals(a: GetTestExecutionResponse | PlainMessage<GetTestExecutionResponse> | undefined, b: GetTestExecutionResponse | PlainMessage<GetTestExecutionResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListTestExecutionsRequest
 */
export declare class ListTestExecutionsRequest extends Message<ListTestExecutionsRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_id = 2;
     */
    testId: string;
    /**
     * @generated from field: int32 page_size = 3;
     */
    pageSize: number;
    /**
     * @generated from field: string next_page_token = 4;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListTestExecutionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListTestExecutionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTestExecutionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTestExecutionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTestExecutionsRequest;
    static equals(a: ListTestExecutionsRequest | PlainMessage<ListTestExecutionsRequest> | undefined, b: ListTestExecutionsRequest | PlainMessage<ListTestExecutionsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListTestExecutionsResponse
 */
export declare class ListTestExecutionsResponse extends Message<ListTestExecutionsResponse> {
    /**
     * @generated from field: repeated annex.tests.v1.TestExecution test_executions = 1;
     */
    testExecutions: TestExecution[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListTestExecutionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListTestExecutionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTestExecutionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTestExecutionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTestExecutionsResponse;
    static equals(a: ListTestExecutionsResponse | PlainMessage<ListTestExecutionsResponse> | undefined, b: ListTestExecutionsResponse | PlainMessage<ListTestExecutionsResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListCaseExecutionsRequest
 */
export declare class ListCaseExecutionsRequest extends Message<ListCaseExecutionsRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: int32 page_size = 3;
     */
    pageSize: number;
    /**
     * @generated from field: string next_page_token = 4;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListCaseExecutionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListCaseExecutionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCaseExecutionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCaseExecutionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCaseExecutionsRequest;
    static equals(a: ListCaseExecutionsRequest | PlainMessage<ListCaseExecutionsRequest> | undefined, b: ListCaseExecutionsRequest | PlainMessage<ListCaseExecutionsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListCaseExecutionsResponse
 */
export declare class ListCaseExecutionsResponse extends Message<ListCaseExecutionsResponse> {
    /**
     * @generated from field: repeated annex.tests.v1.CaseExecution case_executions = 1;
     */
    caseExecutions: CaseExecution[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListCaseExecutionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListCaseExecutionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCaseExecutionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCaseExecutionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCaseExecutionsResponse;
    static equals(a: ListCaseExecutionsResponse | PlainMessage<ListCaseExecutionsResponse> | undefined, b: ListCaseExecutionsResponse | PlainMessage<ListCaseExecutionsResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckTestExecutionStartedRequest
 */
export declare class AckTestExecutionStartedRequest extends Message<AckTestExecutionStartedRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: google.protobuf.Timestamp start_time = 3;
     */
    startTime?: Timestamp;
    constructor(data?: PartialMessage<AckTestExecutionStartedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckTestExecutionStartedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckTestExecutionStartedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckTestExecutionStartedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckTestExecutionStartedRequest;
    static equals(a: AckTestExecutionStartedRequest | PlainMessage<AckTestExecutionStartedRequest> | undefined, b: AckTestExecutionStartedRequest | PlainMessage<AckTestExecutionStartedRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckTestExecutionStartedResponse
 */
export declare class AckTestExecutionStartedResponse extends Message<AckTestExecutionStartedResponse> {
    constructor(data?: PartialMessage<AckTestExecutionStartedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckTestExecutionStartedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckTestExecutionStartedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckTestExecutionStartedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckTestExecutionStartedResponse;
    static equals(a: AckTestExecutionStartedResponse | PlainMessage<AckTestExecutionStartedResponse> | undefined, b: AckTestExecutionStartedResponse | PlainMessage<AckTestExecutionStartedResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckTestExecutionFinishedRequest
 */
export declare class AckTestExecutionFinishedRequest extends Message<AckTestExecutionFinishedRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: google.protobuf.Timestamp finish_time = 3;
     */
    finishTime?: Timestamp;
    /**
     * @generated from field: optional string error = 4;
     */
    error?: string;
    constructor(data?: PartialMessage<AckTestExecutionFinishedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckTestExecutionFinishedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckTestExecutionFinishedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckTestExecutionFinishedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckTestExecutionFinishedRequest;
    static equals(a: AckTestExecutionFinishedRequest | PlainMessage<AckTestExecutionFinishedRequest> | undefined, b: AckTestExecutionFinishedRequest | PlainMessage<AckTestExecutionFinishedRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckTestExecutionFinishedResponse
 */
export declare class AckTestExecutionFinishedResponse extends Message<AckTestExecutionFinishedResponse> {
    constructor(data?: PartialMessage<AckTestExecutionFinishedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckTestExecutionFinishedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckTestExecutionFinishedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckTestExecutionFinishedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckTestExecutionFinishedResponse;
    static equals(a: AckTestExecutionFinishedResponse | PlainMessage<AckTestExecutionFinishedResponse> | undefined, b: AckTestExecutionFinishedResponse | PlainMessage<AckTestExecutionFinishedResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckCaseExecutionScheduledRequest
 */
export declare class AckCaseExecutionScheduledRequest extends Message<AckCaseExecutionScheduledRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: int32 case_execution_id = 3;
     */
    caseExecutionId: number;
    /**
     * @generated from field: string case_name = 4;
     */
    caseName: string;
    /**
     * @generated from field: google.protobuf.Timestamp schedule_time = 5;
     */
    scheduleTime?: Timestamp;
    constructor(data?: PartialMessage<AckCaseExecutionScheduledRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckCaseExecutionScheduledRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCaseExecutionScheduledRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCaseExecutionScheduledRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCaseExecutionScheduledRequest;
    static equals(a: AckCaseExecutionScheduledRequest | PlainMessage<AckCaseExecutionScheduledRequest> | undefined, b: AckCaseExecutionScheduledRequest | PlainMessage<AckCaseExecutionScheduledRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckCaseExecutionScheduledResponse
 */
export declare class AckCaseExecutionScheduledResponse extends Message<AckCaseExecutionScheduledResponse> {
    constructor(data?: PartialMessage<AckCaseExecutionScheduledResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckCaseExecutionScheduledResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCaseExecutionScheduledResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCaseExecutionScheduledResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCaseExecutionScheduledResponse;
    static equals(a: AckCaseExecutionScheduledResponse | PlainMessage<AckCaseExecutionScheduledResponse> | undefined, b: AckCaseExecutionScheduledResponse | PlainMessage<AckCaseExecutionScheduledResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckCaseExecutionStartedRequest
 */
export declare class AckCaseExecutionStartedRequest extends Message<AckCaseExecutionStartedRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: int32 case_execution_id = 3;
     */
    caseExecutionId: number;
    /**
     * @generated from field: google.protobuf.Timestamp start_time = 4;
     */
    startTime?: Timestamp;
    constructor(data?: PartialMessage<AckCaseExecutionStartedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckCaseExecutionStartedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCaseExecutionStartedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCaseExecutionStartedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCaseExecutionStartedRequest;
    static equals(a: AckCaseExecutionStartedRequest | PlainMessage<AckCaseExecutionStartedRequest> | undefined, b: AckCaseExecutionStartedRequest | PlainMessage<AckCaseExecutionStartedRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckCaseExecutionStartedResponse
 */
export declare class AckCaseExecutionStartedResponse extends Message<AckCaseExecutionStartedResponse> {
    constructor(data?: PartialMessage<AckCaseExecutionStartedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckCaseExecutionStartedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCaseExecutionStartedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCaseExecutionStartedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCaseExecutionStartedResponse;
    static equals(a: AckCaseExecutionStartedResponse | PlainMessage<AckCaseExecutionStartedResponse> | undefined, b: AckCaseExecutionStartedResponse | PlainMessage<AckCaseExecutionStartedResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckCaseExecutionFinishedRequest
 */
export declare class AckCaseExecutionFinishedRequest extends Message<AckCaseExecutionFinishedRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: int32 case_execution_id = 3;
     */
    caseExecutionId: number;
    /**
     * @generated from field: google.protobuf.Timestamp finish_time = 4;
     */
    finishTime?: Timestamp;
    /**
     * @generated from field: optional string error = 5;
     */
    error?: string;
    constructor(data?: PartialMessage<AckCaseExecutionFinishedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckCaseExecutionFinishedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCaseExecutionFinishedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCaseExecutionFinishedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCaseExecutionFinishedRequest;
    static equals(a: AckCaseExecutionFinishedRequest | PlainMessage<AckCaseExecutionFinishedRequest> | undefined, b: AckCaseExecutionFinishedRequest | PlainMessage<AckCaseExecutionFinishedRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.AckCaseExecutionFinishedResponse
 */
export declare class AckCaseExecutionFinishedResponse extends Message<AckCaseExecutionFinishedResponse> {
    constructor(data?: PartialMessage<AckCaseExecutionFinishedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.AckCaseExecutionFinishedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckCaseExecutionFinishedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckCaseExecutionFinishedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckCaseExecutionFinishedResponse;
    static equals(a: AckCaseExecutionFinishedResponse | PlainMessage<AckCaseExecutionFinishedResponse> | undefined, b: AckCaseExecutionFinishedResponse | PlainMessage<AckCaseExecutionFinishedResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.PublishLogRequest
 */
export declare class PublishLogRequest extends Message<PublishLogRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: optional int32 case_execution_id = 3;
     */
    caseExecutionId?: number;
    /**
     * @generated from field: string level = 4;
     */
    level: string;
    /**
     * @generated from field: string message = 5;
     */
    message: string;
    /**
     * @generated from field: google.protobuf.Timestamp create_time = 6;
     */
    createTime?: Timestamp;
    constructor(data?: PartialMessage<PublishLogRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.PublishLogRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishLogRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishLogRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishLogRequest;
    static equals(a: PublishLogRequest | PlainMessage<PublishLogRequest> | undefined, b: PublishLogRequest | PlainMessage<PublishLogRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.PublishLogResponse
 */
export declare class PublishLogResponse extends Message<PublishLogResponse> {
    /**
     * @generated from field: string log_id = 1;
     */
    logId: string;
    constructor(data?: PartialMessage<PublishLogResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.PublishLogResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishLogResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishLogResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishLogResponse;
    static equals(a: PublishLogResponse | PlainMessage<PublishLogResponse> | undefined, b: PublishLogResponse | PlainMessage<PublishLogResponse> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListTestExecutionLogsRequest
 */
export declare class ListTestExecutionLogsRequest extends Message<ListTestExecutionLogsRequest> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_execution_id = 2;
     */
    testExecutionId: string;
    /**
     * @generated from field: int32 page_size = 3;
     */
    pageSize: number;
    /**
     * @generated from field: string next_page_token = 4;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListTestExecutionLogsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListTestExecutionLogsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTestExecutionLogsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTestExecutionLogsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTestExecutionLogsRequest;
    static equals(a: ListTestExecutionLogsRequest | PlainMessage<ListTestExecutionLogsRequest> | undefined, b: ListTestExecutionLogsRequest | PlainMessage<ListTestExecutionLogsRequest> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.ListTestExecutionLogsResponse
 */
export declare class ListTestExecutionLogsResponse extends Message<ListTestExecutionLogsResponse> {
    /**
     * @generated from field: repeated annex.tests.v1.Log logs = 1;
     */
    logs: Log[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListTestExecutionLogsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.ListTestExecutionLogsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTestExecutionLogsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTestExecutionLogsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTestExecutionLogsResponse;
    static equals(a: ListTestExecutionLogsResponse | PlainMessage<ListTestExecutionLogsResponse> | undefined, b: ListTestExecutionLogsResponse | PlainMessage<ListTestExecutionLogsResponse> | undefined): boolean;
}
