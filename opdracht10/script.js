const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "rgba(0,255,50,50)"; //Red Green Blue Alpha, Aplha means opacity.
context.fillStyle = "rgba(255,0,255,40)";  //^^^^^
context.moveTo(100,100);
context.lineTo(500,300);
context.lineTo(200,500);
context.closePath();

context.stroke();
context.fill();


context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "rgba(0,255,50,50)"; //Red Green Blue Alpha, Aplha means opacity.
context.fillStyle = "rgba(255,0,255,40)";  //^^^^^
context.arc(100,100,100,0,2*Math.PI); // x, y, radius, begin, end
context.closePath();

context.stroke();
context.fill();
