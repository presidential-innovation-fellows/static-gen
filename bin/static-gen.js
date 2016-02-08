#!/usr/bin/env node

'use strict';

let path      = require('path');
let exec      = require('child_process').exec;
let async     = require('async');
let fs        = require('fs-extra');
// let argv      = require('minimist')(process.argv.slice(2));

let templateDir = path.resolve(__dirname, "..", "project-template");
let workingDir = process.cwd();

let run = function(cmd, callback){
  let child = exec(cmd, function(err, stdout, stderr) {
    if (stderr !== null) {
      console.error('' + stderr);
    }
    if (stdout !== null) {
      console.log('' + stdout);
    }
    callback(err);
  });
};

async.waterfall([
  function(next) {
    console.log("Copying the project template into " + workingDir + "...");
    fs.copy(templateDir, workingDir, next);
  },
  function(next) {
    console.log("Installing dependencies...");
    run("npm install", next);
  }
], function done() {
  console.log("Done. Run `grunt` command to start compilation and server.");
});
