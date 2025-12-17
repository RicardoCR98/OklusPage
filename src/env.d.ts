/// <reference types="astro/client" />
/// <reference types="astro/astro-jsx" />

declare namespace JSX {
    interface IntrinsicElements extends astroHTML.JSX.IntrinsicElements {}
    interface IntrinsicAttributes extends astroHTML.JSX.IntrinsicAttributes {}
    interface ElementChildrenAttribute extends astroHTML.JSX.ElementChildrenAttribute {}
    type Element = astroHTML.JSX.Element;
}

