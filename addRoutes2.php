<?php
include "config.php";
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
        <li> <a href="inHouse1.php" > In-House Settings </a></li>
        <li> <a href="addRoutes1.html" class="selected">Add Known Routs</a></li>
        <li> <a href="historyLogs.html"> History & Logs</a></li>
    </ul>
</nav>
<section id="intro">
<span id="house"></span><h4> Add new routes </h4>
<p id="sidenotes"> Below you can find the configured routes.<br>
    You can delete, edit and create routes.</p>
</section>

<?php
$query = "SELECT tbl_routes_232.name, tbl_routes_addresses_232.address
FROM tbl_routes_232
INNER JOIN tbl_routes_addresses_232 ON tbl_routes_232.route_id = tbl_routes_addresses_232.route_id;";
$model = mysqli_query($connection, $query);
echo '<a href="#"><div id="edit_or_remove"></a>';
while ($row = mysqli_fetch_assoc($model)) {
    echo '<section><span class="remove"></span><fieldset>' . $row["name"]. " - " .$row["address"]. "";
    echo '</fieldset></section>';
}
echo '</div>';
?>

<a href="newroute.html"><section class="add"></section></a>
</body>
</html>

<?php
mysqli_close($connection);
?>
