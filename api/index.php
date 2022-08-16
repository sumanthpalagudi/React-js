<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DBConnect.php';
$objDb= new DbConnect;
$conn = $objDb->connect();
$user=json_decode( file_get_contents('php://input'),false);

$method=$_SERVER['REQUEST_METHOD'];
$app_id="mbu122";
$mode="full";
$dept="mech";
switch($method){
    case "POST":
        if($user->StudentName!=""){
        $sql="INSERT INTO phd_personal_det(app_id,mode,dept,name,fname,gender,dob,nationality,religion,address,email,mobile) VALUES(:app_id,:mode,:dept,:name,:fname,:gender,:dob,:nationality,:religion,:address,:email,:mobile)";
        $stmt=$conn->prepare($sql);
        $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
        $stmt->bindParam(':mode', $mode,PDO::PARAM_STR);
        $stmt->bindParam(':dept', $dept,PDO::PARAM_STR);
        $stmt->bindParam(':name', $user->StudentName,PDO::PARAM_STR);
        $stmt->bindParam(':fname', $user->FatherName,PDO::PARAM_STR);
        $stmt->bindParam(':gender', $user->sex,PDO::PARAM_STR);
        $stmt->bindParam(':dob', $user->DOB,PDO::PARAM_STR);
        $stmt->bindParam(':nationality', $user->na,PDO::PARAM_STR);
        $stmt->bindParam(':religion', $user->Religion,PDO::PARAM_STR);
        $stmt->bindParam(':address', $user->Add,PDO::PARAM_STR);
        $stmt->bindParam(':email', $user->Email,PDO::PARAM_STR);
        $stmt->bindParam(':mobile', $user->Phone,PDO::PARAM_STR);
        if($stmt->execute()){
            $response=['status'=>1,'message'=>"Record created successfully"];
        } else{
            $response=['status'=>0,'message'=>"Record not created"];
        }
        
    }
        if(count(get_object_vars($user)!=0){
            $sql="INSERT INTO phd_x_set(app_id, college, board, myp, spec,perc, class) VALUES(:app_id,:college, :board, :myp, :spec ,:perc, :class)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':college', $user->formValues->Sname,PDO::PARAM_STR);
            $stmt->bindParam(':board', $user->formValues->Board,PDO::PARAM_STR);
            $stmt->bindParam(':myp', $user->formValues->myp,PDO::PARAM_STR);
            $stmt->bindParam(':spec', $user->formValues->spec,PDO::PARAM_STR);
            $stmt->bindParam(':perc', $user->formValues->perc,PDO::PARAM_STR);
            $stmt->bindParam(':class', $user->formValues->rank,PDO::PARAM_STR);
            if($stmt->execute()){
                $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
            
        }
        if(count(get_object_vars($user))!=0){
            $sql="INSERT INTO phd_xii_set(app_id, college, board, myp, spec,perc, class) VALUES(:app_id,:college, :board, :myp, :spec ,:perc, :class)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':college', $user->formValues1->Sname,PDO::PARAM_STR);
            $stmt->bindParam(':board', $user->formValues1->Board,PDO::PARAM_STR);
            $stmt->bindParam(':myp', $user->formValues1->myp,PDO::PARAM_STR);
            $stmt->bindParam(':spec', $user->formValues1->spec,PDO::PARAM_STR);
            $stmt->bindParam(':perc', $user->formValues1->perc,PDO::PARAM_STR);
            $stmt->bindParam(':class', $user->formValues1->rank,PDO::PARAM_STR);
            if($stmt->execute()){
                $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
            
        }
        if(count(get_object_vars($user))!=0){
            $sql="INSERT INTO phd_ug_set(app_id, college, board, myp, spec,perc, class) VALUES(:app_id,:college, :board, :myp, :spec ,:perc, :class)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':college', $user->formValues2->Sname,PDO::PARAM_STR);
            $stmt->bindParam(':board', $user->formValues2->Board,PDO::PARAM_STR);
            $stmt->bindParam(':myp', $user->formValues2->myp,PDO::PARAM_STR);
            $stmt->bindParam(':spec', $user->formValues2->spec,PDO::PARAM_STR);
            $stmt->bindParam(':perc', $user->formValues2->perc,PDO::PARAM_STR);
            $stmt->bindParam(':class', $user->formValues2->rank,PDO::PARAM_STR);
            if($stmt->execute()){
                $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
            
        }
        if(count(get_object_vars($user))!=0){
            $sql="INSERT INTO phd_pg_set(app_id, college, board, myp, spec,perc, class) VALUES(:app_id,:college, :board, :myp, :spec ,:perc, :class)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':college', $user->formValues3->Sname,PDO::PARAM_STR);
            $stmt->bindParam(':board', $user->formValues3->Board,PDO::PARAM_STR);
            $stmt->bindParam(':myp', $user->formValues3->myp,PDO::PARAM_STR);
            $stmt->bindParam(':spec', $user->formValues3->spec,PDO::PARAM_STR);
            $stmt->bindParam(':perc', $user->formValues3->perc,PDO::PARAM_STR);
            $stmt->bindParam(':class', $user->formValues3->rank,PDO::PARAM_STR);
            if($stmt->execute()){
                $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
            
        }
        if(count(get_object_vars($user))!=0){
            $sql="INSERT INTO phd_mphil_set(app_id, college, board, myp, spec,perc, class) VALUES(:app_id,:college, :board, :myp, :spec ,:perc, :class)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':college', $user->formValues4->Sname,PDO::PARAM_STR);
            $stmt->bindParam(':board', $user->formValues4->Board,PDO::PARAM_STR);
            $stmt->bindParam(':myp', $user->formValues4->myp,PDO::PARAM_STR);
            $stmt->bindParam(':spec', $user->formValues4->spec,PDO::PARAM_STR);
            $stmt->bindParam(':perc', $user->formValues4->perc,PDO::PARAM_STR);
            $stmt->bindParam(':class', $user->formValues4->rank,PDO::PARAM_STR);
            if($stmt->execute()){
                $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
            
        }
        if(count(get_object_vars($user))!=0){
            $sql="INSERT INTO phd_pro_det(app_id,designation,institution,fmy,tmy,duration) VALUES(:app_id,:designation,:institution,:fmy,:tmy,:duration)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':designation', $user->Designation,PDO::PARAM_STR);
            $stmt->bindParam(':institution', $user->Institution,PDO::PARAM_STR);
            $stmt->bindParam(':fmy', $user->from,PDO::PARAM_STR);
            $stmt->bindParam(':tmy', $user->To,PDO::PARAM_STR);
            $stmt->bindParam(':duration', $user->Years,PDO::PARAM_STR);
            if($stmt->execute()){
                        $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
            
        }
        if(count(get_object_vars($user))!=0){
            $sql="INSERT INTO phd_res_det(app_id,designation,FundingAgency,fmy,tmy,ThemeOfResearch) VALUES(:app_id,:designation,:FundingAgency,:fmy,:tmy,:ThemeOfResearch)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':designation', $user->Designation,PDO::PARAM_STR);
            $stmt->bindParam(':FundingAgency', $user->FundingAgency,PDO::PARAM_STR);
            $stmt->bindParam(':fmy', $user->from,PDO::PARAM_STR);
            $stmt->bindParam(':tmy', $user->To,PDO::PARAM_STR);
            $stmt->bindParam(':ThemeOfResearch', $user->ThemeOfResearch,PDO::PARAM_STR);
            if($stmt->execute()){
                        $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
        }
        if(count(get_object_vars($user))!=0){
            $sql="INSERT INTO phd_awards_det(app_id,awards,other,theme) VALUES(:app_id,:awards,:other,:theme)";
            $stmt=$conn->prepare($sql);
            $stmt->bindParam(':app_id', $app_id,PDO::PARAM_STR);
            $stmt->bindParam(':awards', $user->awards,PDO::PARAM_STR);
            $stmt->bindParam(':other', $user->others,PDO::PARAM_STR);
            $stmt->bindParam(':theme', $user->theme,PDO::PARAM_STR);
            if($stmt->execute()){
                        $response=['status'=>1,'message'=>"Record created successfully"];
            } else{
                $response=['status'=>0,'message'=>"Record not created"];
            }
            break;
        }


}