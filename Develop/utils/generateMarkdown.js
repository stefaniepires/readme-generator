// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None' || license === '') { 
    return ''
  } else {
    
    return `
    ![License](https://img.shields.io/badge/License-'+license+'-9cf.svg)
    ` 
  }
}
//fixed the above license badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==='MIT'){
    return 'https://choosealicense.com/licenses/mit/'
   } 
   else if (license === 'Apache 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/'
  }
  else if (license === 'GPLv3') {
    return 'https://choosealicense.com/licenses/gpl-3.0/'
 }
 else if (license === 'Mozilla Public 2.0') {
  return 'https://choosealicense.com/licenses/mpl-2.0/'
}
else {
  return ''
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ''
  }
  else{
  return ` 
  ### License 
  This application is covered under the [${license} license](${renderLicenseLink(license)})
  `}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ### Description
  ${data.description}
  
  ### Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Questions](#questions)

  ### Installation
  ${data.packages}
  ${data.technologies}
  
  ### Usage
  ${data.usage}
  

  ${renderLicenseSection(data.license)}

  ### Tests
  ${data.testing}

  ### Contributors
  ${data.contributors}

  ### Questions?
  Contact me at 
  Email: ${data.email}
  GitHub: https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
