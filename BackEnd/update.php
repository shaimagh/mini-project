<?php
include_once("db_connect.php");
$postdata=file_get_contents("php://input");
if (isset($postdata)&& !empty($postdata)){
    $request = json_decode($postdata);
    $idClient=trim($request->idClient);
    $gender=trim($request->gender);
    $f_name=trim($request->f_name);
    $l_name=trim($request->l_name);
    $email=mysqli_real_escape_string($con,trim($request->email));
    $password=mysqli_real_escape_string($con,trim($request->password));
    $datenaiss=trim($request->datenaiss);

    if($gender==''||$f_name==''||$l_name==''||$email==''||$password==''||$datenaiss==''){
        $data=array('message'=>'tous les champs sont obligatoires ');
        echo json_encode($data);
    }else{

    $query = "update loginregister set gender='$gender' , f_name='$f_name',l_name='$l_name', email='$email', password='$password',datenaiss='$datenaiss' WHERE idClient='$idClient';";
    $sql = $con->query($query);

        if($sql) {
            $data=array('message'=>'Mis à jour avec succés');
            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data); 
        }
    }
}
?>