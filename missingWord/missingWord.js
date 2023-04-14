let mwbg = "";
let mwthumb = "";
let mwsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changemwbg(){
    document.getElementById('mwbgname').innerText = document.getElementById('mwbg').files.item(0).name;
    const file = document.getElementById('mwbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      mwbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changemwthumb(){
    document.getElementById('mwthumbname').innerText = document.getElementById('mwthumb').files.item(0).name;
    const file = document.getElementById('mwthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      mwthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addmwbgaudio(){
    document.getElementById('mwbgaudioname').innerText = document.getElementById('mwbgaudio').files.item(0).name;
    const file = document.getElementById('mwbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      mwsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

const mw_additembtn = document.getElementById("mw_additembtn");
const mwcontent = document.getElementById("mwcontent");
const mwDeleteItemBtns = document.querySelectorAll(".mwdeleteitem");
let noOfItemsmw = 1;

mw_additembtn.addEventListener("click", () => {

  const createnewmwitem = document.getElementById("mwitemtocopy");
  const newmwGameData = createnewmwitem.cloneNode(true); // copy with events
  createnewmwitem.parentNode.appendChild(newmwGameData);
  newmwGameData.querySelector(".mwItemNo").innerText = noOfItemsmw + 1;
  newmwGameData.querySelector(".mwquestionText").value = null;
  newmwGameData.querySelector(".mwquestionImage").value = null;
  newmwGameData.querySelector(".mwquestionAudio").value = null;
  newmwGameData.querySelector(".mwanswer1Text").value = null;
  newmwGameData.querySelector(".mwanswer1Image").value = null;
  newmwGameData.querySelector(".mwanswer1Audio").value = null;
  newmwGameData.querySelector(".mwanswer2Text").value = null;
  newmwGameData.querySelector(".mwanswer2Image").value = null;
  newmwGameData.querySelector(".mwanswer2Audio").value = null;
  newmwGameData.querySelector(".formwdelete").classList.add("mwdeleteitem");
  newmwGameData.querySelector(".mwdeleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const mwItemToRemove = event.target.parentNode.parentNode.parentNode;
    mwcontent.removeChild(mwItemToRemove);
    updatemwItemNo();
    });
  noOfItemsmw++;
});

mwDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const mwItemToRemove = event.target.parentNode.parentNode;
    mwcontent.removeChild(mwItemToRemove);
    updatemwItemNo();
    });
});
function updatemwItemNo(){
  const mwAllItemNo = document.querySelectorAll(".mwItemNo");
  mwAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsmw--;
};


const mwform = document.querySelector(".mwform");
mwform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("mwform");
    let formData = new FormData(form);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let gameDataFields = document.querySelectorAll(".mwitem");

    for (var i = 0; i < gameDataFields.length; i++) {
      

      let mwans1value = gameDataFields[i].querySelector(".mwischecked1").checked?"true":"false";
      let mwans2value = gameDataFields[i].querySelector(".mwischecked2").checked?"true":"false";
      var mwgame = {

        questionText: gameDataFields[i].querySelector(".mwquestionText")?gameDataFields[i].querySelector(".mwquestionText").value:"",
        questionImage: gameDataFields[i].querySelector(".mwquestionImage")?gameDataFields[i].querySelector(".mwquestionImage").value:"",
        questionAudio: gameDataFields[i].querySelector(".mwquestionAudio")?gameDataFields[i].querySelector(".mwquestionAudio").value:"",
        answer1Text: gameDataFields[i].querySelector(".mwanswer1Text")?gameDataFields[i].querySelector(".mwanswer1Text").value:"",
        answer1Image: gameDataFields[i].querySelector(".mwanswer1Image")?gameDataFields[i].querySelector(".mwanswer1Image").value:"",
        answer1Audio: gameDataFields[i].querySelector(".mwanswer1Audio")?gameDataFields[i].querySelector(".mwanswer1Audio").value:"",
        ischecked1: mwans1value,
        answer2Text: gameDataFields[i].querySelector(".mwanswer2Text")?gameDataFields[i].querySelector(".mwanswer2Text").value:"",
        answer2Image: gameDataFields[i].querySelector(".mwanswer2Image")?gameDataFields[i].querySelector(".mwanswer2Image").value:"",
        answer2Audio: gameDataFields[i].querySelector(".mwanswer2Audio")?gameDataFields[i].querySelector(".mwanswer2Audio").value:"",
        ischecked2: mwans2value,
      };
      gameDataArray[i]=mwgame;
    }

    //manage timeup value
    let istimeup = formData.get("mw_timeup");
    let passtimeup;
    if(istimeup){
      passtimeup = 1;
    }
    else{
      passtimeup = 0;
    }

    // Build the final JSON object
    const jsonObject = {
        template_id:6,
        title:formData.get("mw_activitytitle"),
        image_url:mwbg,
        thumbnail_url:mwthumb,
        description:formData.get("mw_activitydesc"),
        sound_url:mwsound,
        time:formData.get("mw_time"),
        timeup:passtimeup,
        lives:formData.get("mw_lives"),
        subject:formData.get("mw_subject"),
        age_group:formData.get("mw_age"),
        age_min:formData.get("mw_agemin"),
        age_max:formData.get("mw_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));
  });