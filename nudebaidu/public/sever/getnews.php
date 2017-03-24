<?php
header("Content-type:application/json;charset=UTF-8");

$link=mysqli_connect('localhost','root','root','phpnews','3306');
if ($link)
  {//执行成功的过程
      if($_GET['newstype']){
         $newstype=$_GET['newstype'];
           $sql="SELECT * FROM  news WHERE `newstype`='{$newstype}'";
         mysqli_query($link,'SET NAMES utf8');
          $result = mysqli_query($link,$sql);
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
     }else{
           $sql="SELECT * FROM news";
           mysqli_query($link,'SET NAMES utf8');
           $result = mysqli_query($link,$sql);
           $senddata=array();
           while($row=mysqli_fetch_assoc($result)){
            array_push($senddata, array(
                 'id'=>$row['id'],
                 'newsdate'=>$row['newsdate'],
                 'newstitle'=>$row['newstitle'],
                 'newsimg'=>$row['newsimg'],
                 'newssouc'=>$row['newssouc'],
                 'newstype'=>$row['newstype'],
        ));
     }echo json_encode($senddata);
 }
}else{
  	echo json_encode(array('连接信息'=>'连接失败'));
  	}
  	
 mysqli_close($link);

?>