
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

//Huis
ctx.beginPath()
ctx.moveTo(300,100);
ctx.lineTo(200,300);
ctx.lineTo(600,400);
ctx.lineTo(700,200);
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.fillStyle="#FF0000";
ctx.fill();
ctx.stroke();

//shoorsteen
ctx.moveTo(350,100);
ctx.stroke();
ctx.rect(320,80,50,100);
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.fillStyle="#ff0000";
ctx.fill();
ctx.stroke();

ctx.beginPath()
ctx.moveTo(600,400);
ctx.lineTo(700,200);
ctx.lineTo(800,300);
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.fillStyle="#FF0000";
ctx.fill();
ctx.stroke();

ctx.beginPath()
ctx.moveTo(600,400);
ctx.lineTo(600,600);
ctx.lineTo(800,500);
ctx.lineTo(800,300);
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.fillStyle="#663300";
ctx.fill();
ctx.stroke();

ctx.beginPath()
ctx.moveTo(200,300);
ctx.lineTo(200,500);
ctx.lineTo(600,600);
ctx.lineTo(600,400);
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.fillStyle="#663300";
ctx.fill();
ctx.stroke();

//Deur
ctx.beginPath()
ctx.moveTo(680,560);
ctx.lineTo(680,440);
ctx.lineTo(760,400);
ctx.lineTo(760,520);
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.fillStyle="#00ff00";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(700,490,5,0,2*Math.PI);
ctx.fillStyle="#ff3399";
ctx.stroke();
ctx.fill();

//Raam
ctx.beginPath();
ctx.moveTo(450,425);
ctx.lineTo(450,500);
ctx.lineTo(350,475);
ctx.lineTo(350,400);
ctx.closePath()
ctx.lineWidth=2;
ctx.strokeStyle="#000000";
ctx.fillStyle="#0043ff";
ctx.fill();
ctx.stroke();
