<?php
include_once("db_connect.php");
$postdata=file_get_contents("php://input");

$tab = array() ; 
if (isset($postdata)&& !empty($postdata)){
    $request = json_decode($postdata);
    $email=mysqli_real_escape_string($con,trim($request->email));
    $password=mysqli_real_escape_string($con,trim($request->password));
 
    $query = "select * from loginregister where email='$email' and password='$password'";
    $sql = $con->query($query);
    while($item = $sql->fetch_assoc()){
        $tab[] = $item;
    }

        if(count($tab)> 0) {
            $data=array('message'=>'success' , 'data'=>$tab);

            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data); 
        }

}
?>