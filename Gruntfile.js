module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 8080,
					base: 'app'
				},
			},
		},
		sass: {
			dist: {
				options: {
					sourcemap: true,
					style: 'expanded',
					trace: true,
					debugInfo: true,
					lineNumbers: true,
				},
				files: [{
					expand: true,
					cwd: 'app/css/sass',
					src: '*.sass',
					dest: 'app/css',
					ext: '.css',
				}],
			},
		},
		// autoprefixer: {
		// 	dist: {
		// 		files: {
		// 			'app/css/style.css': 'app/css/style.css',
		// 			'app/css/oldie.css': 'app/css/oldie.css',
		// 		},
		// 	},
		// },

		autoprefixer: {
			// options: {
			// 	browsers: ['last 2 versions', 'ie 9']
			// }
			// prefix all specified files and save them separately
			multiple_files: {
				expand: true,
				flatten: true,
				src: ['app/css/*.css'], // -> src/css/file1.css, src/css/file2.css
				dest: 'app/css', // -> dest/css/file1.css, dest/css/file2.css
			},
		},
		coffee: {
			glob_to_multiple: {
				expand: true,
				options: {
					sourceMap: true,
				},
				flatten: true,
				cwd: 'app/js/coffee',
				src: ['*.coffee'],
				dest: 'app/js',
				ext: '.js',
			},
		},
		watch: {
			styles: {
				files: ['app/style.css'],
				tasks: ['autoprefixer'],
			},
		},
		concat: {
			// 2. Configuration for concatinating files (JS) goes here.
			dist: {
				src: [
					'app/js/plugins.js',
					'app/js/main.js',
				],
				dest: 'dist/js/main.js',
			},
		},
		uglify: {
			build: {
				src: 'dist/js/main.js',
				dest: 'dist/js/main.min.js',
			},
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'app/img/',
					src: ['app/**/*.{png,jpg,gif}'],
					dest: 'dist/img/',
				}],
			},
		},

		svgmin: {
			options: {
				plugins: [{
					removeViewBox: false,
				}],
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'app/img',
					src: ['app/img/*.svg'],
					dest: 'app/img',
					ext: '.min.svg',
				}],
			},
		},
		watch: {
			options: {
				livereload: 35729,
			},
			coffee: {
				files: ['app/js/coffee/*.coffee'],
				tasks: ['coffee'],
				options: {
					spawn: false,
				},
			},
			sass: {
				files: ['app/css/sass/*.sass'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: false,
				},
			},
		},

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['sass', 'autoprefixer', 'coffee', 'concat', 'uglify', 'imagemin', 'svgmin', 'connect', 'watch']);

};
