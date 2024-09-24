import { AckCaseExecutionFinishedRequest, AckCaseExecutionFinishedResponse, AckCaseExecutionScheduledRequest, AckCaseExecutionScheduledResponse, AckCaseExecutionStartedRequest, AckCaseExecutionStartedResponse, AckTestExecutionFinishedRequest, AckTestExecutionFinishedResponse, AckTestExecutionStartedRequest, AckTestExecutionStartedResponse, ExecuteTestRequest, ExecuteTestResponse, GetTestDefaultInputRequest, GetTestDefaultInputResponse, GetTestExecutionRequest, GetTestExecutionResponse, GetTestRequest, GetTestResponse, ListCaseExecutionsRequest, ListCaseExecutionsResponse, ListContextsRequest, ListContextsResponse, ListTestExecutionLogsRequest, ListTestExecutionLogsResponse, ListTestExecutionsRequest, ListTestExecutionsResponse, ListTestsRequest, ListTestsResponse, ListTestSuitesRequest, ListTestSuitesResponse, PublishLogRequest, PublishLogResponse, RegisterContextRequest, RegisterContextResponse, RegisterTestsRequest, RegisterTestsResponse, RegisterTestSuiteRequest, RegisterTestSuiteResponse, RetryTestExecutionRequest, RetryTestExecutionResponse } from "./test_service_pb.js";
/**
 * @generated from service annex.tests.v1.TestService
 */
export declare const TestService: {
    readonly typeName: "annex.tests.v1.TestService";
    readonly methods: {
        /**
         * @generated from rpc annex.tests.v1.TestService.ListContexts
         */
        readonly listContexts: {
            readonly name: "ListContexts";
            readonly I: typeof ListContextsRequest;
            readonly O: typeof ListContextsResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.ListTestSuites
         */
        readonly listTestSuites: {
            readonly name: "ListTestSuites";
            readonly I: typeof ListTestSuitesRequest;
            readonly O: typeof ListTestSuitesResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.ListTests
         */
        readonly listTests: {
            readonly name: "ListTests";
            readonly I: typeof ListTestsRequest;
            readonly O: typeof ListTestsResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.GetTest
         */
        readonly getTest: {
            readonly name: "GetTest";
            readonly I: typeof GetTestRequest;
            readonly O: typeof GetTestResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.GetTestDefaultInput
         */
        readonly getTestDefaultInput: {
            readonly name: "GetTestDefaultInput";
            readonly I: typeof GetTestDefaultInputRequest;
            readonly O: typeof GetTestDefaultInputResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.ExecuteTest
         */
        readonly executeTest: {
            readonly name: "ExecuteTest";
            readonly I: typeof ExecuteTestRequest;
            readonly O: typeof ExecuteTestResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.RetryTestExecution
         */
        readonly retryTestExecution: {
            readonly name: "RetryTestExecution";
            readonly I: typeof RetryTestExecutionRequest;
            readonly O: typeof RetryTestExecutionResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.GetTestExecution
         */
        readonly getTestExecution: {
            readonly name: "GetTestExecution";
            readonly I: typeof GetTestExecutionRequest;
            readonly O: typeof GetTestExecutionResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.ListTestExecutions
         */
        readonly listTestExecutions: {
            readonly name: "ListTestExecutions";
            readonly I: typeof ListTestExecutionsRequest;
            readonly O: typeof ListTestExecutionsResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.ListCaseExecutions
         */
        readonly listCaseExecutions: {
            readonly name: "ListCaseExecutions";
            readonly I: typeof ListCaseExecutionsRequest;
            readonly O: typeof ListCaseExecutionsResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.ListTestExecutionLogs
         */
        readonly listTestExecutionLogs: {
            readonly name: "ListTestExecutionLogs";
            readonly I: typeof ListTestExecutionLogsRequest;
            readonly O: typeof ListTestExecutionLogsResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.RegisterContext
         */
        readonly registerContext: {
            readonly name: "RegisterContext";
            readonly I: typeof RegisterContextRequest;
            readonly O: typeof RegisterContextResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.RegisterTestSuite
         */
        readonly registerTestSuite: {
            readonly name: "RegisterTestSuite";
            readonly I: typeof RegisterTestSuiteRequest;
            readonly O: typeof RegisterTestSuiteResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.RegisterTests
         */
        readonly registerTests: {
            readonly name: "RegisterTests";
            readonly I: typeof RegisterTestsRequest;
            readonly O: typeof RegisterTestsResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.AckTestExecutionStarted
         */
        readonly ackTestExecutionStarted: {
            readonly name: "AckTestExecutionStarted";
            readonly I: typeof AckTestExecutionStartedRequest;
            readonly O: typeof AckTestExecutionStartedResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.AckTestExecutionFinished
         */
        readonly ackTestExecutionFinished: {
            readonly name: "AckTestExecutionFinished";
            readonly I: typeof AckTestExecutionFinishedRequest;
            readonly O: typeof AckTestExecutionFinishedResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.AckCaseExecutionScheduled
         */
        readonly ackCaseExecutionScheduled: {
            readonly name: "AckCaseExecutionScheduled";
            readonly I: typeof AckCaseExecutionScheduledRequest;
            readonly O: typeof AckCaseExecutionScheduledResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.AckCaseExecutionStarted
         */
        readonly ackCaseExecutionStarted: {
            readonly name: "AckCaseExecutionStarted";
            readonly I: typeof AckCaseExecutionStartedRequest;
            readonly O: typeof AckCaseExecutionStartedResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.AckCaseExecutionFinished
         */
        readonly ackCaseExecutionFinished: {
            readonly name: "AckCaseExecutionFinished";
            readonly I: typeof AckCaseExecutionFinishedRequest;
            readonly O: typeof AckCaseExecutionFinishedResponse;
            readonly kind: any;
        };
        /**
         * @generated from rpc annex.tests.v1.TestService.PublishLog
         */
        readonly publishLog: {
            readonly name: "PublishLog";
            readonly I: typeof PublishLogRequest;
            readonly O: typeof PublishLogResponse;
            readonly kind: any;
        };
    };
};
