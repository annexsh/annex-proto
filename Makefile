PROTO_FILES := $(wildcard proto/*)
BUF_VERSION := 1.30.1

.PHONY: gen
gen: buf-format buf-lint proto-gen

.PHONY: buf-format
buf-format: $(PROTO_FILES)
	docker run -v $$(pwd):/srv -w /srv bufbuild/buf:$(BUF_VERSION) format -w

.PHONY: buf-lint
buf-lint: $(PROTO_FILES)
	docker run -v $$(pwd):/srv -w /srv bufbuild/buf:$(BUF_VERSION) lint

.PHONY: proto-gen
proto-gen: $(PROTO_FILES)
	rm -rf gen/go
	docker run -v $$(pwd):/srv -w /srv bufbuild/buf:$(BUF_VERSION) generate
