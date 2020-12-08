module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cacheBust: {
            taskName: {
                options: {
                    baseDir: 'docs/',
                    assets: [
                        '.vuepress/**',
                        '.vuepress/**/*.png',
                        '.vuepress/**/*.svg',
                        'assets/**',
                        'assets/**/*.css',
                        'assets/**/*.js',
                        'assets/**/*.png',
                        'assets/**/*.svg',
                        'assets/**/*.ai',
                    ],
                    createCopies: false,
                    queryString: true,
                },
                src: [
                    'index.html',
                    'docs/**/*.md',
                    'docs/**/*.html',
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-cache-bust');

    // Default task(s).
    grunt.registerTask('default', ['cacheBust']);


};