var budget = prompt("Enter your budget" , "low/medium/high")
var operator = prompt("Which operating system do you prefer?" , "Android/IOS")
var camera = prompt("What camera quality do you need?" , "basic/moderate/high")
var life = prompt("How important is battery life to you?" , "short/average/long")
var screen = prompt("What screen size do you prefer?" , "small/medium/large")

document.write("<h1>Based on your preferences, we recommend the following mobile phone:</h1>")

if (budget == "low" && operator == "Android" && camera == "basic" && life == "short" && screen == "small"){
    document.write("<h3>Samsung Galaxy A32</h3>")
    document.write("<h3>Price : $343</h3>")
    document.write("<h3>Operating system :" + operator + "</h3>")
    document.write("<h3>Camera : 4MP</h3>")
    document.write("<h3>Battery life: 13 hours talk time</h3>")
    document.write("<h3>Screen size: 6.5 inches</h3>" + "<br>")
    document.write("<h3>Enjoy your new mobile phone! 🥰</h3>")
}
else if (budget == "medium" && operator == "Android" && camera == "moderate" && life == "average" && screen == "medium"){
    document.write("<h3>Google Pixel 5</h3>")
    document.write("<h3>Price : $400</h3>")
    document.write("<h3>Operating system :" + operator + "</h3>")
    document.write("<h3>Camera : 8MP</h3>")
    document.write("<h3>Battery life: Up to 11 hours talk time</h3>")
    document.write("<h3>Screen size: 6 inches</h3>" + "<br>")
    document.write("<h3>Enjoy your new mobile phone! 🥰</h3>")
}
else if (budget == "high" && operator == "IOS" && camera == "high" && life == "long" && screen == "large"){
    document.write("<h3>iPhone 13 Pro Max</h3>")
    document.write("<h3>Price : $1099</h3>")
    document.write("<h3>Operating system :" + operator + "</h3>")
    document.write("<h3>Camera : Tripple 12MP</h3>")
    document.write("<h3>Battery life: Up to 28 hours talk time</h3>")
    document.write("<h3>Screen size: 6.7 inches</h3>" + "<br>")
    document.write("<h3>Enjoy your new mobile phone! 🥰</h3>")
}
else {
    alert("Please tryagain")
}