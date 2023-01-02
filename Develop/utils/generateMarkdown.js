// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  let updateLicense = "";
  let color = "";

  switch(license){
    case 'GNU AGPLv3':
      updateLicense = 'AGPL_v3';
      color = 'blue';
    break;
    case 'GNU GPLv3':
      updateLicense = 'GPLv3';
      color = 'blue';
    break;
    case 'GNU LGPLv3':
      updateLicense = 'LGPL_v3';
      color = 'blue';
    break;
    case 'Mozilla Public License 2.0':
      updateLicense = 'MPL_2.0';
      color = 'brightgreen';
    break;
    case 'Apache License 2.0':
      updateLicense = 'Apache_2.0';
      color = 'blue';
    break;
    case 'MIT License':
      updateLicense = 'MIT';
      color = 'yellow';
    break;
    case 'Boost Software License 1.0':
      updateLicense = 'Boost_1.0';
      color = 'lightblue';
    break;
    default:
    updateLicense = "None";
    color = 'black';
  }

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + updateLicense + "-" + color + ")";
  }

  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case "GNU AGPLv3":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0.html";
    break;
    case "GNU GPLv3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
    break;
    case "GNU LGPLv3":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0.html";
    break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/";
    break;
    case "Apache License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
    break;
    case "MIT License":
      licenseLink = "https://mit-license.org/";
    break;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
    break; 
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None" || license != "N/A" || license != " ") {
    licenseSect += "## License\n"
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];

  // add title
  let markdown = "# " + data.title + "\n";

  // add license badge
  markdown += renderLicenseBadge(data.license) + "\n";

  // add table of contents
  markdown += "## Table of Contents\n";
  for (let i=0; i<sections.length; i++) {
    if (! (sections[i] === "License" && data.license === "None")) {
      markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
    }
  }
  markdown += "\n";

  // add description
  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";

  // add installation
  markdown += "## " + sections[1] + "\n";
  markdown += data.installation + "\n";

  // add usage
  markdown += "## " + sections[2] + "\n";
  markdown += data.usage + "\n";

  // add contributing
  markdown += "## " + sections[3] + "\n";
  markdown += data.contributing + "\n";

  // add testing
  markdown += "## " + sections[4] + "\n";
  markdown += data.tests + "\n";

  // add license
  markdown += renderLicenseSection(data.license) + "\n";

  // add questions
  markdown += "## " + sections[6] + "\n";
  markdown += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
  markdown += "You can email me at " + data.email + " if you have any additional questions.\n"

  return markdown;
}

module.exports = generateMarkdown;
