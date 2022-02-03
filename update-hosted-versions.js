'use strict';

const fs = require('fs');
const path = require('path');

const GALLERY_PACKAGE_PATH = path.join(__dirname, './gallery/package.json');
const HOSTED_VERSIONS_PATH = path.join(__dirname, './gallery/hosted-versions.json');

const galleryPackageJSON = fs.readFileSync(GALLERY_PACKAGE_PATH);
const galleryPackageContent = JSON.parse(galleryPackageJSON);

const currentVersion = galleryPackageContent.version;

const hostedVersionsJSON = fs.readFileSync(HOSTED_VERSIONS_PATH);
const hostedVersionsContent = JSON.parse(hostedVersionsJSON);

const updatedVersionsJSON = JSON.stringify(
  [...new Set([...hostedVersionsContent, currentVersion])].sort().reverse(),
  null,
  2,
);

fs.writeFile(HOSTED_VERSIONS_PATH, updatedVersionsJSON, error => { if (error) throw error });

console.log(`Updated hosted versions with ${currentVersion}.`);
