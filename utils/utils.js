function License(badge, link) {
  this.badge = badge
  this.link = link
}

const licenses = {
  'Apache 2.0': new License('https://img.shields.io/badge/License-Apache_2.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0'),
  "GNU v3.0": new License("https://img.shields.io/badge/License-GPLv3-blue.svg", "https://www.gnu.org/licenses/gpl-3.0"),
  "MIT": new License("https://img.shields.io/badge/License-MIT-yellow.svg", "https://opensource.org/licenses/MIT"),
  "BSD 2-Clause" : new License("https://img.shields.io/badge/License-BSD_2--Clause-orange.svg", "https://opensource.org/licenses/BSD-2-Clause"),
  "Boost Software 1.0":   new License("https://img.shields.io/badge/License-Boost_1.0-lightblue.svg", "https://www.boost.org/LICENSE_1_0.txt)"),
  "Creative Commons Zero v1":  new License("https://licensebuttons.net/l/zero/1.0/80x15.png", "http://creativecommons.org/publicdomain/zero/1.0/"),
  "Eclipse Public License":  new License("https://img.shields.io/badge/License-EPL_1.0-red.svg", "https://opensource.org/licenses/EPL-1.0"),
  "BSD 3-New":   new License("https://img.shields.io/badge/License-BSD_3--Clause-blue.svg","https://opensource.org/licenses/BSD-3-Clause"),
  "GNU Affero":   new License("https://img.shields.io/badge/License-AGPL_v3-blue.svg","https://www.gnu.org/licenses/agpl-3.0"),
  "GNU General":   new License("https://img.shields.io/badge/License-GPL_v2-blue.svg","https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"),
  "GNU Lesser":   new License("https://img.shields.io/badge/License-LGPL_v3-blue.svg","https://www.gnu.org/licenses/lgpl-3.0"),
  "Mozilla":   new License("https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg", "https://opensource.org/licenses/MPL-2.0"),
  "The Unlicense":   new License("https://img.shields.io/badge/license-Unlicense-blue.svg", "http://unlicense.org/")}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  } else {
    return `[![License](${licenses[license].badge})](${licenses[license].link})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ""
  } else {
    return `[${license}](${licenses[license].link})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  if (!license) {
    return ""
  } else {
    return   `The license used for this project is ${renderLicenseLink(license)}. Get more information by checking out the repo.`
  }}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.projectLicense)}
  # ${data.projectTitle}
  ## Description
  ${data.projectDescription}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.projectInstallation}
  ## Usage
  ${data.projectUsage}
  ## License
  ${renderLicenseSection(data.projectLicense)}
  ## Contributing
  ${data.projectContributionGuidelines}
  ## Tests
  ${data.projectTests}
  ## Questions
  * [Github](https://github.com/${data.githubUsername})\n
  If you have further questions do not hesitate to email me at ${data.emailAddress}
`;
}

exports.licenses = licenses
exports.generateMarkdown = generateMarkdown;
