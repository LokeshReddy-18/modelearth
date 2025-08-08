/**
 * This file is invoked by 6 lines of code within claude.md inserted into server/index.js 
 * by Claude with "code insert" and "code toggle"
 *
 * Submodule Static Server Configuration
 * This file dynamically serves submodules and root pages directories as static content
 * using virtual paths via Express static middleware. Root pages include modelearth.md
 */

const path = require('path');
const fs = require('fs');

// List of submodules to serve as static directories
const SUBMODULES = [
  'localsite',
  'realitystream',
  'feed',
  'swiper',
  'comparison',
  'codechat',
  'home',
  'cloud',
  'projects'
];

/**
 * Add submodule static middleware to Express app
 * @param {Object} app - Express application instance
 */
function addSubmoduleStatic(app) {
  SUBMODULES.forEach(submodule => {
    const submodulePath = path.resolve(__dirname, submodule);
    if (fs.existsSync(submodulePath)) {
      const express = require('./server/node_modules/express');
      app.use(`/${submodule}`, express.static(submodulePath));
      console.log(`[Submodules] Serving /${submodule} from ${submodulePath}`);
    } else {
      console.log(`[Submodules] Warning: ${submodule} directory not found`);
    }
  });

  // Serve several root files via virtual paths
  const rootFiles = ['modelearth.md', 'index.html', 'README.md', 'BARE_METAL.md'];
  rootFiles.forEach(filename => {
    const filePath = path.resolve(__dirname, filename);
    if (fs.existsSync(filePath)) {
      app.get(`/${filename}`, (req, res) => {
        res.sendFile(filePath);
      });
      console.log(`[Submodules] Serving /${filename} from ${filePath}`);
    } else {
      console.log(`[Submodules] Warning: ${filename} not found in root directory`);
    }
  });
}

module.exports = { addSubmoduleStatic, SUBMODULES };