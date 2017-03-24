module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    
    //合并文件
    concat:{
       options:{
        stripBanners:true,
        banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
       },
       jsConcat:{
        src:['src/js/jquery-3.1.1.min.js','src/js/slider.js'],
        dest:'src/js/concat/<%=pkg.name %> - <%= pkg.version %>.js'
       }
    },
    //压缩css文件
    cssmin:{
      options:{
        stripBanners:true,
        banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
      },
      build:{
        src:'src/css/style.css',
        dest:'dist/css/<%= pkg.name %> - <%= pkg.version %>.min.css' 
      }
    },
     //压缩合并后的js文件
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/concat/<%=pkg.name %> - <%=pkg.version %>.js',
        dest:'dist/js/<%= pkg.name %> - <%= pkg.version %>.min.js' 
      }
    },
    //watch自动化
    watch:{
      build:{
        files:['src/js/*.js','src/css/style.css'],
        tasks:['concat','cssmin','uglify'],
        options:{spawn:false}
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','cssmin','uglify','watch']);

};