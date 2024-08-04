PREFIX ?= dist

help:
	cat Makefile

build:
	pnpm run docs:build --dest $(PREFIX)

install: build

dev:
	pnpm run docs:dev

deps:
	pnpm install

init-git-hooks:
	ln -sf $(PWD)/scripts/pre-commit $(PWD)/.git/hooks/pre-commit

