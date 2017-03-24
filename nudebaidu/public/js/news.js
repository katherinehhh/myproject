$('document').ready(function() {
    refreshnews('精选');

    $('nav a').click(function(e) {
        e.preventDefault();
        var type = $(this).text();
        refreshnews(type);
    });


});

function refreshnews(type) {
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data: { newstype: type },
        success: function(data) {

            data.forEach(function(item, index, array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsimg = $('<div></div>').addClass('news-img').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsimg);
                var $newscontent = $('<div></div>').addClass('news-content').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newsdate = $('<span></span>').addClass('newsdate').html(item.newsdate).appendTo($p);
                var $newssouc = $('<span></span>').addClass('newssouc').html(item.newssouc).appendTo($p);
            });
        }
    });

}
