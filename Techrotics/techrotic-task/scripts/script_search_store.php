<?php

include  "../DbConnect/Dbconnect.php";

    
   $hardware_name=$_GET['term'];  
   
$query="SELECT * FROM store WHERE hardware_name like    '%".$hardware_name."%'" ;
$result=$con->query($query);
echo $hardware_name;

$skillData = array(); 
if($result->num_rows > 0){ 
 
    while($row=mysqli_fetch_array($result))
    {
        $data['id'] = $row['id']; 
        $data['value'] = $row['hardware_name']; 
        array_push($skillData, $data); 
    } 

}
 
// Return results as json encoded array 
echo json_encode($skillData); 

    




?>