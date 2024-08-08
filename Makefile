PROTO_FILES := $(wildcard proto/*)
BUF_VERSION := 1.33.0

.PHONY: gen
gen: buf-format buf-lint gen-proto

.PHONY: buf-format
buf-format: $(PROTO_FILES)
	docker run -v $$(pwd):/srv -w /srv bufbuild/buf:$(BUF_VERSION) format -w

.PHONY: buf-lint
buf-lint: $(PROTO_FILES)
	docker run -v $$(pwd):/srv -w /srv bufbuild/buf:$(BUF_VERSION) lint

.PHONY: gen-proto
gen-proto: $(PROTO_FILES)
	rm -rf **/gen/
	docker run -v $$(pwd):/srv -w /srv bufbuild/buf:$(BUF_VERSION) generate
	cd ts; pnpm build

.PHONY: publish-ts
publish-ts:
	cd ts; pnpm publish