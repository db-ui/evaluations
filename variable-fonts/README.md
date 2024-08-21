# Variable fonts

This is a repo with information how variable fonts are structured and how to build/use/manipulate them.

Spoiler: At the moment (2024-08-21) there aren't much information about the technical approach. Furthermore, the capabilities of creating it via open source tools is kind of hard.

## The basics

> Variable fonts are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single file.

Source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide

- It is fully supported in all browsers, see [MDNs Variable_fonts_guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).
- In general the font file (`.otf`/`.ttf`) contains an additional [table](https://learn.microsoft.com/en-us/typography/opentype/spec/fvar) to enable the variable font.

## The idea

In a naive way I thought: "We have already an icon font, it should be easy to convert it to a variable font" - I was wrong.

First of all if we use for example this [tool](https://github.com/db-ui/gif) we can generate different file types. And it may contain different icon sizes (e.g. 16,24,32) which might look different, with different weights etc.

But the biggest problem is that a variable font has a restriction: To interpolate a font glyph, it needs the same amount of points and lines and in the same order. Otherwise, it won't be able to interpolate properly.

## The tools

A great place to start is [opentype.js](https://opentype.js.org/). You can check already created variable fonts here. And there is a good JS library behind it. Currently, they don't support writing variable fonts, but there is a [PR](https://github.com/opentypejs/opentype.js/pull/701) for this.

## Create own variable font with open source tools

Based on this [video](https://www.youtube.com/watch?v=xoQuWARCUWI) you can create your own variable font with some open source tools. You need those tools:

- [FontForge](https://fontforge.org/)
- Python Libraries: [fontmake](https://github.com/googlefonts/fontmake)

## Example

> You need to go into this directory: `cd variable-fonts`

1. We use a simple `test.svg` with two rectangles as a testing icon.
2. We run `npx @db-ui/gif --src . --fontName test`
3. This will create some font files. For this example we need `fonts/all/test.woff2`
4. We use [FontForge](https://fontforge.org/) to open the `test.woff2`
5. We will save the current font as `.sfd` format like `test.sfd`. Then we change the font name via FontForge settings to something like `test_bold` and save another file as `test_bold.sfd`.
6. Next we scroll to the bottom of the `test_bold` font inside FontForge and change the positions of the points inside the glyph. In this case we use the empty space between the rectangles to widen them.
7. After this we will create a font from both the `test.sfd` and `test_bold.sfd` as `.ufo` file. **Warning** the svg might get redrawn by `@db-ui/gif` you may need to fix issues (like the direction) in FontForge by using the "Element/Validation" setting.
8. Next we need to create a `.designspace` file. This is a representation (XML) for how the axis works. Check the `test.designspace` for more information.
9. Now we need to run `fontmake -m test.designspace -o variable --production-names --output-path test.ttf`
10. Goto [this](https://opentype.js.org/glyph-inspector.html) website and open the `test.ttf`. You should change the `weight` of the icon with the slider provided. You may also see `index.html` and `index.css` to check how you use an axis inside HTML/CSS.
