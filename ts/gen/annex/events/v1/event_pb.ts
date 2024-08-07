// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file annex/events/v1/event.proto (package annex.events.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { CaseExecution, Log, TestExecution } from "../../tests/v1/test_pb";
import { file_annex_tests_v1_test } from "../../tests/v1/test_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file annex/events/v1/event.proto.
 */
export const file_annex_events_v1_event: GenFile = /*@__PURE__*/
  fileDesc("Chthbm5leC9ldmVudHMvdjEvZXZlbnQucHJvdG8SD2FubmV4LmV2ZW50cy52MSKCBgoFRXZlbnQSEAoIZXZlbnRfaWQYASABKAkSGQoRdGVzdF9leGVjdXRpb25faWQYAiABKAkSKQoEdHlwZRgDIAEoDjIbLmFubmV4LmV2ZW50cy52MS5FdmVudC5UeXBlEikKBGRhdGEYBCABKAsyGy5hbm5leC5ldmVudHMudjEuRXZlbnQuRGF0YRIvCgtjcmVhdGVfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAawQIKBERhdGESLgoEdHlwZRgBIAEoDjIgLmFubmV4LmV2ZW50cy52MS5FdmVudC5EYXRhLlR5cGUSNwoOdGVzdF9leGVjdXRpb24YAiABKAsyHS5hbm5leC50ZXN0cy52MS5UZXN0RXhlY3V0aW9uSAASNwoOY2FzZV9leGVjdXRpb24YAyABKAsyHS5hbm5leC50ZXN0cy52MS5DYXNlRXhlY3V0aW9uSAASIgoDbG9nGAQgASgLMhMuYW5uZXgudGVzdHMudjEuTG9nSAAiawoEVHlwZRIUChBUWVBFX1VOU1BFQ0lGSUVEEAASDQoJVFlQRV9OT05FEAESFwoTVFlQRV9URVNUX0VYRUNVVElPThACEhcKE1RZUEVfQ0FTRV9FWEVDVVRJT04QAxIMCghUWVBFX0xPRxAEQgYKBGRhdGEigAIKBFR5cGUSFAoQVFlQRV9VTlNQRUNJRklFRBAAEiEKHVRZUEVfVEVTVF9FWEVDVVRJT05fU0NIRURVTEVEEAESHwobVFlQRV9URVNUX0VYRUNVVElPTl9TVEFSVEVEEAISIAocVFlQRV9URVNUX0VYRUNVVElPTl9GSU5JU0hFRBADEiEKHVRZUEVfQ0FTRV9FWEVDVVRJT05fU0NIRURVTEVEEAQSHwobVFlQRV9DQVNFX0VYRUNVVElPTl9TVEFSVEVEEAUSIAocVFlQRV9DQVNFX0VYRUNVVElPTl9GSU5JU0hFRBAGEhYKElRZUEVfTE9HX1BVQkxJU0hFRBAHQr8BChNjb20uYW5uZXguZXZlbnRzLnYxQgpFdmVudFByb3RvUAFaPmdpdGh1Yi5jb20vYW5uZXhzaC9hbm5leC1wcm90by9nby9nZW4vYW5uZXgvZXZlbnRzL3YxO2V2ZW50c3YxogIDQUVYqgIPQW5uZXguRXZlbnRzLlYxygIPQW5uZXhcRXZlbnRzXFYx4gIbQW5uZXhcRXZlbnRzXFYxXEdQQk1ldGFkYXRh6gIRQW5uZXg6OkV2ZW50czo6VjFiBnByb3RvMw", [file_annex_tests_v1_test, file_google_protobuf_timestamp]);

/**
 * @generated from message annex.events.v1.Event
 */
export type Event = Message<"annex.events.v1.Event"> & {
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
};

/**
 * Describes the message annex.events.v1.Event.
 * Use `create(EventSchema)` to create a new message.
 */
export const EventSchema: GenMessage<Event> = /*@__PURE__*/
  messageDesc(file_annex_events_v1_event, 0);

/**
 * @generated from message annex.events.v1.Event.Data
 */
export type Event_Data = Message<"annex.events.v1.Event.Data"> & {
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
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message annex.events.v1.Event.Data.
 * Use `create(Event_DataSchema)` to create a new message.
 */
export const Event_DataSchema: GenMessage<Event_Data> = /*@__PURE__*/
  messageDesc(file_annex_events_v1_event, 0, 0);

/**
 * @generated from enum annex.events.v1.Event.Data.Type
 */
export enum Event_Data_Type {
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
  LOG = 4,
}

/**
 * Describes the enum annex.events.v1.Event.Data.Type.
 */
export const Event_Data_TypeSchema: GenEnum<Event_Data_Type> = /*@__PURE__*/
  enumDesc(file_annex_events_v1_event, 0, 0, 0);

/**
 * @generated from enum annex.events.v1.Event.Type
 */
export enum Event_Type {
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
  LOG_PUBLISHED = 7,
}

/**
 * Describes the enum annex.events.v1.Event.Type.
 */
export const Event_TypeSchema: GenEnum<Event_Type> = /*@__PURE__*/
  enumDesc(file_annex_events_v1_event, 0, 0);

