<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = $_POST['name'];

    echo "Hello " . htmlspecialchars($name). "!";
}
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form1</title>
</head>
<body>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">
        <label for="name">Name: </label>
        <input type="text" name="name" id="name">
        <button type="submit" value="Submit">Submit</button>
    </form>
</body>
</html>