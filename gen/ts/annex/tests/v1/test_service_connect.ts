// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file annex/tests/v1/test_service.proto (package annex.tests.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AckCaseExecutionFinishedRequest, AckCaseExecutionFinishedResponse, AckCaseExecutionScheduledRequest, AckCaseExecutionScheduledResponse, AckCaseExecutionStartedRequest, AckCaseExecutionStartedResponse, AckTestExecutionFinishedRequest, AckTestExecutionFinishedResponse, AckTestExecutionStartedRequest, AckTestExecutionStartedResponse, ExecuteTestRequest, ExecuteTestResponse, GetTestDefaultInputRequest, GetTestDefaultInputResponse, GetTestExecutionRequest, GetTestExecutionResponse, ListCaseExecutionsRequest, ListCaseExecutionsResponse, ListContextsRequest, ListContextsResponse, ListGroupsRequest, ListGroupsResponse, ListTestExecutionLogsRequest, ListTestExecutionLogsResponse, ListTestExecutionsRequest, ListTestExecutionsResponse, ListTestsRequest, ListTestsResponse, PublishLogRequest, PublishLogResponse, RegisterContextRequest, RegisterContextResponse, RegisterGroupRequest, RegisterGroupResponse, RegisterTestsRequest, RegisterTestsResponse, RetryTestExecutionRequest, RetryTestExecutionResponse } from "./test_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service annex.tests.v1.TestService
 */
export const TestService = {
  typeName: "annex.tests.v1.TestService",
  methods: {
    /**
     * @generated from rpc annex.tests.v1.TestService.ListContexts
     */
    listContexts: {
      name: "ListContexts",
      I: ListContextsRequest,
      O: ListContextsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.ListGroups
     */
    listGroups: {
      name: "ListGroups",
      I: ListGroupsRequest,
      O: ListGroupsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.ListTests
     */
    listTests: {
      name: "ListTests",
      I: ListTestsRequest,
      O: ListTestsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.GetTestDefaultInput
     */
    getTestDefaultInput: {
      name: "GetTestDefaultInput",
      I: GetTestDefaultInputRequest,
      O: GetTestDefaultInputResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.ExecuteTest
     */
    executeTest: {
      name: "ExecuteTest",
      I: ExecuteTestRequest,
      O: ExecuteTestResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.RetryTestExecution
     */
    retryTestExecution: {
      name: "RetryTestExecution",
      I: RetryTestExecutionRequest,
      O: RetryTestExecutionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.GetTestExecution
     */
    getTestExecution: {
      name: "GetTestExecution",
      I: GetTestExecutionRequest,
      O: GetTestExecutionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.ListTestExecutions
     */
    listTestExecutions: {
      name: "ListTestExecutions",
      I: ListTestExecutionsRequest,
      O: ListTestExecutionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.ListCaseExecutions
     */
    listCaseExecutions: {
      name: "ListCaseExecutions",
      I: ListCaseExecutionsRequest,
      O: ListCaseExecutionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.ListTestExecutionLogs
     */
    listTestExecutionLogs: {
      name: "ListTestExecutionLogs",
      I: ListTestExecutionLogsRequest,
      O: ListTestExecutionLogsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.RegisterContext
     */
    registerContext: {
      name: "RegisterContext",
      I: RegisterContextRequest,
      O: RegisterContextResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.RegisterGroup
     */
    registerGroup: {
      name: "RegisterGroup",
      I: RegisterGroupRequest,
      O: RegisterGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.RegisterTests
     */
    registerTests: {
      name: "RegisterTests",
      I: RegisterTestsRequest,
      O: RegisterTestsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.AckTestExecutionStarted
     */
    ackTestExecutionStarted: {
      name: "AckTestExecutionStarted",
      I: AckTestExecutionStartedRequest,
      O: AckTestExecutionStartedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.AckTestExecutionFinished
     */
    ackTestExecutionFinished: {
      name: "AckTestExecutionFinished",
      I: AckTestExecutionFinishedRequest,
      O: AckTestExecutionFinishedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.AckCaseExecutionScheduled
     */
    ackCaseExecutionScheduled: {
      name: "AckCaseExecutionScheduled",
      I: AckCaseExecutionScheduledRequest,
      O: AckCaseExecutionScheduledResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.AckCaseExecutionStarted
     */
    ackCaseExecutionStarted: {
      name: "AckCaseExecutionStarted",
      I: AckCaseExecutionStartedRequest,
      O: AckCaseExecutionStartedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.AckCaseExecutionFinished
     */
    ackCaseExecutionFinished: {
      name: "AckCaseExecutionFinished",
      I: AckCaseExecutionFinishedRequest,
      O: AckCaseExecutionFinishedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc annex.tests.v1.TestService.PublishLog
     */
    publishLog: {
      name: "PublishLog",
      I: PublishLogRequest,
      O: PublishLogResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

