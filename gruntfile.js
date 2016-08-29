module.exports = function (grunt) {
    grunt.initConfig({

    // define source files and their destinations
    uglify: {
        files: { 
            src: 'controller/**/*.js',  // source files mask
            dest: 'build/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
        }
    },
	concat: {
		js: {
			src: [ 'controller/**/*.js' ],
			dest: 'build/combined.js',
			options: {
				separator: ';'
			}
		}
	},
    watch: {
        js:  { files: 'controller/**/*.js', tasks: [ 'concat', 'uglify' ] },
    }
	
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks( 'grunt-contrib-concat' );

// register at least this one task
grunt.registerTask('default', [ 'concat','uglify']);


};