<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeepPavlov</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>
<body >

    <div class="back">
        <a class="back__inner" href="index.php">
            Назад
        </a>
    </div>


    <div class="window">
        <span class='window__title'>DeepPavlov</span> 
        <div class="window__chat__scroll">
            <div class="window__chat">
                <div class="window__chat__inner">
                

                    
                </div>

        
            </div>
        </div>


        <form action="deepPavlovApi.php" method="post" class="window__sent">
            <input name="text" class="window__sent__input" placeholder="Введите текст" required>
            <button name="sent" class="window__sent__img">
                <img class='window__sent__imgg' src="sent.png" alt="">
            </button>

        </form>
    </div>
    <script src="code.jquery.com_jquery-3.7.0.min.js"></script>
    <script src="scriptDeep.js"></script>

</body>
</html>