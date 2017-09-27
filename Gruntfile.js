'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
      fetch_bindings: {
          options: {
            src: "src/",
            wildcard: "**/*.component.ts",
            dest: "dist/",
            baseURL: "ui/idp/",
            outputfile: "config/selectorList.json",
            bindname: "'cmsKey'"            
          },
          files: {
            'dest/default_options': ['src/srcfile', 'src/123'],
          }
        },
      });
    grunt.registerTask('default', ['fetch_bindings']);
    grunt.loadNpmTasks('grunt-fetch-bindings');
}