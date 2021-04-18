# DigitalClock
![1212](https://user-images.githubusercontent.com/29798155/115163471-c12d4080-a0c2-11eb-87cb-915e6fd4d581.gif)



# Build your own digital clock with JavaScript
## What we want to have

- Display current date
- Display current time
- Increment the time on it's own


## The Javascript
Now here comes the main part. The entire code for the working of the clock is written within the ```tick()``` function.
Inside this function, an object of the ```Date()``` is created which allows you to call year, date, hour, minute, second. 
```
const now = new Date();
```
In our code, this object is used for getting the current hours, minutes and seconds which are stored in different variables.
```
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();
```
The obtained hours, minutes and seconds will be displayed in single digit if less than 10. For example, the current hour will be displayed as 7 instead of 07. To always display the elements of time in two-digit format, a 0 is appended before them whenever they are less than 10
```
<span>${h < 10 ? "0"+h:h}</span>:
<span>${m < 10 ? "0"+m:m}</span>:
<span>${s < 10 ? "0"+s:s}</span>`;
```
Now once our time is ready, let's display it in the div which we made before. This is done by obtaining the div using the document.getElementById method and give our time as the content of the div using the innerHTML property.
```
const clock = document.querySelector('.clock');
const html = `
<span>${h < 10 ? "0"+h:h}</span>:
<span>${m < 10 ? "0"+m:m}</span>:
<span>${s < 10 ? "0"+s:s}</span>`;
clock.innerHTML = html;
```

## Base design
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
