module.exports = function(grunt) {
    grunt.initConfig({
        //watch
        watch: {
            css: {
                files: ['sass/*.scss' ,'sass/**/*.sass'],
                tasks: ['sass']
            },
            html: {
                files: ['*.html' ,'app/*.html'],
                task: ['watchTask']
            },
            js : {
              files : ['js/*.js']
            },
            bake: {
                files: ['app/**/*.html'],
                tasks: ['bake']
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
                        '*.html',
                        'js/*.js'
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

        // html 樣板
                bake: {
                    build: {
                        files: {
                            "index.html": "app/index.html",
                            "tween.html": "app/tween.html"
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
    grunt.loadNpmTasks('grunt-bake');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch','bake']);
    grunt.registerTask('ok', ['uglify']);
};
