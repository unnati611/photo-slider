let i = 0;
let src = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];

function next() {
  i++;
  if (i >= src.length) {
    i = 0;
    document.getElementById("img").setAttribute("src", src[i]);
  }
  console.log(src[i]);
  document.getElementById("img").setAttribute("src", src[i]);
}
function previous() {
  i--;
  if (i < 0) {
    i = src.length - 1;
    document.getElementById("img").setAttribute("src", src[i]);
  }
  console.log(src[i]);
  document.getElementById("img").setAttribute("src", src[i]);
}
