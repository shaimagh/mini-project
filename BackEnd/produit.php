<?php
include_once("db_connect.php");
$output=array();
$query="select * from produit";
$results=$con->query($query);
$data=[];
while($item=$results->fetch_assoc()){
    $data[]=$item;
}
if(count($data)>0){
    $output['msg']='success';
    $output['data']=$data;
}else{
    $output['msg']='failed';
}

echo json_encode($output);
?>