// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: rpc/eventservice/v1/service.proto

package eventservicev1

import (
	v1 "github.com/annexsh/annex-proto/gen/go/type/test/v1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type StreamTestExecutionEventsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Group           string `protobuf:"bytes,1,opt,name=group,proto3" json:"group,omitempty"`
	TestExecutionId string `protobuf:"bytes,2,opt,name=test_execution_id,json=testExecutionId,proto3" json:"test_execution_id,omitempty"`
}

func (x *StreamTestExecutionEventsRequest) Reset() {
	*x = StreamTestExecutionEventsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_eventservice_v1_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreamTestExecutionEventsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreamTestExecutionEventsRequest) ProtoMessage() {}

func (x *StreamTestExecutionEventsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_eventservice_v1_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreamTestExecutionEventsRequest.ProtoReflect.Descriptor instead.
func (*StreamTestExecutionEventsRequest) Descriptor() ([]byte, []int) {
	return file_rpc_eventservice_v1_service_proto_rawDescGZIP(), []int{0}
}

func (x *StreamTestExecutionEventsRequest) GetGroup() string {
	if x != nil {
		return x.Group
	}
	return ""
}

func (x *StreamTestExecutionEventsRequest) GetTestExecutionId() string {
	if x != nil {
		return x.TestExecutionId
	}
	return ""
}

type StreamTestExecutionEventsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Event *v1.Event `protobuf:"bytes,1,opt,name=event,proto3" json:"event,omitempty"`
}

func (x *StreamTestExecutionEventsResponse) Reset() {
	*x = StreamTestExecutionEventsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_eventservice_v1_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreamTestExecutionEventsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreamTestExecutionEventsResponse) ProtoMessage() {}

func (x *StreamTestExecutionEventsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_eventservice_v1_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreamTestExecutionEventsResponse.ProtoReflect.Descriptor instead.
func (*StreamTestExecutionEventsResponse) Descriptor() ([]byte, []int) {
	return file_rpc_eventservice_v1_service_proto_rawDescGZIP(), []int{1}
}

func (x *StreamTestExecutionEventsResponse) GetEvent() *v1.Event {
	if x != nil {
		return x.Event
	}
	return nil
}

var File_rpc_eventservice_v1_service_proto protoreflect.FileDescriptor

var file_rpc_eventservice_v1_service_proto_rawDesc = []byte{
	0x0a, 0x21, 0x72, 0x70, 0x63, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x13, 0x72, 0x70, 0x63, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x1a, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x74,
	0x65, 0x73, 0x74, 0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x64, 0x0a, 0x20, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x54, 0x65,
	0x73, 0x74, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x67, 0x72, 0x6f, 0x75,
	0x70, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x2a,
	0x0a, 0x11, 0x74, 0x65, 0x73, 0x74, 0x5f, 0x65, 0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x74, 0x65, 0x73, 0x74, 0x45,
	0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0x4e, 0x0a, 0x21, 0x53, 0x74,
	0x72, 0x65, 0x61, 0x6d, 0x54, 0x65, 0x73, 0x74, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f,
	0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x29, 0x0a, 0x05, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x74, 0x65, 0x73, 0x74, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x52, 0x05, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x32, 0x9f, 0x01, 0x0a, 0x0c, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x8e, 0x01, 0x0a, 0x19,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x54, 0x65, 0x73, 0x74, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74,
	0x69, 0x6f, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x35, 0x2e, 0x72, 0x70, 0x63, 0x2e,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x54, 0x65, 0x73, 0x74, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74,
	0x69, 0x6f, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x36, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x54, 0x65, 0x73,
	0x74, 0x45, 0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x30, 0x01, 0x42, 0xdf, 0x01, 0x0a,
	0x17, 0x63, 0x6f, 0x6d, 0x2e, 0x72, 0x70, 0x63, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x42, 0x0c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x48, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x6e, 0x6e, 0x65, 0x78, 0x73, 0x68, 0x2f, 0x61, 0x6e, 0x6e,
	0x65, 0x78, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f,
	0x72, 0x70, 0x63, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2f, 0x76, 0x31, 0x3b, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x76, 0x31, 0xa2, 0x02, 0x03, 0x52, 0x45, 0x58, 0xaa, 0x02, 0x13, 0x52, 0x70, 0x63, 0x2e, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x56, 0x31, 0xca, 0x02,
	0x13, 0x52, 0x70, 0x63, 0x5c, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1f, 0x52, 0x70, 0x63, 0x5c, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x15, 0x52, 0x70, 0x63, 0x3a, 0x3a, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rpc_eventservice_v1_service_proto_rawDescOnce sync.Once
	file_rpc_eventservice_v1_service_proto_rawDescData = file_rpc_eventservice_v1_service_proto_rawDesc
)

func file_rpc_eventservice_v1_service_proto_rawDescGZIP() []byte {
	file_rpc_eventservice_v1_service_proto_rawDescOnce.Do(func() {
		file_rpc_eventservice_v1_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_eventservice_v1_service_proto_rawDescData)
	})
	return file_rpc_eventservice_v1_service_proto_rawDescData
}

var file_rpc_eventservice_v1_service_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_rpc_eventservice_v1_service_proto_goTypes = []interface{}{
	(*StreamTestExecutionEventsRequest)(nil),  // 0: rpc.eventservice.v1.StreamTestExecutionEventsRequest
	(*StreamTestExecutionEventsResponse)(nil), // 1: rpc.eventservice.v1.StreamTestExecutionEventsResponse
	(*v1.Event)(nil), // 2: type.test.v1.Event
}
var file_rpc_eventservice_v1_service_proto_depIdxs = []int32{
	2, // 0: rpc.eventservice.v1.StreamTestExecutionEventsResponse.event:type_name -> type.test.v1.Event
	0, // 1: rpc.eventservice.v1.EventService.StreamTestExecutionEvents:input_type -> rpc.eventservice.v1.StreamTestExecutionEventsRequest
	1, // 2: rpc.eventservice.v1.EventService.StreamTestExecutionEvents:output_type -> rpc.eventservice.v1.StreamTestExecutionEventsResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_rpc_eventservice_v1_service_proto_init() }
func file_rpc_eventservice_v1_service_proto_init() {
	if File_rpc_eventservice_v1_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_rpc_eventservice_v1_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreamTestExecutionEventsRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_rpc_eventservice_v1_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreamTestExecutionEventsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_rpc_eventservice_v1_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_rpc_eventservice_v1_service_proto_goTypes,
		DependencyIndexes: file_rpc_eventservice_v1_service_proto_depIdxs,
		MessageInfos:      file_rpc_eventservice_v1_service_proto_msgTypes,
	}.Build()
	File_rpc_eventservice_v1_service_proto = out.File
	file_rpc_eventservice_v1_service_proto_rawDesc = nil
	file_rpc_eventservice_v1_service_proto_goTypes = nil
	file_rpc_eventservice_v1_service_proto_depIdxs = nil
}
