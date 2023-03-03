import path from "node:path";
import { fileURLToPath } from "node:url";
import IconFontBuildr from "icon-font-buildr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconFolders = ["action", "arrow", "editing", "notification", "payment"];
const iconSizes = [
  "10",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "40",
  "48",
  "64",
];
const iconTypes = ["outline", "filled"];

for (let iconType of iconTypes) {
  for (let iconSize of iconSizes) {
    let icons = [];

    for (let iconFolder of iconFolders) {
      icons.push(
        path.join(
          __dirname,
          "Test-Icons--V5/" + iconFolder,
          "[icon]-" + iconType + "-" + iconSize + ".svg"
        )
      );
    }

    console.log(icons);

    const builder = new IconFontBuildr({
      sources:
        // Where to get the icons, both remote and local sources are supported. `[icon]` will be replace with the name of your icon
        icons,
      icons: [
        // Icons to use/download
        "bug",
        "arrow-left",
        "arrow-right",
        "plus",
        "information",
        "sepa",
      ],
      output: {
        // codepoints: true, // Enable support for codepoints
        // ligatures: false, // Disable support for ligatures
        // icons: path.join ( __dirname, 'builder-icons' ), // Where to save the icons, if not provided they won't be stored permanently
        fonts: path.join(__dirname, "generated-icon-fonts"), // Where to save the fonts
        fontName: "db-icon-font-" + iconSize + "-" + iconType, // The name of the font to generate
        formats: [
          // Font formats to output
          "woff",
          "woff2",
        ],
      },
    });

    await builder.build();
  }
}

// const codepoints = builder.getIconsCodepoints (); // Get a map of icon names to codepoints, useful for generating HTML/CSS/SCSS etc.
// const ligatures = builder.getIconsLigatures (); // Get a map of icon names to ligatures, useful for generating HTML/CSS/SCSS etc.
