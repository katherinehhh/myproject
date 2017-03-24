//当打开后台管理界面时清空table
$('documnet').ready(function() {
    var $newsTable = $('#newstable tbody');
    //刷新页面
    refreshNews();
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        //输入判断
        if ($('#newstitle').val() === "" || $('#newstype').val() === "" || $('#newssoue').val() === "" || $('#newsimg').val() === "" || $('#newsdate').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newstype').val() === "") {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            }
            if ($('#newsoucc').val() === "") {
                $('#newsoucc').parent().addClass('has-error');
            } else {
                $('#newssouc').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newsdate').val() === "") {
                $('#newsdate').parent().addClass('has-error');
            } else {
                $('#newsdate').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                    newstitle: $('#newstitle').val(),
                    newstype: $('#newstype').val(),
                    newsimg: $('#newsimg').val(),
                    newsdate: $('#newsdate').val(),
                    newssouc: $('#newssouc').val()
                }
                //提交添加的新闻
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                    //刷新页面
                    refreshNews();

                }
            });
        }
    });



    //删除新闻的功能
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleModal').modal('show');
        deleteId = ($(this).parent().prevAll().eq(4).html());
    });
    $('#deleModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');
                    console.log(data);
                    $('#deleModal').modal('hide');
                    refreshNews();

                }
            });
        }
    });
    //修改新闻
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(4).html();
        $.ajax({
            url: '/admin/current',
            type: 'get',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssouc').val(data[0].newssouc);
                var utime = data[0].newsdate.split('T')[0];
                $('#unewsdate').val(utime);
            }
        });
    });
    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url: '/admin/update',
            type: 'post',
            data: {
                newstitle: $('#unewstitle').val(),
                newstype: $('#unewstype').val(),
                newsimg: $('#unewsimg').val(),
                newsdate: $('#unewsdate').val(),
                newssouc: $('#unewssouc').val(),
                id: updateId
            },
            success: function(data) {
                console.log(data);
                $('#updateModal').modal('hide');
                refreshNews();
            }

        });
    });
    //刷新页面，载入数据
    function refreshNews() {
      $newsTable.empty();
        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            datatype: 'json',
            success: function(data) {
                console.log(data);
                data.forEach(function(item, index, array){
                    console.log(item.id);

                    
                    var $newsid = $('<td>').html(item.id);
                    var $newstype = $('<td>').html(item.newstype);
                    var $newsimg = $('<td>').html(item.newsimg);
                    var $newstitle = $('<td>').html(item.newstitle);
                    var $newssouc = $('<td>').html(item.newssouc);
                    var $newsdate = $('<td>').html(item.newsdate);
                    var $newstd = $('<td>');
                    var $newsbtn = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndele = $('<button>').addClass('btn btn-xs btn-danger').html('删除');
                    $newstd.append($newsbtn, $btndele);
                    var $tRow = $('<tr>');
                    $tRow.append($newsid, $newstype, $newsimg, $newssouc, $newsdate, $newstd);
                    $newsTable.append($tRow);
                });
            }
        });
    }

});
