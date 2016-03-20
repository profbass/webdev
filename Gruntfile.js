'use strict';
 
module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        watch: {
            styles:{
                files: "src/less/**/*.less",
                tasks: ["less"]
            },
            scripts: {
                files: 'src/js/**/*.js',
                tasks: ['uglify']
            },
        },
        // "less"-task configuration
        less: {
            // production config is also available
            encon: {
                options: {
                    // Specifies directories to scan for @import directives when parsing. 
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["public/css/"],
                },
                files: {
                    // compilation.css  :  source.less
                    "public/css/encon.min.css": "src/less/encon/app.less"
                }
            },
        },
        uglify:{
            encon: {
                files: {
                  'public/js/encon.min.js': ['src/js/encon/app.js','src/js/encon/jquery.enllax.js']
                },
                options: {
                  mangle: false
                }
            }
        },
    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
};