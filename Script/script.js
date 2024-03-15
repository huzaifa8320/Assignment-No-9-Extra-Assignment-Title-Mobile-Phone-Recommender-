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










// function recommendPhone(budget, os, camera, battery, screen) {
//     if (os.toLowerCase() === 'android') {
//         if (budget.toLowerCase() === 'low') {
//             if (camera.toLowerCase() === 'basic' && battery.toLowerCase() === 'short' && screen.toLowerCase() === 'small') {
//                 return "Samsung Galaxy A10";
//             } else if (camera.toLowerCase() === 'basic' && battery.toLowerCase() === 'short' && screen.toLowerCase() === 'medium') {
//                 return "Xiaomi Redmi 9A";
//             } else if (camera.toLowerCase() === 'basic' && battery.toLowerCase() === 'short' && screen.toLowerCase() === 'large') {
//                 return "Realme C11";
//             } else {
//                 return "No matching phone found.";
//             }
//         } else if (budget.toLowerCase() === 'medium') {
//             if (camera.toLowerCase() === 'moderate' && battery.toLowerCase() === 'average' && screen.toLowerCase() === 'small') {
//                 return "Google Pixel 4a";
//             } else if (camera.toLowerCase() === 'moderate' && battery.toLowerCase() === 'average' && screen.toLowerCase() === 'medium') {
//                 return "Samsung Galaxy A32";
//             } else if (camera.toLowerCase() === 'moderate' && battery.toLowerCase() === 'average' && screen.toLowerCase() === 'large') {
//                 return "OnePlus Nord 2";
//             } else {
//                 return "No matching phone found.";
//             }
//         } else if (budget.toLowerCase() === 'high') {
//             if (camera.toLowerCase() === 'high' && battery.toLowerCase() === 'long' && screen.toLowerCase() === 'small') {
//                 return "Samsung Galaxy S21 Ultra";
//             } else if (camera.toLowerCase() === 'high' && battery.toLowerCase() === 'long' && screen.toLowerCase() === 'medium') {
//                 return "OnePlus 9 Pro";
//             } else if (camera.toLowerCase() === 'high' && battery.toLowerCase() === 'long' && screen.toLowerCase() === 'large') {
//                 return "Xiaomi Mi 11 Ultra";
//             } else {
//                 return "No matching phone found.";
//             }
//         } else {
//             return "Invalid budget preference.";
//         }
//     } else if (os.toLowerCase() === 'ios') {
//         if (budget.toLowerCase() === 'low') {
//             if (camera.toLowerCase() === 'basic' && battery.toLowerCase() === 'short' && screen.toLowerCase() === 'small') {
//                 return "iPhone SE (2nd generation)";
//             } else if (camera.toLowerCase() === 'basic' && battery.toLowerCase() === 'short' && screen.toLowerCase() === 'medium') {
//                 return "iPhone 7";
//             } else if (camera.toLowerCase() === 'basic' && battery.toLowerCase() === 'short' && screen.toLowerCase() === 'large') {
//                 return "iPhone 8 Plus";
//             } else {
//                 return "No matching phone found.";
//             }
//         } else if (budget.toLowerCase() === 'medium') {
//             if (camera.toLowerCase() === 'moderate' && battery.toLowerCase() === 'average' && screen.toLowerCase() === 'small') {
//                 return "iPhone XR";
//             } else if (camera.toLowerCase() === 'moderate' && battery.toLowerCase() === 'average' && screen.toLowerCase() === 'medium') {
//                 return "iPhone 11";
//             } else if (camera.toLowerCase() === 'moderate' && battery.toLowerCase() === 'average' && screen.toLowerCase() === 'large') {
//                 return "iPhone 12 Mini";
//             } else {
//                 return "No matching phone found.";
//             }
//         } else if (budget.toLowerCase() === 'high') {
//             if (camera.toLowerCase() === 'high' && battery.toLowerCase() === 'long' && screen.toLowerCase() === 'small') {
//                 return "iPhone 12 Pro";
//             } else if (camera.toLowerCase() === 'high' && battery.toLowerCase() === 'long' && screen.toLowerCase() === 'medium') {
//                 return "iPhone 13 Pro";
//             } else if (camera.toLowerCase() === 'high' && battery.toLowerCase() === 'long' && screen.toLowerCase() === 'large') {
//                 return "iPhone 13 Pro Max";
//             } else {
//                 return "No matching phone found.";
//             }
//         } else {
//             return "Invalid budget preference.";
//         }
//     } else {
//         return "Invalid operating system preference.";
//     }
// }

// function main() {
//     alert("Welcome to the Mobile Phone Recommender!");
//     var budget = prompt("Enter your budget preference (low, medium, high): ");
//     var os = prompt("Enter your preferred operating system (Android, iOS): ");
//     var camera = prompt("Enter your preferred camera quality (basic, moderate, high): ");
//     var battery = prompt("Enter your preferred battery life (short, average, long): ");
//     var screen = prompt("Enter your preferred screen size (small, medium, large): ");

//     var recommendation = recommendPhone(budget, os, camera, battery, screen);
//     alert("Based on your preferences, we recommend the following mobile phone:\n" + recommendation);
// }

// main();
