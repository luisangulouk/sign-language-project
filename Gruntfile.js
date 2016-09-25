module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        //name of the plugin 
        cssmin:{
            combine:{
                files:{
                    'public_html/css/main.css':['public_html/css/button.css','public_html/css/content.css']
                }
            }
        },
        uglify:{
            dist:{
                files:{
                    'public_html/script/app-pack.min.js':['public_html/script/subjecttree.js','public_html/script/syscommon.js']
                }
            }
        }
    });
    
    //load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //do the task
    grunt.registerTask('default',['cssmin','uglify']);
};
