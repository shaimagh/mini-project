<?php
include_once("db_connect.php");
$postdata=file_get_contents("php://input");
if (isset($postdata)&& !empty($postdata)){
    $request = json_decode($postdata);
    $gender=trim($request->gender);
    $f_name=trim($request->f_name);
    $l_name=trim($request->l_name);
    $email=mysqli_real_escape_string($con,trim($request->email));
    $password=mysqli_real_escape_string($con,trim($request->password));
    $datenaiss=trim($request->datenaiss);
 
    $minl = 5 ; 

    $fsql="select * from loginregister where email='$email'" ; 
    $fquery = $con->query($fsql) ; 

    $tab = array() ;
    while($item = $fquery->fetch_assoc()){
        $tab[]=$item ;
    }

    if(count($tab)){
        $data = array('message' =>"cet email est déjà utilisé. merci d'en saisir un nouveau !!");
        echo json_encode($data);

    } 
    else if(strlen($password)<$minl) {
        $data = array('message' =>'la longueur du mot de passe doit être de 5 ou plus!!');
        echo json_encode($data);

    }else{ 
    $sql="INSERT INTO loginregister(
        gender,
        f_name,
        l_name,
        email,
        password,
        datenaiss) VALUES ('$gender','$f_name','$l_name','$email','$password','$datenaiss')";
        if($con->query($sql)) {
            $data=array('message'=>'success');
            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data); 
        }
    }
}
?>