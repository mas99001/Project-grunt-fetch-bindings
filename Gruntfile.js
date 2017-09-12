'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
      fetch_bindings: {
          options: {
            src: "src/",
            dest: "destination/paterns-par",
            wildcard: "**/*.html",
            handler: "contentData"
          },
          files: {
            'dest/default_options': ['src/srcfile', 'src/123'],
          }
        },
      });
    grunt.registerTask('default', ['fetch_bindings']);
    grunt.loadNpmTasks('grunt-fetch-bindings');
}