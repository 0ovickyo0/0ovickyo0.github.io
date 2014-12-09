'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        less:{
            development: {
                options: {
                    paths: ["assets"]
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            },
            production: {
                options: {
                    paths: ["assets"]
                },
                files: {
                    "css/main.min.css": "less/main.less"
                }
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        clean: {
            dist: [
                'assets/css/main.min.css',
                'assets/css/main.css'
            ]
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Register tasks
    grunt.registerTask('default', [
        'clean',
        'less',
        'cssmin'
    ]);

};