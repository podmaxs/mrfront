//Gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({
      
    // Watch task config
    watch: {
      sass: {
        files: "master/scss/*.scss",
        tasks: ['sass']
      },
      cssmin: {
        files: ["master/styles/app/*.css","master/styles/draweb/*.css"],
        tasks: ['cssmin']
      },
      uglify: {
        files: ["master/app/modules/**/*.js", "master/app/manifest.js","master/draweb/modules/**/*.js", "master/draweb/config.js","vendor/src/*.json"],
        tasks: ['uglify']
      },
      imagemin: {
        files: ['master/drawable/*.{png,jpg,gif,svg}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
       },
       jade: {
    files: ['master/views/**/*.jade','master/views/**/**/*.jade','master/index.jade'],
    tasks: ['jade']
  }
    },
      
    // Sass task config
    sass: {
        dev: {
            files: {
                // fichero destino  // fichero .scss
                "master/app-h.css" : ["master/scss/*.scss"]
            }
        }
    },
      
    // BrowserSync task config
   
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "app/*.css",
            "app/*.js",
            "master/styles/*.css",
            "master/styles/**/*.css",
            "app/views/**/*.html",
            "index.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
        }
          }
        }
      
 
    },
      
    // UnCSS task config  
    uncss: {
        dist: {
            options: {
               //Estilos que queremos limpiar
               stylesheets : ['css/materialize.min.css'],
                
               //Estilos que no queremos limpiar
               ignoreSheets: [/custom.css/], 
            },
            files: {
                    //Archivo css de salida    //Scanea las clases, ids, etc de este html
                    'css/materialize.min.css': ['index.html']
            }
        }
    },
      
    // Cssmin task config
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {//Fichero combinado   //Ficheros que vamos a combinar, 2 .css
                'app/app.css': ['master/styles/app/*.css'],
                 'app/draweb.css': ['master/styles/draweb/*.css']
        }
      }
    },
      
    //Uglify task config  
    uglify: {
      build: {
        src: [ 'master/app/manifest.js','master/app/modules/**/*module.js','master/app/modules/**/*config.js','master/app/modules/**/*directive.js','master/app/modules/**/*service.js','master/app/modules/**/*factory.js','master/app/modules/**/*provider.js','master/app/modules/**/*filter.js','master/app/modules/**/*run.js','master/app/modules/**/*controller.js'],//Ruta de fichero de entrada
        dest: 'app/app.js'//Ruta del fichero minificado
      },
      build2: {
        files:{ 'app/draweb.js':['master/src/*.js','master/draweb/config.js','master/draweb/modules/**/*module.js','master/draweb/modules/**/*config.js','master/draweb/modules/**/*directive.js','master/draweb/modules/**/*service.js','master/draweb/modules/**/*factory.js','master/draweb/modules/**/*provider.js','master/draweb/modules/**/*filter.js','master/draweb/modules/**/*run.js','master/draweb/modules/**/*controller.js']}//Ruta de fichero de entrada
      }
    
    },
    
    //Imagemin task config  
    imagemin: {
        main: {
          files: [{
            expand: true,
            cwd: 'master/drawable/', //todas las imágenes de esta ruta
            src: ['**/*.{png,jpg,gif,.svg}'], //patrón de tipos de imagen
            dest: 'app/drawable/' //carpeta destino una vez optimizadas
          }]
        }
     },
     jade: {
       compile: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "master/views",
              src: "**/*.jade",
              dest: "app/views",
              expand: true,
              ext: ".html"
            } ]
        },
       compile2: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "master/",
              src: "*.jade",
              dest: "./",
              expand: true,
              ext: ".html"
            } ]
        }
    }
 
  });
  
  //Cargamos los grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-jade');

 
 //Tarea por defecto
 grunt.registerTask('default', ['browserSync', 'watch']);
};