<html>

<head>


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
</head>


<body>

<form method="post " action="scripts/script_search_store.php">
    <label>Your Skills:</label>
    <input type="text" name="skill_input" id="skill_input"/>
    <input type="submit" name="submit" value="SUBMIT"/>
</form>


</body>

</html>