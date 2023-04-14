let unjbbg = "";
let unjbthumb = "";
let unjbsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changeunjbbg(){
    document.getElementById('unjbbgname').innerText = document.getElementById('unjbbg').files.item(0).name;
    const file = document.getElementById('unjbbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      unjbbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changeunjbthumb(){
    document.getElementById('unjbthumbname').innerText = document.getElementById('unjbthumb').files.item(0).name;
    const file = document.getElementById('unjbthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      unjbthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addunjbbgaudio(){
    document.getElementById('unjbbgaudioname').innerText = document.getElementById('unjbbgaudio').files.item(0).name;
    const file = document.getElementById('unjbbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      unjbsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

const unjb_additembtn = document.getElementById("unjb_additembtn");
const unjbitems = document.getElementById("unjbitems");
const unjbDeleteItemBtns = document.querySelectorAll(".unjbdeleteitem");
let noOfItemsunjb = 3;


unjb_additembtn.addEventListener("click", () => {
    // alert("kfreljfgrejlkgjrtklg");

    let newunjbitembox = document.createElement("div");
    newunjbitembox.classList.add("item");
    newunjbitembox.classList.add("unjbitem");
    unjbitems.appendChild(newunjbitembox);

    let newunjbitemNo = document.createElement("p");
    newunjbitemNo.classList.add("unjbItemNo");
    newunjbitemNo.innerText = noOfItemsunjb + 1;
    newunjbitembox.appendChild(newunjbitemNo);

    let newunjbitemText = document.createElement("input");
    newunjbitemText.setAttribute("type", "text");
    newunjbitemText.classList.add("upquestion");
    newunjbitemText.classList.add("unjbupque");
    newunjbitemText.setAttribute("name", "unjbgameData[]");
    // newunjbitemText.name("gameData[]");
    newunjbitembox.appendChild(newunjbitemText);

    let newunjbitemDelete = document.createElement("img");
    newunjbitemDelete.src = "../Images/bin.png";
    newunjbitemDelete.classList.add("itemimg");
    newunjbitemDelete.classList.add("del");
    newunjbitemDelete.classList.add("unjbdeleteitem");
    newunjbitemDelete.title = "Delete this Instruction";
    newunjbitemDelete.alt = "delete it";
    newunjbitembox.appendChild(newunjbitemDelete);
    newunjbitemDelete.addEventListener("click", (event) => {
        event.preventDefault();
        const unjbIemToRemove = event.target.parentNode;
        unjbitems.removeChild(unjbIemToRemove);
        updateunjbItemNo();
      });

    noOfItemsunjb++;
});


unjbDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const unjbIemToRemove = event.target.parentNode;
    unjbitems.removeChild(unjbIemToRemove);
    updateunjbItemNo();
  });
});
function updateunjbItemNo(){
  const unjbAllItemNo = document.querySelectorAll(".unjbItemNo");
  unjbAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
    console.log("rkjfenmfg")
  });
  noOfItemsunjb--;
};


const unjbform = document.querySelector(".unjbform");
unjbform.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(unjbform);
  const unjbgameData = Array.from(formData.getAll("unjbgameData[]"));

  //manage timeup value
  let istimeup = formData.get("unjb_timeup");
  let passtimeup;
  if(istimeup){
    passtimeup = 1;
  }
  else{
    passtimeup = 0;
  }
    
  const data = {
    template_id:11,
    title: formData.get("unjb_activitytitle"),
    image_url:unjbbg,
    thumbnail_url:unjbthumb,
    description: formData.get("unjb_activitydesc"),
    sound_url:unjbsound,
    time:formData.get("unjb_time"),
    //timeup:formData.get("unjbthewheel_timeup"),
    timeup:passtimeup,
    lives:formData.get("unjb_lives"),
    subject:formData.get("unjb_subject"),
    age_group:formData.get("unjb_age"),
    age_min:formData.get("unjb_agemin"),
    age_max:formData.get("unjb_agemax"),
    gameData: unjbgameData
  };
  console.log(JSON.stringify(data));
});