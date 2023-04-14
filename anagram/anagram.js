let agmbg = "";
let agmthumb = "";
let agmsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changeagmbg(){
    document.getElementById('agmbgname').innerText = document.getElementById('agmbg').files.item(0).name;
    const file = document.getElementById('agmbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      agmbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changeagmthumb(){
    document.getElementById('agmthumbname').innerText = document.getElementById('agmthumb').files.item(0).name;
    const file = document.getElementById('agmthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      agmthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addagmbgaudio(){
    document.getElementById('agmbgaudioname').innerText = document.getElementById('agmbgaudio').files.item(0).name;
    const file = document.getElementById('agmbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      agmsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

const agm_additembtn = document.getElementById("agm_additembtn");
const agmitems = document.getElementById("agmitems");
const agmDeleteItemBtns = document.querySelectorAll(".agmdeleteitem");
let noOfItemsagm = 3;


agm_additembtn.addEventListener("click", () => {
    // alert("kfreljfgrejlkgjrtklg");

    let newagmitembox = document.createElement("div");
    newagmitembox.classList.add("item");
    newagmitembox.classList.add("agmitem");
    agmitems.appendChild(newagmitembox);

    let newagmitemNo = document.createElement("p");
    newagmitemNo.classList.add("agmItemNo");
    newagmitemNo.innerText = noOfItemsagm + 1;
    newagmitembox.appendChild(newagmitemNo);

    let newagmitemText = document.createElement("input");
    newagmitemText.setAttribute("type", "text");
    newagmitemText.classList.add("upquestion");
    newagmitemText.classList.add("agmupque");
    newagmitemText.setAttribute("name", "agmgameData[]");
    newagmitembox.appendChild(newagmitemText);

    let newagmitemDelete = document.createElement("img");
    newagmitemDelete.src = "../Images/bin.png";
    newagmitemDelete.classList.add("itemimg");
    newagmitemDelete.classList.add("del");
    newagmitemDelete.classList.add("agmdeleteitem");
    newagmitemDelete.title = "Delete this Instruction";
    newagmitemDelete.alt = "delete it";
    newagmitembox.appendChild(newagmitemDelete);
    newagmitemDelete.addEventListener("click", (event) => {
        event.preventDefault();
        const agmIemToRemove = event.target.parentNode;
        agmitems.removeChild(agmIemToRemove);
        updateagmItemNo();
      });

    noOfItemsagm++;
});


agmDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const agmIemToRemove = event.target.parentNode;
    agmitems.removeChild(agmIemToRemove);
    updateagmItemNo();
  });
});
function updateagmItemNo(){
  const agmAllItemNo = document.querySelectorAll(".agmItemNo");
  agmAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsagm--;
};


const agmform = document.querySelector(".agmform");
agmform.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(agmform);
  const agmgameData = Array.from(formData.getAll("agmgameData[]"));

  //manage timeup value
  let istimeup = formData.get("agm_timeup");
  let passtimeup;
  if(istimeup){
    passtimeup = 1;
  }
  else{
    passtimeup = 0;
  }
    
  const data = {
    template_id:7,
    title: formData.get("agm_activitytitle"),
    image_url:agmbg,
    thumbnail_url:agmthumb,
    description: formData.get("agm_activitydesc"),
    sound_url: agmsound,
    time:formData.get("agm_time"),
    timeup:passtimeup,
    lives:formData.get("agm_lives"),
    subject:formData.get("agm_subject"),
    age_group:formData.get("agm_age"),
    age_min:formData.get("agm_agemin"),
    age_max:formData.get("agm-agemax"),
    gameData: agmgameData
  };
  console.log(JSON.stringify(data));
});