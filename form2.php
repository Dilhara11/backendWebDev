<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form2</title>
</head>
<body>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method = "GET">
        Name : <input type="text" name = "name">
        <input type="submit" value = "submit">
    </form>

    <?php 
        if($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['name'])){
            $name = $_GET['name'];
            echo "Hello, " . $name;
        }
    ?>
</body>
</html>