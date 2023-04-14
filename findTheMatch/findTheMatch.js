let ftmbg = "";
let ftmthumb = "";
let ftmsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changeftmbg(){
    document.getElementById('ftmbgname').innerText = document.getElementById('ftmbg').files.item(0).name;
    const file = document.getElementById('ftmbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      ftmbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changeftmthumb(){
    document.getElementById('ftmthumbname').innerText = document.getElementById('ftmthumb').files.item(0).name;
    const file = document.getElementById('ftmthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      ftmthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addftmbgaudio(){
    document.getElementById('ftmbgaudioname').innerText = document.getElementById('ftmbgaudio').files.item(0).name;
    const file = document.getElementById('ftmbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      ftmsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

const ftm_additembtn = document.getElementById("ftm_additembtn");
const ftmitems = document.getElementById("ftmitems");
const ftmDeleteItemBtns = document.querySelectorAll(".ftmdeleteitem");
let noOfItemsftm = 3;

ftm_additembtn.addEventListener("click", () => {

  const createnewftmitem = document.getElementById("ftmitemtocopy");
  const newftmGameData = createnewftmitem.cloneNode(true); // copy with events
  createnewftmitem.parentNode.appendChild(newftmGameData);
  newftmGameData.querySelector(".ftmItemNo").innerText = noOfItemsftm + 1;
  newftmGameData.querySelector(".ftmquestionText").value = null;
  newftmGameData.querySelector(".ftmquestionImage").value = null;
  newftmGameData.querySelector(".ftmquestionAudio").value = null;
  newftmGameData.querySelector(".ftmanswerText").value = null;
  newftmGameData.querySelector(".ftmanswerImage").value = null;
  newftmGameData.querySelector(".ftmanswerAudio").value = null;
  newftmGameData.querySelector(".forftmdelete").classList.add("ftmdeleteitem");
  newftmGameData.querySelector(".ftmdeleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const ftmItemToRemove = event.target.parentNode.parentNode;
    ftmitems.removeChild(ftmItemToRemove);
    updateftmItemNo();
    });
  noOfItemsftm++;
});

ftmDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const ftmItemToRemove = event.target.parentNode.parentNode;
    ftmitems.removeChild(ftmItemToRemove);
    updateftmItemNo();
    });
});
function updateftmItemNo(){
  const ftmAllItemNo = document.querySelectorAll(".ftmItemNo");
  ftmAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsftm--;
};


const ftmform = document.querySelector(".ftmform");
ftmform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("ftmform");
    let formData = new FormData(form);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let gameDataFields = document.querySelectorAll(".ftmgamedata");

    for (var i = 0; i < gameDataFields.length; i++) {
      var ftmgame = {
        questionText: gameDataFields[i].querySelector(".ftmquestionText")?gameDataFields[i].querySelector(".ftmquestionText").value:"",
        questionImage: gameDataFields[i].querySelector(".ftmquestionImage")?gameDataFields[i].querySelector(".ftmquestionImage").value:"",
        questionAudio: gameDataFields[i].querySelector(".ftmquestionVideo")?gameDataFields[i].querySelector(".ftmquestionVideo").value:"",
        answerText: gameDataFields[i].querySelector(".ftmanswerText")?gameDataFields[i].querySelector(".ftmanswerText").value:"",
        answerImage: gameDataFields[i].querySelector(".ftmanswerImage")?gameDataFields[i].querySelector(".ftmanswerImage").value:"",
        answerAudio: gameDataFields[i].querySelector(".ftmanswerVideo")?gameDataFields[i].querySelector(".ftmanswerVideo").value:""
      };
      gameDataArray[i]=ftmgame;
    }

    //manage timeup value
    let istimeup = formData.get("ftm_timeup");
    let passtimeup;
    if(istimeup){
      passtimeup = 1;
    }
    else{
      passtimeup = 0;
    }

    // Build the final JSON object
    const jsonObject = {
        template_id:9,
        title:formData.get("ftm_activitytitle"),
        image_url:ftmbg,
        thumbnail_url:ftmthumb,
        description:formData.get("ftm_activitydesc"),
        sound_url:ftmsound,
        time:formData.get("ftm_time"),
        timeup:passtimeup,
        lives:formData.get("ftm_lives"),
        subject:formData.get("ftm_subject"),
        age_group:formData.get("ftm_age"),
        age_min:formData.get("ftm_agemin"),
        age_max:formData.get("ftm_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));
  });