# DigitalClock
![ditgital clock](https://user-images.githubusercontent.com/29798155/115161278-42caa180-a0b6-11eb-9569-9746d3c42fcd.gif)


# Build your own digital clock with JavaScript
## What we want to have

- Display current date
- Display current time
- Increment the time on it's own

## 0.Base design
Make the basic html structure
``` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
</head>
<body>
    <div class="clock-body">
        <div class="inner-body">
            <div class="clock">
            
            </div>
        </div>
    </div>
</body>
</html>
```

Attach CSS
```
<link rel="stylesheet" href="css/digitalclock.css">
```
Attach Javascript file
```
<script src="js/digitalclock.js"></script>
```

## The Styling
Will add a nice font it will center the hero div and make the background fit nicely
``` 
@import url('https://fonts.googleapis.com/css?family=Orbitron');
.clock-body {
    margin: 200px auto;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inner-body{
    width: 30%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #2BC511;
    background-color: black;
    border-radius:12px;
}
.clock{
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    color:#2BC511;
    font-family: 'Orbitron', sans-serif;
}
.clock span {
    padding: 20px;
}
```
