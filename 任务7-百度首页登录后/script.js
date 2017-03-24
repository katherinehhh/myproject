$('document').ready(function() {
    $('#more-pro').on('mouseover', function() {
        $('#more').show();
    });
    $('#more').on('mouseleave', function() {
        $('#more').hide();
    });
    $('input[type=text]:first').focus();

    $('#shop-p1').on('mouseover', function() {
        $('#shop1').show();
    });
    $('#shop-p1').on('mouseout', function() {
        $('#shop1').hide();
    });
    $('#shop-p2').on('mouseover', function() {
        $('#shop2').show();
    });
    $('#shop-p2').on('mouseout', function() {
        $('#shop2').hide();
    });
    $('#shop-p3').on('mouseover', function() {
        $('#shop3').show();
    });
    $('#shop-p3').on('mouseout', function() {
        $('#shop3').hide();
    });
    $('#shop-p4').on('mouseover', function() {
        $('#shop4').show();
    });
    $('#shop-p4').on('mouseout', function() {
        $('#shop4').hide();
    });
    $('#shop-p5').on('mouseover', function() {
        $('#shop5').show();
    });
    $('#shop-p5').on('mouseout', function() {
        $('#shop5').hide();
    });
    $('#shop-p6').on('mouseover', function() {
        $('#shop6').show();
    });
    $('#shop-p6').on('mouseout', function() {
        $('#shop6').hide();
    });
    $('#shop-p7').on('mouseover', function() {
        $('#shop7').show();
    });
    $('#shop-p7').on('mouseout', function() {
        $('#shop7').hide();
    });
    $('#shop-p8').on('mouseover', function() {
        $('#shop8').show();
    });
    $('#shop-p8').on('mouseout', function() {
        $('#shop8').hide();
    });
    $('#shop-p9').on('mouseover', function() {
        $('#shop9').show();
    });
    $('#shop-p9').on('mouseout', function() {
        $('#shop9').hide();
    });
    $('#shop-p10').on('mouseover', function() {
        $('#shop10').show();
    });
    $('#shop-p10').on('mouseout', function() {
        $('#shop10').hide();
    });

    $('#click1').on('click', function() {
        $('.con').hide();
        $('#myconcern').show();
    });
    $('#click2').on('click', function() {
        $('.con').hide();
        $('#recommend').show();
    });
    $('#click3').on('click', function() {
        $('.con').hide();
        $('#nav').show();
    });
    $('#click4').on('click', function() {
        $('.con').hide();
        $('#radio').show();
    });
    $('#click5').on('click', function() {
        $('.con').hide();
        $('#shopping').show();
    });
    $('#t-icon').on('mouseover', function() {
        $('#t-icon').hide();
        $('#top-icon').show();
    });
   
    $('#top-icon').on('mouseleave', function() {
        $('#top-icon').hide();
        $('#t-icon').show();
    });
    $('#skin').on('click',function(){
        $('#tip').show();
        $('ul').show();
    });
    $('#p1').on('click',function(){
         $('body').css({background:'url("picture/60d2f4fe0275d790-fbe7539243950f9f-7f669dbeead0ad667f21be96b5efd843.jpg") no-repeat left top'},
            {backgroundSize:"100% 100%"})
    });
    $('#p2').on('click',function(){
        $('body').css({background:'url("picture/8218020_193654254129_2.jpg") no-repeat '},
        {backgroundSize:"cover"})

    });
    $('#p3').on('click',function(){
        $('body').css({background:'url("picture/2a33919e9b.jpg") no-repeat left top'},{backgroundSize:"100%"})
    });
    $('#p4').on('click',function(){
        $('body').css({background:'url("picture/1357391988250.jpg") no-repeat left top'},{backgroundSize:"100%"})
    });
    $('#p5').on('click',function(){
        $('body').css({background:'url("picture/139-15022PT915-50.jpg") no-repeat left top'},{backgroundSize:"100%"})
    });
    $('#p6').on('click',function(){
        $('body').css({background:'url("picture/1444b15O02220-142S7.jpg") no-repeat left top'},{backgroundSize:"100%"})
    });
    $('#set-nav').on('mouseover',function(){
          $('#setnav').show();
    });
    $('#setnav').on('mouseleave',function(){
          $('#setnav').hide();
    });

    $('#mycount').on('mouseover',function(){
        $('#indivalinfo').show();
    });
    $('#indivalinfo').on('mouseleave',function(){
        $('#indivalinfo').hide();
    });
    
    

   
});
