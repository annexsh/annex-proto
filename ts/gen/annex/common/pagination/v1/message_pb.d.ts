import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message annex.common.pagination.v1.PaginationToken
 */
export declare class PaginationToken extends Message<PaginationToken> {
    /**
     * @generated from field: string offset_id = 1;
     */
    offsetId: string;
    constructor(data?: PartialMessage<PaginationToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "annex.common.pagination.v1.PaginationToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationToken;
    static equals(a: PaginationToken | PlainMessage<PaginationToken> | undefined, b: PaginationToken | PlainMessage<PaginationToken> | undefined): boolean;
}
