# Calcite Snippets (Unofficial)

### Calcite Design System
<!-- Section on CDS -->
"Calcite Design System is a collection of design and development resources for creating beautiful, easy to use, cohesive experiences across apps with minimal effort. It includes a UI kit, icons, color schemes, and a web component library with UI elements such as buttons, panels, accordions, alerts, and many more" ([Calcite Design System](https://developers.arcgis.com/calcite-design-system/). 

This is an unofficial extension for the Calcite Design System components created as a part of Esri's monthly First Friday Hack from October and November 2023. 

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

#### Local Installation
See notes here: https://github.com/abp6318/calcite-snippets/blob/main/vsc-extension-quickstart.md#install-your-extension

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
Testing your changes is relatively simple once you've run `npm run snippify` and completed the prompts. Inside the `.vscode` directory are two essential files for testing: `launch.json` and `tasks.json`.

Open up the debug tab (using `shift + command + D` on Mac or `shift + windows + D` on Windows). You should see a small dropdown at the top; select the option that says `~Launch Extension~`. This label may change in the future if the `launch.json` file is updated.

<img width="600" alt="Screenshot 2023-10-22 at 2 35 09 PM" src="https://github.com/abp6318/calcite-snippets/assets/60486980/4ac0481a-f8e1-4ed8-9073-cdd38616bda3">

Press the run button (a green triangle in the same area) and a new Extension Development Host (EDH) window will open; it will look similar to an empty/repo-less VSCode window. Create a new file in this EDH and begin typing out a prefix for a calcite component. It should appear as an option.

<img width="600" alt="Screenshot 2023-10-22 at 2 36 00 PM" src="https://github.com/abp6318/calcite-snippets/assets/60486980/ad64593a-8a0a-41e1-9af0-a29344948a48">

To clean up your testing environment, close your EDH by either hitting the red 'x' or going back to the VSCode window you started the debugger from and hit the stop button (a red square).

<img width="600" alt="Screenshot 2023-10-22 at 2 37 08 PM" src="https://github.com/abp6318/calcite-snippets/assets/60486980/5abc58c5-abc0-46d5-859f-c1c9ce0deea6">

### How To Use
  <!-- Reference section on testing locally -->
- For testing your changes: https://github.com/abp6318/calcite-snippets/edit/main/README.md#testing-your-changes
  <!-- Reference section on finding in store -->
- For finding the app in the store: (TBD upon publication)
<!-- Section on how to use extension in editor -->
Using a snippets extension in VSCode is relatively simple, considering they are meant to assist users in development. Once you have the extension installed (or you are in the Extension Development Host mentioned in the testing section), all you need to do is begin typing out the prefix and the snippet should appear as an option.

<img width="600" alt="Screenshot 2023-10-22 at 2 36 00 PM" src="https://github.com/abp6318/calcite-snippets/assets/60486980/ad64593a-8a0a-41e1-9af0-a29344948a48">

### Resources
- Extensions
  - Create your own: https://code.visualstudio.com/api/get-started/your-first-extension
  - Snippets: https://code.visualstudio.com/docs/editor/userdefinedsnippets
  - Publishing: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
- Esri & Calcite
  - Calcite Design System: https://developers.arcgis.com/calcite-design-system/
  - Esri Home: https://www.esri.com/en-us/home
  - ArcGIS Hub: https://hub.arcgis.com/

### Contact
If you are not a part of Esri, but are interested in contributing, please contact me.
- Aaron Putterman
- aputterman@esri.com
- https://www.linkedin.com/in/aaron-putterman/
