module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'expanded'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'js/*.js']
    },

    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },

    // ftpush: {
    //   build: {
    //     auth: {
    //       host: 'engr-web-d01.engr.utexas.edu',
    //       port: 6421,
    //       authKey: 'key1'        },
    //     src: '',
    //     dest: '/var/www/faculty-dev/profiles/openscholar/themes/cullinan',
    //      exclusions: [
    //       '**/.DS_Store',
    //       '**/Thumbs.db',
    //       '**/node_modules/**',
    //       '**/.gitignore',
    //       '.editorconfig',
    //       '.ftppass',
    //       '.grunt',
    //       '.sass-cache',
    //       'sass',
    //       'js',
    //       'images',
    //       'images',
    //       '.jshintrc'
    //     ],
    //     keep: [],
    //     simple: true
    //   }
    // },

    watch: {
      // tasks: ['ftpush'],
      // js: {
      //   files: ['js/*.js'],
      //   tasks: ['uglify:js'],
      //   options: {
      //     livereload: true,
      //   }
      // },
      sass: {
        files: ['**/*.scss'],
        tasks: ['compass:dist']
      },
      options: {
        livereload: true,
      },
    },

  });


  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-devtools');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);
  // grunt.loadNpmTasks('grunt-ftpush');

};