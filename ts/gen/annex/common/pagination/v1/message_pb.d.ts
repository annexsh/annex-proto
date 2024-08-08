import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message annex.common.pagination.v1.PaginationToken
 */
export declare class PaginationToken extends Message<PaginationToken> {
    /**
     * @generated from field: google.protobuf.Timestamp last_timestamp = 1;
     */
    lastTimestamp?: Timestamp;
    /**
     * @generated from field: string last_id = 2;
     */
    lastId: string;
    constructor(data?: PartialMessage<PaginationToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.common.pagination.v1.PaginationToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationToken;
    static equals(a: PaginationToken | PlainMessage<PaginationToken> | undefined, b: PaginationToken | PlainMessage<PaginationToken> | undefined): boolean;
}
