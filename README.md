# Calcite Snippets (Unofficial)

### Calcite Design System
<!-- Section on CDS -->

### Installation
#### Prerequisites
| Technology Name   | Version  | Description                                       | Download
|-------------------|----------|---------------------------------------------------|-------------
| Node.js | Latest | Needed for building and running the extension. | https://nodejs.org/en/download
| VSCode | Latest | Platform the extension is used on! | https://code.visualstudio.com/download
| git | Latest | Only needed if you'd like to contribute. You can just download the zip if you just want to run it. | https://git-scm.com/downloads

#### Finding the Extension in the Store
<!-- Section on how to find extension in VSCode extension store* -->
The extension has not been published in the VSCode extension store yet.

### Adding New Snippets
#### Formatting the Snippet
<!-- Section about formatting name, prefix, description, etc. -->
 - Name (string, required) = Name of Calcite component; capital case with spaces
 - Prefix (string, required) = See formatting options below.
   - `calcite-alert` = Component tags
   - `calcite-alert_required-attributes` = Component with only required attributes
   - `calcite-alert_default-attributes` = Component with all default and required attributes
   - `calcite-alert_example` = Component example (can include sub-components)
 - Description (string, required) = Description of Calcite component; sentence case
 - Body (string, required) = Code block; add to snippet.html

#### Creating the Snippet
<!-- Section about using the snippify script -->
First, add your snippet to `snippet.html`, then once formatted the way you want, run the `snippify.js` script by using the following. You will then be prompted for the name, prefix, and description.
```
npm run snippify
```

#### Testing Your Changes
<!-- Section about testing your new additions locally -->

### How To Use
  <!-- Reference section on testing locally -->
  <!-- Reference section on finding in store -->
<!-- Section on how to use extension in editor -->

### Resources
- Extensions
  - https://code.visualstudio.com/api/get-started/your-first-extension
  - https://code.visualstudio.com/docs/editor/userdefinedsnippets
  - https://code.visualstudio.com/api/working-with-extensions/publishing-extension
- Esri & Calcite
  - https://developers.arcgis.com/calcite-design-system/
  - https://www.esri.com/en-us/home

### Contact
This project is for Esri's monthly First Friday Hack from October and November 2023. Email me if you are interested in contributing.
- Aaron Putterman
- aputterman@esri.com
- https://www.linkedin.com/in/aaron-putterman/
