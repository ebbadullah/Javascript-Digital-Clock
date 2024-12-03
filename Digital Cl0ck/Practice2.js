// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Digital Clock</title>
//     <style>


// body{

//     width: 100vw;
//     height: 100vh;
//     padding: 0;
//     margin: 0;
//     background-color: black;
//     color: snow;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// }
// .container{    
// font-size: 23px;
//     width: 400px;
//     height: 300px;
//     border: 2px solid wheat;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// }

// .box{
//     padding: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

// }
// #hour ,#minu,#secon{
// padding-inline: 20px;
// font-size: 25px;}
// #Date{
// letter-spacing: 4px;}

//     </style>
// </head>
// <body>
    

// <div id="container"  class="container">

//     <div id="box"  class="box">


//         <div id="hour"></div>:
//         <div id="minu"></div>:
//         <div id="secon"></div> 
//         <div id="pm">Pm</div>
//         </div>

//         <div id="date"></div>



// </div>







// <script>



// let hours =  document.getElementById("hour")
// let  minu =  document.getElementById("minu")
// let secon =  document.getElementById("secon")
// let pmam =  document.getElementById("pm")
// let date =  document.getElementById("date")
// let getdate =  new Date() ;

// date.innerHTML = getdate.toDateString();

// function clock (){

// let time = new Date ();

// let hours =  time.getHours();
// let minutes =  time.getMinutes();
// let seconds =  time.getSeconds();


// let  pmam = hours >= 12 ?  'PM' :'AM'
// hours = hours % 12 
// hours = hours ? hours : 12 ;

// minutes = minutes  < 10   ? '0' +  minutes :  minutes 
// seconds = seconds  < 10   ? '0' +  seconds :  seconds 

// hour.innerHTML =  hours
// minu.innerHTML =  minutes
// secon.innerHTML =  seconds

// pm.innerHTML = pmam







// }
// ;


// setInterval(() => {
//   clock();
// }, 1000);
// </script>
   
// </body>
// </html> -->














