// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: annex/events/v1/event_service.proto

package eventsv1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1 "github.com/annexsh/annex-proto/go/gen/annex/events/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// EventServiceName is the fully-qualified name of the EventService service.
	EventServiceName = "annex.events.v1.EventService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// EventServiceStreamTestExecutionEventsProcedure is the fully-qualified name of the EventService's
	// StreamTestExecutionEvents RPC.
	EventServiceStreamTestExecutionEventsProcedure = "/annex.events.v1.EventService/StreamTestExecutionEvents"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	eventServiceServiceDescriptor                         = v1.File_annex_events_v1_event_service_proto.Services().ByName("EventService")
	eventServiceStreamTestExecutionEventsMethodDescriptor = eventServiceServiceDescriptor.Methods().ByName("StreamTestExecutionEvents")
)

// EventServiceClient is a client for the annex.events.v1.EventService service.
type EventServiceClient interface {
	StreamTestExecutionEvents(context.Context, *connect.Request[v1.StreamTestExecutionEventsRequest]) (*connect.ServerStreamForClient[v1.StreamTestExecutionEventsResponse], error)
}

// NewEventServiceClient constructs a client for the annex.events.v1.EventService service. By
// default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses,
// and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewEventServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) EventServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &eventServiceClient{
		streamTestExecutionEvents: connect.NewClient[v1.StreamTestExecutionEventsRequest, v1.StreamTestExecutionEventsResponse](
			httpClient,
			baseURL+EventServiceStreamTestExecutionEventsProcedure,
			connect.WithSchema(eventServiceStreamTestExecutionEventsMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// eventServiceClient implements EventServiceClient.
type eventServiceClient struct {
	streamTestExecutionEvents *connect.Client[v1.StreamTestExecutionEventsRequest, v1.StreamTestExecutionEventsResponse]
}

// StreamTestExecutionEvents calls annex.events.v1.EventService.StreamTestExecutionEvents.
func (c *eventServiceClient) StreamTestExecutionEvents(ctx context.Context, req *connect.Request[v1.StreamTestExecutionEventsRequest]) (*connect.ServerStreamForClient[v1.StreamTestExecutionEventsResponse], error) {
	return c.streamTestExecutionEvents.CallServerStream(ctx, req)
}

// EventServiceHandler is an implementation of the annex.events.v1.EventService service.
type EventServiceHandler interface {
	StreamTestExecutionEvents(context.Context, *connect.Request[v1.StreamTestExecutionEventsRequest], *connect.ServerStream[v1.StreamTestExecutionEventsResponse]) error
}

// NewEventServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewEventServiceHandler(svc EventServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	eventServiceStreamTestExecutionEventsHandler := connect.NewServerStreamHandler(
		EventServiceStreamTestExecutionEventsProcedure,
		svc.StreamTestExecutionEvents,
		connect.WithSchema(eventServiceStreamTestExecutionEventsMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/annex.events.v1.EventService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case EventServiceStreamTestExecutionEventsProcedure:
			eventServiceStreamTestExecutionEventsHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedEventServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedEventServiceHandler struct{}

func (UnimplementedEventServiceHandler) StreamTestExecutionEvents(context.Context, *connect.Request[v1.StreamTestExecutionEventsRequest], *connect.ServerStream[v1.StreamTestExecutionEventsResponse]) error {
	return connect.NewError(connect.CodeUnimplemented, errors.New("annex.events.v1.EventService.StreamTestExecutionEvents is not implemented"))
}
