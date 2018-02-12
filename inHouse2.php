<?php
$dbhost = "182.50.133.55";
$dbuser = "auxstudDB7c";
$dbpass = "auxstud7cDB1!";
$dbname = "auxstudDB7c";

$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="jquery-3.2.1.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="includes/newstyle.css">
    <script src="includes/script.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded|Open+Sans|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Protection Settings</title>
</head>

<body>
<div id="wrapper" >
    <header>
        <section>
            <span id="status"></span>
            <span id="user_welcome"> Hello, <i><b>Moshe</b></i></span>
            <span id="logo"><a href="startWalking.html"></a> </span>
        </section>
    </header>
</div>
<h2> Management </h2>
<nav id="management_menu">
    <ul>
        <li> <a href="inHouse1.php" class="selected"> In-House Settings </a></li>
        <li> <a href="addRoutes1.html">Add Known Routs</a></li>
        <li> <a href="historyLogs.html"> History & Logs</a></li>
    </ul>
</nav>
<section id="intro">
<h4 id="h4noicon"> New Object </h4>
<p id="sidenotes"> Please make sure that the object has a solid background<br>
    and it is standing face on to the camera.</p>
</section>
<section class="responsive">
<section id="object">
   <img src="images/object.png">
</section>
</section>
<section class="responsive">
<section class="select-style">
  <select>
    <option value="" disabled selected>Object Category</option>
    <option value="wife">Wife</option>
    <option value="daughter">Daughter</option>
    <option value="grandma">Grandmother</option>
    <option value="syster">Syster</option>
    <option value="grandma">Mother</option>
    <option value="other">Other</option>
  </select>
</section>
</section>
<section class="responsive">
    <a href="addRoutes1.html" class="save">Save&nbsp</a>
</section>
    <a href="inHouse1.html" class="cancel">Cancel</a>
<footer> 
</footer>
</body>
</html>


<?php
mysqli_close($connection);
?>
