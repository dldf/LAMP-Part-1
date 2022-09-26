<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Listing</title>
</head>
<body>
    <h1>Added</h1>

<!-- 
Next: we now have to set up for accepting the data sent from the form.
The form elements are going to need 'name' attributes.
-->    

    <?php
        $firstname = $_GET['first'];
        echo "<p><strong>$firstname  </strong>has been added.</p>"
    ?>

</body>
</html>
