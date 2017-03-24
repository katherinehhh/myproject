<?php
header("Content-type:application/json;charset=UTF-8");
$link=mysqli_connect('localhost','root','','phpnews','3306');
if($link){
	//修改新闻
	$newstitle=$_POST['newstitle'];
	$newstype=$_POST['newstype'];
	$newsimg=$_POST['newsimg'];
	$newsdate=$_POST['newsdate'];
	$newssouc=$_POST['newssouc'];
	$newsid=$_POST['id'];
	$sql="UPDATE `baidunews` SET `newsdate`= '{$newsdate}',`newstitle`='{$newstitle}',`newssouc`='{$newssouc}',`newstype`='{$newstype}',`newsimg`='{$newsimg}' WHERE `id`={$newsid}";
	mysqli_query($link,'SET NAMES utf8');
    mysqli_query($link,$sql);

   echo json_encode(array('修改信息'=>'修改成功'));


}
 mysqli_close($link);
?>