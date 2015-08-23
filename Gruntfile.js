module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: {
      body:  '/*!\n' +
            ' * <%= pkg.name %>\n' +
            ' * <%= pkg.description %>\n' +
            ' * <%= pkg.url %>\n' +
            ' * @version <%= pkg.version %>\n' +
            ' * @author <%= pkg.author %>\n' +
            ' */\n'
    },

    watch: {
      scripts: {
        files: ['./js/**/*.js', '!./js/build/*.min.js', '!./js/vendor/*.js'],
        tasks: ['concat:js'] // Run these tasks on save
      }
    },

    concat: {
      js: {
        src: ['./js/**/*.js', '!./js/build/*.min.js', '!./js/vendor/*.js'],
        dest: './js/build/index.min.js'
      },

      options: {
        stripBanners: false,
        nonull: true,
        banner: '<%= banner.body %>'
      }
    },

    uglify: {
      js: {
        files: {
          './js/build/index.min.js': ['./js/build/index.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', 'watch');
  grunt.registerTask('build', ['concat', 'uglify']);
};
