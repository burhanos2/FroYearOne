const myImage = document.getElementById('myImage');
const thumbnailHolder = document.getElementById('thumbnailHolder');

var image_names = [
  "image_1.jpg",
  "image_2.jpg",
  "image_3.jpg",
  "image_4.jpg",
  "image_5.jpg",
  "image_6.jpg",
  "image_7.jpg",
  "image_8.jpg",
  "image_9.jpg",
  "image_10.jpg",
];

myImage.src = "images/image_1.jpg"

for(let i=0; i<image_names.length; i++) {
  let thumb = new Image();
  thumb.className = "thumb";
  thumb.i = i;
  thumb.src = "thumbnails/" + image_names[i];
  thumbnailHolder.appendChild(thumb);
  thumb.addEventListener('click',()=>{
    myImage.src = "images/"+image_names[thumb.i];
  });
}
