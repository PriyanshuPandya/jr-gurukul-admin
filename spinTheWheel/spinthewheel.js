// let  forimage = document.getElementById('forimage');
// let foraudio = document.getElementById('foraudio');
// let upquestion = document.getElementById('upquestion');
let spinbg = "";
let spinthumb = "";
let spinsound="";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changespinbg(){
    document.getElementById('spinbgname').innerText = document.getElementById('spinbg').files.item(0).name;
    const file = document.getElementById('spinbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      spinbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changespinthumb(){
    document.getElementById('spinthumbname').innerText = document.getElementById('spinthumb').files.item(0).name;
    const file = document.getElementById('spinthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      spinthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addspinbgaudio(){
    document.getElementById('spinbgaudioname').innerText = document.getElementById('spinbgaudio').files.item(0).name;
    const file = document.getElementById('spinbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      spinsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

 const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
     
function readTextFromFile(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      var result = reader.result;
      resolve(result);
    };
    reader.onerror = function() {
      reject(reader.error);
    };
    reader.readAsText(file);
  });
}
const spinthewheel_additembtn = document.getElementById("spinthewheel_additembtn");
const spinitems = document.getElementById("spinitems");
const spinDeleteItemBtns = document.querySelectorAll(".spindeleteitem");
let noOfItemsSpin = 3;


spinthewheel_additembtn.addEventListener("click", () => {
    // alert("kfreljfgrejlkgjrtklg");

    let newspinitembox = document.createElement("div");
    newspinitembox.classList.add("item");
    newspinitembox.classList.add("spinitem");
    spinitems.appendChild(newspinitembox);

    let newspinitemNo = document.createElement("p");
    newspinitemNo.classList.add("spinItemNo");
    newspinitemNo.innerText = noOfItemsSpin + 1;
    newspinitembox.appendChild(newspinitemNo);

    let newspinitemText = document.createElement("input");
    newspinitemText.setAttribute("type", "text");
    newspinitemText.classList.add("upquestion");
    newspinitemText.classList.add("spinupque");
    newspinitemText.setAttribute("name", "spingameData[]");
    // newspinitemText.name("gameData[]");
    newspinitembox.appendChild(newspinitemText);

    let newspinitemDelete = document.createElement("img");
    newspinitemDelete.src = "../Images/bin.png";
    newspinitemDelete.classList.add("itemimg");
    newspinitemDelete.classList.add("del");
    newspinitemDelete.classList.add("spindeleteitem");
    newspinitemDelete.title = "Delete this Instruction";
    newspinitemDelete.alt = "delete it";
    newspinitembox.appendChild(newspinitemDelete);
    newspinitemDelete.addEventListener("click", (event) => {
        event.preventDefault();
        const spinIemToRemove = event.target.parentNode;
        spinitems.removeChild(spinIemToRemove);
        updateSpinItemNo();
      });

    noOfItemsSpin++;
});


spinDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const spinIemToRemove = event.target.parentNode;
    spinitems.removeChild(spinIemToRemove);
    updateSpinItemNo();
  });
});
function updateSpinItemNo(){
  const spinAllItemNo = document.querySelectorAll(".spinItemNo");
  spinAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsSpin--;
};


const spinform = document.querySelector(".spinform");
spinform.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(spinform);
  const spingameData = Array.from(formData.getAll("spingameData[]"));

  //manage timeup value
  let istimeup = formData.get("spinthewheel_timeup");
  let passtimeup;
  if(istimeup){
    passtimeup = 1;
  }
  else{
    passtimeup = 0;
  }
    
  const data = {
    template_id: 1,
    title: formData.get("spinthewheel_activitytitle"),
    image_url:spinbg,
    thumbnail_url:spinthumb,
    description: formData.get("spinthewheel_activitydesc"),
    sound_url:spinsound,
    time:formData.get("spinthewheel_time"),
    timeup:passtimeup,
    lives:formData.get("spinthewheel_lives"),
    subject:formData.get("spinthewheel_subject"),
    age_min:formData.get("spinthewheel_agemin"),
    age_max:formData.get("spinthewheel_agemax"),
    // age_group:formData.get("spinthewheel_age"),
    gameData: spingameData
  };
  console.log(JSON.stringify(data));
});


const spinDeleteGameBtns = document.querySelectorAll(".spingamedel");
for (let i = 0; i < spinDeleteGameBtns.length; i++) {
  spinDeleteGameBtns[i].addEventListener("click", function() {
   document.getElementById("forspindelgame").style.display = "block";
   document.getElementById("spinthewheel").style.opacity = 0.5;
   document.getElementById("menu").style.opacity = 0.5;
   document.getElementById("nav").style.opacity = 0.5;
   document.getElementById("forspindelgame").style.opacity = 1;

   document.getElementById("spindelback").addEventListener("click",function(){
    hidespinGameDelPopup();
   })
   document.getElementById("spindelGameCancel").addEventListener("click",function(){
    hidespinGameDelPopup();
   })
  })
  document.getElementById("spindelcnf").addEventListener("click",function(){
    alert("Game Deleted");
  })
};

function hidespinGameDelPopup(){
  document.getElementById("forspindelgame").style.display = "none";
  document.getElementById("spinthewheel").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}



// for (let i = 0; i < spinDeleteItemBtns.length; i++) {
//   spinDeleteItemBtns[i].addEventListener("click", function() {
//     spinDeleteItemBtns[i].classList.toggle("red");
//   })};