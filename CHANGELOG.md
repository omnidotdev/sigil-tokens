# @omnidotdev/sigil-tokens

## 0.2.0

### Minor Changes

- [#2](https://github.com/omnidotdev/sigil-tokens/pull/2) [`1ba33f9`](https://github.com/omnidotdev/sigil-tokens/commit/1ba33f93668e3f7de7bfb5119a3e34e68589106b) Thanks [@coopbri](https://github.com/coopbri)! - Make the W3C DTCG format the single source of truth for Sigil tokens: the Panda preset builds from `src/dtcg/*.tokens.json`, gated byte-identical to the previous output. Adds the `sigil-tokens-rs` crate, generated from the same DTCG source, with an egui theming adapter for native renderers.
