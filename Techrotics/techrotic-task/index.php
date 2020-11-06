
<?php
 include "DbConnect/Dbconnect.php";  

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <!-- If you are using bootstrap locally downloaded into our computer then do the following things to connect to bootstrap.
    1- First, Download bootstrap and jquery files.
    2- Secondly, change all the path/link or define the path to your own files of css and js.  
    That's all done!-->

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <!-- Cusotom CSS: This is custom css that you can add yourself-->
    <link rel="stylesheet" href="/css/custom.css">

    <!-- font awesome link-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/brands.min.css" />
    <!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- jQuery UI library -->
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

<script>

$(function() {
    $("#skill_input").autocomplete({
        source: "scripts/search.php"
    });
});
</script>
    <!-- Title of page-->
    <title>Products</title>


</head>

<body>

    <header>
        <div class="container">
            <nav class="navbar navbar-light bg-light ">
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1F29NfwZC2uNjSZFnXXaxZpXa.png" width="100px"
                    height="30px" class="d-inline-block align-top" alt="logo" loading="lazy">
                <form method="post" class="form-inline" action="scripts/script_search_store.php" >
                    <input name="skill_input" id="skill_input" class="form-control mr-sm-2 search-box" type="text" placeholder="Search for anything"
                        aria-label="Search">
                    
                    <button name="findbtn"  class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>

    </header>

    <section id="category">


        <!-- Default dropright button
            <div class="btn-group dropright">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Electronic Devices
                </button>
                <div class="dropdown-menu"> -->
        <!-- Dropdown menu links -->
        <!-- <ul>
                    <li>item1</li>
                    <li>item2</li>
                </ul>
                </div>
            </div> -->
        <div class="container">
            <h2>Electronic Devices</h2>
            <div class="row">

            <?php
            
            $query="select * from store";
            $result=$con->query($query);

                while($row=mysqli_fetch_array($result))
                {

                

            
            
            ?>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card category-item">
                        <img src="Pictures/<?php echo $row["hardware_name"].".jpg"; ?>" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-text">
                                <?php echo $row["hardware_name"];  ?>

                            </h5>
                            <p>
                                Rs. 190<span> <del>Rs. 200</del></span>
                            </p>

                            <span class="fa fa-star"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span>(1658)</span>

                        </div>
                    </div>
                </div>
               <?php
               
                }
               ?> 
                </div>
            </div>
        </div>
    </section>






















    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <!-- jQuery library -->
 

    <!-- Popper JS -->
    <script src="js/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>

</html>