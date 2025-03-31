<!-- in here we will do form validation and sanitization -->
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form validation</title>
 </head>
 <body>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="POST">
        Email: <input type="emial" name = "email">
        <input type="submit" value = "Submit">
    </form>

    <?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = $_POST['email'];

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            echo "Invalid Email Format";
        }else {
            echo "Valid Email: " . htmlspecialchars($email);
        }
    }
    ?>
 </body>
 </html>