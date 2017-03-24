<?php
header("Content-type:application/json;charset=UTF-8");

$link=mysqli_connect('localhost','root','root','phpnews','3306');
if($link){
	$newsid= $_POST['newsid'];
	mysqli_query($link,'SET NAMES utf8');
	$sql="DELETE FROM news WHERE `news`.`id`={$newsid}";
	mysqli_query($link,$sql);
	 echo json_encode(array('删除状态'=>'成功'));
}

mysqli_close($link);
?>