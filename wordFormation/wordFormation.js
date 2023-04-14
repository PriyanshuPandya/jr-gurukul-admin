let wfbg = "";
let wfthumb = "";
let wfsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changewfbg(){
    document.getElementById('wfbgname').innerText = document.getElementById('wfbg').files.item(0).name;
    const file = document.getElementById('wfbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      wfbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changewfthumb(){
    document.getElementById('wfthumbname').innerText = document.getElementById('wfthumb').files.item(0).name;
    const file = document.getElementById('wfthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      wfthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addwfbgaudio(){
    document.getElementById('wfbgaudioname').innerText = document.getElementById('wfbgaudio').files.item(0).name;
    const file = document.getElementById('wfbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      wfsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

const wf_additembtn = document.getElementById("wf_additembtn");
const wfcontent = document.getElementById("wfcontent");
const wfDeleteItemBtns = document.querySelectorAll(".wfdeleteitem");
let noOfItemswf = 1;

wf_additembtn.addEventListener("click", () => {

  const createnewwfitem = document.getElementById("wfitemtocopy");
  const newwfGameData = createnewwfitem.cloneNode(true); // copy with events
  createnewwfitem.parentNode.appendChild(newwfGameData);
  newwfGameData.querySelector(".wfItemNo").innerText = noOfItemswf + 1;
  newwfGameData.querySelector(".wfquestionText").value = null;
  newwfGameData.querySelector(".wfquestionImage").value = null;
  newwfGameData.querySelector(".wfactualwords").value = null;
  newwfGameData.querySelector(".wfrandomwords").value = null;
  newwfGameData.querySelector(".forwfdelete").classList.add("wfdeleteitem");
  newwfGameData.querySelector(".wfdeleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const wfItemToRemove = event.target.parentNode.parentNode;
    wfcontent.removeChild(wfItemToRemove);
    updatewfItemNo();
    });
  noOfItemswf++;
});

wfDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const wfItemToRemove = event.target.parentNode.parentNode;
    wfcontent.removeChild(wfItemToRemove);
    updatewfItemNo();
    });
});
function updatewfItemNo(){
  const wfAllItemNo = document.querySelectorAll(".wfItemNo");
  wfAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemswf--;
};


const wfform = document.querySelector(".wfform");
wfform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("wfform");
    let formData = new FormData(form);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let gameDataFields = document.querySelectorAll(".wfgamedata");

    for (var i = 0; i < gameDataFields.length; i++) {
      var wfgame = {
        questionText: gameDataFields[i].querySelector(".wfquestionText")?gameDataFields[i].querySelector(".wfquestionText").value:"",
        questionImage: gameDataFields[i].querySelector(".wfquestionImage")?gameDataFields[i].querySelector(".wfquestionImage").value:"",
        actualword: gameDataFields[i].querySelector(".wfactualwords")?gameDataFields[i].querySelector(".wfactualwords").value:"",
        randomletters: gameDataFields[i].querySelector(".wfrandomwords")?gameDataFields[i].querySelector(".wfactualwords").value:"",
      };
      gameDataArray[i]=wfgame;
    }

    //manage timeup value
    let istimeup = formData.get("wf_timeup");
    let passtimeup;
    if(istimeup){
      passtimeup = 1;
    }
    else{
      passtimeup = 0;
    }

    // Build the final JSON object
    const jsonObject = {
        template_id:5,
        title:formData.get("wf_activitytitle"),
        image_url:wfbg,
        thumbnail_url:wfthumb,
        description:formData.get("wf_activitydesc"),
        sound_url:wfsound,
        time:formData.get("wf_time"),
        timeup:passtimeup,
        lives:formData.get("wf_lives"),
        subject:formData.get("wf_subject"),
        age_group:formData.get("wf_age"),
        age_min:formData.get("wf_agemin"),
        age_max:formData.get("wf_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));
  });