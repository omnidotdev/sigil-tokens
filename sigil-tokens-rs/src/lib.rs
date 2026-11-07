//! Omni Sigil design tokens for native (Rust) renderers.
//!
//! The color data in [`generated`] is emitted from the DTCG token source of
//! truth (`src/dtcg/*.tokens.json` in the `@omnidotdev/sigil-tokens` package)
//! by `bun emit-rust`, so web (Panda) and native share one source. Do not edit
//! `generated.rs` by hand; change the DTCG and re-emit.
//!
//! With the `egui` feature, [`egui::apply`] themes an [`::egui::Context`] from a
//! [`Theme`].

pub mod generated;

pub use generated::{omni, Palette, DARK, LIGHT};

/// An 8-bit-per-channel sRGB color with straight (non-premultiplied) alpha.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Rgba {
    pub r: u8,
    pub g: u8,
    pub b: u8,
    pub a: u8,
}

impl Rgba {
    pub const fn new(r: u8, g: u8, b: u8, a: u8) -> Self {
        Self { r, g, b, a }
    }
}

/// The two Sigil theme modes.
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Theme {
    Light,
    Dark,
}

impl Theme {
    /// The resolved semantic [`Palette`] for this theme.
    pub const fn palette(self) -> Palette {
        match self {
            Theme::Light => LIGHT,
            Theme::Dark => DARK,
        }
    }
}

#[cfg(feature = "egui")]
pub mod egui {
    //! egui theming adapter.
    use super::{Rgba, Theme};
    use ::egui::{Color32, Context, Stroke};

    const fn c32(rgba: Rgba) -> Color32 {
        Color32::from_rgba_premultiplied(rgba.r, rgba.g, rgba.b, rgba.a)
    }

    const fn opaque(rgba: Rgba) -> Color32 {
        Color32::from_rgb(rgba.r, rgba.g, rgba.b)
    }

    /// Build an [`::egui::Visuals`] from a Sigil [`Theme`].
    pub fn visuals(theme: Theme) -> ::egui::Visuals {
        let p = theme.palette();
        let mut v = match theme {
            Theme::Dark => ::egui::Visuals::dark(),
            Theme::Light => ::egui::Visuals::light(),
        };

        v.override_text_color = Some(opaque(p.fg_default));
        v.panel_fill = opaque(p.bg_default);
        v.window_fill = opaque(p.bg_default);
        v.extreme_bg_color = opaque(p.bg_canvas);
        v.faint_bg_color = opaque(p.bg_subtle);
        v.hyperlink_color = opaque(p.accent);

        v.selection.bg_fill = c32(Rgba::new(p.accent.r, p.accent.g, p.accent.b, 77));
        v.selection.stroke = Stroke::new(1.0, opaque(p.accent));

        let border = Stroke::new(1.0, opaque(p.border_default));
        let border_subtle = Stroke::new(1.0, opaque(p.border_subtle));

        v.widgets.noninteractive.bg_fill = opaque(p.bg_default);
        v.widgets.noninteractive.weak_bg_fill = opaque(p.bg_subtle);
        v.widgets.noninteractive.bg_stroke = border_subtle;
        v.widgets.noninteractive.fg_stroke = Stroke::new(1.0, opaque(p.fg_muted));

        v.widgets.inactive.bg_fill = opaque(p.bg_muted);
        v.widgets.inactive.weak_bg_fill = opaque(p.bg_subtle);
        v.widgets.inactive.bg_stroke = border_subtle;
        v.widgets.inactive.fg_stroke = Stroke::new(1.0, opaque(p.fg_default));

        v.widgets.hovered.bg_fill = opaque(p.bg_emphasized);
        v.widgets.hovered.weak_bg_fill = opaque(p.bg_muted);
        v.widgets.hovered.bg_stroke = border;
        v.widgets.hovered.fg_stroke = Stroke::new(1.0, opaque(p.fg_default));

        v.widgets.active.bg_fill = opaque(p.accent);
        v.widgets.active.weak_bg_fill = opaque(p.bg_emphasized);
        v.widgets.active.bg_stroke = Stroke::new(1.0, opaque(p.accent_emphasized));
        v.widgets.active.fg_stroke = Stroke::new(1.0, opaque(p.accent_fg));

        v.widgets.open.bg_fill = opaque(p.bg_muted);
        v.widgets.open.weak_bg_fill = opaque(p.bg_subtle);
        v.widgets.open.bg_stroke = border;
        v.widgets.open.fg_stroke = Stroke::new(1.0, opaque(p.fg_default));

        v
    }

    /// Apply the Sigil [`Theme`] to an egui [`Context`].
    pub fn apply(ctx: &Context, theme: Theme) {
        ctx.set_visuals(visuals(theme));
    }
}
