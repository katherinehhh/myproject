<?php
header("Content-type:application/json;charset=UTF-8");
$link=mysqli_connect('localhost','root','','phpnews','3306');
if($link){
	$newsid=$_POST['newsid'];
	$newstitle=$_POST['newstitle'];
	$newstype=$_POST['newstype'];
	$newsimg=$_POST['newsimg'];
	$newsdate=$_POST['newsdate'];
	$newssouc=$_POST['newssouc'];
	$sql="INSERT INTO baidunews( `id`, `newsdate`,`newstitle`,`newsimg`,`newscontent`,`newssouc`,`newstype`)VALUES('{$newsid}','{$newsdate}','{$newstitle}','{$newsimg}',' ','{$newssouc}','{$newstype}') ";
	mysqli_query($link,'SET NAMES utf8');
     mysqli_query($link,$sql);

   echo json_encode(array('success'=>'yes'));


}else{
  	echo json_encode(array('连接信息'=>'连接失败'));
  	}
 mysqli_close($link);
?>