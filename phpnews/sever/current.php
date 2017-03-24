<?php
header("Content-type:application/json;charset=UTF-8");

$link=mysqli_connect('localhost','root','','phpnews','3306');
if($link){
	$newsid=$_GET['newsid'];
	mysqli_query($link,'SET NAMES utf8');
	$sql="SELECT * FROM baidunews WHERE `id`='{$newsid}'";
	  $result= mysqli_query($link,$sql);
	  $senddata=array();
  	while($row=mysqli_fetch_assoc($result)){
  		array_push($senddata, array(
  			       'id'=>$row['id'],
  			       'newsdate'=>$row['newsdate'],
  			       'newstitle'=>$row['newstitle'],
  			       'newsimg'=>$row['newsimg'],
  			        'newscontent'=>$row['newscontent'],
  			         'newssouc'=>$row['newssouc'],
  			         'newstype'=>$row['newstype'],

  			));
 
  }echo json_encode($senddata);
	 
}
mysqli_close($link);
?>