let otbbg = "";
let otbthumb = "";
let otbsound="";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changeotbbg(){
    document.getElementById('otbbgname').innerText = document.getElementById('otbbg').files.item(0).name;
    const file = document.getElementById('otbbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        otbbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changeotbthumb(){
    document.getElementById('otbthumbname').innerText = document.getElementById('otbthumb').files.item(0).name;
    const file = document.getElementById('otbthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        otbthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addotbbgaudio(){
    document.getElementById('otbbgaudioname').innerText = document.getElementById('otbbgaudio').files.item(0).name;
    const file = document.getElementById('otbbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        otbsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

const otbDeleteGameBtns = document.querySelectorAll(".otbgamedel");
for (let i = 0; i < otbDeleteGameBtns.length; i++) {
  otbDeleteGameBtns[i].addEventListener("click", function() {
   document.getElementById("forotbdelgame").style.display = "block";
   document.getElementById("openbox").style.opacity = 0.5;
   document.getElementById("menu").style.opacity = 0.5;
   document.getElementById("nav").style.opacity = 0.5;
   document.getElementById("forotbdelgame").style.opacity = 1;

   document.getElementById("otbdelback").addEventListener("click",function(){
    hideotbGameDelPopup();
   })
   document.getElementById("otbdelGameCancel").addEventListener("click",function(){
    hideotbGameDelPopup();
   })
  })
  document.getElementById("otbdelcnf").addEventListener("click",function(){
    alert("Game Deleted");
  })
};

function hideotbGameDelPopup(){
  document.getElementById("forotbdelgame").style.display = "none";
  document.getElementById("openbox").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}