{
  description = "Pleshevski personal site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    let
      out = system:
        let pkgs = import nixpkgs { inherit system; }; in
        {
          devShells = rec {
            editor = pkgs.mkShell {
              packages = with pkgs.nodePackages; [
                typescript-language-server # typescript
                vscode-langservers-extracted # html, css, json, eslint
              ];
            };
            tools = pkgs.mkShell {
              packages = with pkgs; [
                nodejs_22
                gnumake
                pnpm
              ];
            };
            default = pkgs.mkShell {
              inputsFrom = [ editor tools ];
            };
          };
        };
    in
    flake-utils.lib.eachDefaultSystem out;

}
