<?php
include  "../DbConnect/Dbconnect.php";
  // Initialize message variable
  $msg = "";

  // If upload button is clicked ...
  if (isset($_POST['upload'])) {
      $hardware_name=$_POST['hardware_name'];
      
      $hardware_des = ( $_POST['hardware_des']);
  	// Get image name
  	$image = $_FILES['image']['name'];
  	// Get text
  	//$image_text = mysqli_real_escape_string($db, $_POST['image_text']);

  	// image file directory
  	$target = "../Pictures/".basename($hardware_name.".jpg");

  	//$sql = "INSERT INTO hardware_store (hardware_name, hardware_des) VALUES ('$image', '$image_text')";
  	// execute query
  	

  	if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
          $msg = "Image uploaded successfully";
          $sql = "INSERT INTO store (hardware_name, hardware_des) VALUES ('$hardware_name', '$hardware_des')";
         
          if($con->query($sql))
          {
              echo "Successfully Data Inserted";
              header('Location: ../index.php');
          }

  	}else{
  		$msg = "Failed to upload image";
  	}
  }
 
?>