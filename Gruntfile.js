module.exports = function(grunt) {
    grunt.initConfig({
        //watch
        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['*.html'],
                task: ['watchTask']
            }
        },

        //sass
        sass: {
            build: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        //browserSync
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './',
                        index: 'index.html'
                    }
                }
            }
        },
        //uglify

        uglify: {
            my_target: {
                files: {
                    'js/output.js': ['src/*.js']
                        // dest目的 : src 來源
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('ok', ['uglify']);
};
