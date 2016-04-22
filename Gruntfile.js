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
        less: {
            encon: {
                options: { 
                    paths: ["public/css/"], // Specifies directories to scan for @import directives when parsing.
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // compilation.css  :  source.less
                    "public/css/encon.min.css": "src/less/encon/app.less"
                }
            },
            ns: {
                options: { 
                    paths: ["public/css/"], // Specifies directories to scan for @import directives when parsing.
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // compilation.css  :  source.less
                    "public/css/ns.min.css": "src/less/ns/app.less"
                }
            },
        },
        uglify:{
            encon: {
                files: {
                  'public/js/encon.min.js': ['src/js/encon/app.js','src/js/libs/parallax.js']
                },
                options: {
                  mangle: false
                }
            },
             ns: {
                files: {
                  'public/js/ns.min.js': ['src/js/ns/app.js','src/js/ns/stars.js','src/js/libs/parallax.js']
                },
                options: {
                  mangle: false
                }
            }
        },
    });
     grunt.registerTask('default', ['less','uglify','watch']);
};