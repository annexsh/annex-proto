import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message annex.tests.v1.TestSuite
 */
export declare class TestSuite extends Message<TestSuite> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string id = 2;
     */
    id: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: optional string description = 4;
     */
    description?: string;
    /**
     * @generated from field: repeated annex.tests.v1.TestSuite.Runner runners = 5;
     */
    runners: TestSuite_Runner[];
    /**
     * @generated from field: bool available = 6;
     */
    available: boolean;
    constructor(data?: PartialMessage<TestSuite>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.TestSuite";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestSuite;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestSuite;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestSuite;
    static equals(a: TestSuite | PlainMessage<TestSuite> | undefined, b: TestSuite | PlainMessage<TestSuite> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.TestSuite.Runner
 */
export declare class TestSuite_Runner extends Message<TestSuite_Runner> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: google.protobuf.Timestamp last_access_time = 2;
     */
    lastAccessTime?: Timestamp;
    constructor(data?: PartialMessage<TestSuite_Runner>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.TestSuite.Runner";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestSuite_Runner;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestSuite_Runner;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestSuite_Runner;
    static equals(a: TestSuite_Runner | PlainMessage<TestSuite_Runner> | undefined, b: TestSuite_Runner | PlainMessage<TestSuite_Runner> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.TestDefinition
 */
export declare class TestDefinition extends Message<TestDefinition> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional string description = 2;
     */
    description?: string;
    /**
     * @generated from field: optional annex.tests.v1.Payload default_input = 3;
     */
    defaultInput?: Payload;
    constructor(data?: PartialMessage<TestDefinition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.TestDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestDefinition;
    static equals(a: TestDefinition | PlainMessage<TestDefinition> | undefined, b: TestDefinition | PlainMessage<TestDefinition> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.Test
 */
export declare class Test extends Message<Test> {
    /**
     * @generated from field: string context = 1;
     */
    context: string;
    /**
     * @generated from field: string test_suite_id = 2;
     */
    testSuiteId: string;
    /**
     * @generated from field: string id = 3;
     */
    id: string;
    /**
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * @generated from field: optional string description = 5;
     */
    description?: string;
    /**
     * @generated from field: bool has_input = 6;
     */
    hasInput: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp create_time = 7;
     */
    createTime?: Timestamp;
    constructor(data?: PartialMessage<Test>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.Test";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Test;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Test;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Test;
    static equals(a: Test | PlainMessage<Test> | undefined, b: Test | PlainMessage<Test> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.TestExecution
 */
export declare class TestExecution extends Message<TestExecution> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string test_id = 2;
     */
    testId: string;
    /**
     * @generated from field: optional string error = 3;
     */
    error?: string;
    /**
     * @generated from field: google.protobuf.Timestamp schedule_time = 4;
     */
    scheduleTime?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp start_time = 5;
     */
    startTime?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp finish_time = 6;
     */
    finishTime?: Timestamp;
    constructor(data?: PartialMessage<TestExecution>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.TestExecution";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestExecution;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestExecution;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestExecution;
    static equals(a: TestExecution | PlainMessage<TestExecution> | undefined, b: TestExecution | PlainMessage<TestExecution> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.CaseExecution
 */
export declare class CaseExecution extends Message<CaseExecution> {
    /**
     * @generated from field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from field: string case_name = 2;
     */
    caseName: string;
    /**
     * @generated from field: string test_execution_id = 3;
     */
    testExecutionId: string;
    /**
     * @generated from field: optional string error = 4;
     */
    error?: string;
    /**
     * @generated from field: google.protobuf.Timestamp schedule_time = 5;
     */
    scheduleTime?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp start_time = 6;
     */
    startTime?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp finish_time = 7;
     */
    finishTime?: Timestamp;
    constructor(data?: PartialMessage<CaseExecution>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.CaseExecution";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CaseExecution;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CaseExecution;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CaseExecution;
    static equals(a: CaseExecution | PlainMessage<CaseExecution> | undefined, b: CaseExecution | PlainMessage<CaseExecution> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.Log
 */
export declare class Log extends Message<Log> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
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
    constructor(data?: PartialMessage<Log>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.Log";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Log;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Log;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Log;
    static equals(a: Log | PlainMessage<Log> | undefined, b: Log | PlainMessage<Log> | undefined): boolean;
}
/**
 * @generated from message annex.tests.v1.Payload
 */
export declare class Payload extends Message<Payload> {
    /**
     * @generated from field: map<string, bytes> metadata = 1;
     */
    metadata: {
        [key: string]: Uint8Array;
    };
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<Payload>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.tests.v1.Payload";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Payload;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Payload;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Payload;
    static equals(a: Payload | PlainMessage<Payload> | undefined, b: Payload | PlainMessage<Payload> | undefined): boolean;
}
