---
"@omnidotdev/sigil-tokens": minor
---

Make the W3C DTCG format the single source of truth for Sigil tokens: the Panda preset builds from `src/dtcg/*.tokens.json`, gated byte-identical to the previous output. Adds the `sigil-tokens-rs` crate, generated from the same DTCG source, with an egui theming adapter for native renderers.
