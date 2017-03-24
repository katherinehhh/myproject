<?php
header("Content-type:application/json;charset=UTF-8");
$link=mysqli_connect('localhost','root','root','phpnews','3306');
if($link){
	$newstitle=$_POST['newstitle'];
	$newstype=$_POST['newstype'];
	$newsimg=$_POST['newsimg'];
	$newsdate=$_POST['newsdate'];
	$newssouc=$_POST['newssouc'];
	$sql="INSERT INTO news(`newsdate`,`newstitle`,`newssouc`,`newstype`,`newsimg`)VALUES('{$newsdate}','{$newstitle}','{$newssouc}','{$newstype}','{$newsimg}') ";
	mysqli_query($link,'SET NAMES utf8');
     mysqli_query($link,$sql);

   echo json_encode(array('success'=>'yes'));


}else{
  	echo json_encode(array('连接信息'=>'连接失败'));
  	}
 mysqli_close($link);
?>