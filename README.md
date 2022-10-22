# README Generator
This repository contains a script which generates a professional looking README based on user input.

This repository utilizes
* JavaScript
* Node
* npm
* Inquirer

## Installation 

Make sure you have node installed.
```sh
npm install
```

## Usage 

```sh
node index.js
```
And respond to the prompts! Then go checkout your `GENERATEDREADME.MD`

## Code Snippets
The most interesting code in this repo is around how we handle the options for the licenses. First we create License object to contain links to the badge for the license and to the license itself
```Javascript
function License(badge, link) {
  this.badge = badge
  this.link = link
}
```

Then we store our various license options in an object
```Javascript
const licenses = {
  'Apache 2.0': new License('https://img.shields.io/badge/License-Apache_2.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0'),
  "GNU v3.0": new License("https://img.shields.io/badge/License-GPLv3-blue.svg", "https://www.gnu.org/licenses/gpl-3.0"),
  ...
  "Mozilla":   new License("https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg", "https://opensource.org/licenses/MPL-2.0"),
  "The Unlicense":   new License("https://img.shields.io/badge/license-Unlicense-blue.svg", "http://unlicense.org/")}

```

The keys from this object are used to generate the options available in our prompt.
```Javascript
    {
        message: "What license would you like to use for your project?",
        name: "projectLicense",
        type: "list",
        choices: Object.keys(utils.licenses)
    }
```
This guarantees that the user input will be in this object! It also allows us to keep our render functions nice and clean
```Javascript
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  } else {
    return `[![License](${licenses[license].badge})](${licenses[license].link})`
  }
}
```


## License

Refer to the license in the Github repo.
