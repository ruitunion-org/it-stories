PREFIX ?= src/.vuepress/dist

.PHONY: help
help:
	cat Makefile

.PHONY: build
build:
	pnpm run docs:build --dest $(PREFIX)

.PHONY: install
install: build

.PHONY: dev
dev:
	pnpm run docs:dev

.PHONY: deps
deps:
	pnpm install
