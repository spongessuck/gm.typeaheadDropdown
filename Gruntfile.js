module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			def: {
				src: 'build/gm.typeaheadDropdown.js',
				dest: 'dist/gm.typeaheadDropdown.min.js'
			}
		},

		/*htmlmin: {
			def: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'build/templates/typeaheadDropdown.tpl.html': 'src/templates/typeaheadDropdown.tpl.html'
				}
			}
		},*/

		concat: {
			options: {
				stripBanners: true
			},
			def: {
				src: ['src/gm.typeaheadDropdown.js', 'build/template_cache.js'],
				dest: 'build/gm.typeaheadDropdown.js',
			}
		},

		html2js: {
			options: {
				module:'gm.typeaheadDropdown',
				singleModule:true,
				existingModule:true,
				htmlmin: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				}
			},
			def: {
				src: ['src/templates/*.tpl.html'],
				dest: 'build/template_cache.js'
			},
		},

		watch: {
			scripts: {
				files: 'src/*.js',
    		tasks: ['html2js', 'concat', 'uglify'],
			},
			html: {
				files: 'src/templates/*.html',
    		tasks: ['html2js', 'concat', 'uglify'],
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html2js');

	grunt.registerTask('default', ['html2js', 'concat', 'uglify']);
};