<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .navbar {
            background-color: #4CAF50;
            padding: 10px;
            color: white;
            text-align: center;
        }
        .login-status {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 14px;
            color: #fff;
            background-color: #007bff;
            padding: 5px 10px;
            border-radius: 5px;
            display: none; /* Hidden by default */
        }
        #mainContent {
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <h1>Welcome to the Homepage</h1>
        <h2>ONLY FOR TEST</h2>
    </div>

    <!-- Login status -->
    <div id="loginStatus" class="login-status">已登录</div>

    <!-- Protected content area -->
    <div id="mainContent"></div>

    <!-- External JavaScript -->
    <script src="home.js"></script>
</body>
</html>

