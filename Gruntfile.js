module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
          concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: [ 'ext_js/jquery-1.9.1.min.js','js/extracted.js','ext_js/jsfeat-min.js', 'ext_js/numeric-1.2.6.min.js', 'ext_js/dat.gui.min.js', 
              "js/imagewarp.js",'js/findDiff.js', 'js/findBlobs.js', 'js/blobMan.js', 'js/selectview.js'],
              dest: 'dist/magcut.js',
            },
          },
          uglify: {
            build: {
                src: 'dist/magcut.js',
                dest:'../josundin.github.io/magcut/magcut.min.js'
            }
          }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', [
        'concat',
        'uglify'
    ]);
};



