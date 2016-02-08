#!/usr/bin/env node

'use strict';

var path      = require('path');
var exec      = require('child_process').exec;
var async     = require('async');
var fs        = require('fs-extra');
// var argv      = require('minimist')(process.argv.slice(2));

var templateDir = path.resolve(__dirname, "..", "project-template");
var workingDir = process.cwd();

var run = function(cmd, callback){
  var child = exec(cmd, function(err, stdout, stderr) {
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
