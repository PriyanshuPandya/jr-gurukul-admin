let fcbg = "";
let fcthumb = "";
let fcsound = "";


function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changefcbg(){
    document.getElementById('fcbgname').innerText = document.getElementById('fcbg').files.item(0).name;
    const file = document.getElementById('fcbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      fcbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changefcthumb(){
    document.getElementById('fcthumbname').innerText = document.getElementById('fcthumb').files.item(0).name;
    const file = document.getElementById('fcthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      fcthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addfcbgaudio(){
    document.getElementById('fcbgaudioname').innerText = document.getElementById('fcbgaudio').files.item(0).name;
    const file = document.getElementById('fcbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      fcsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

const fc_additembtn = document.getElementById("fc_additembtn");
const fcitems = document.getElementById("fcitems");
const fcDeleteItemBtns = document.querySelectorAll(".fcdeleteitem");
let noOfItemsfc = 3;

fc_additembtn.addEventListener("click", () => {
  // const createnewfcitem = document.getElementById("fcitemtocopoy");
  // const newfcGameData = createnewfcitem.cloneNode(true); // copy with events
  // createnewfcitem.parentNode.appendChild(newfcGameData);
  // console.log(newfcGameData.querySelector(".fcItemNo").innerText);

    let newfc = document.createElement("div");
    newfc.classList.add("item");
    newfc.classList.add("fcitem");
    fcitems.appendChild(newfc);

    let newfcitemNo = document.createElement("p");
    newfcitemNo.classList.add("fcItemNo");
    newfcitemNo.innerText = noOfItemsfc + 1;
    newfc.appendChild(newfcitemNo);

    let newfcitembox = document.createElement("span");
    newfcitembox.classList.add("itembox");
    newfcitembox.classList.add("fcgamedata");
    newfc.appendChild(newfcitembox);

    let forfcimg = document.createElement("span");
    forfcimg.classList.add("forimage");
    forfcimg.title = "Upload Instruction Image";
    newfcitembox.appendChild(forfcimg);

    let newfcimglabel = document.createElement("label");
    newfcimglabel.setAttribute("for","itemimage");
    forfcimg.appendChild(newfcimglabel);

    let newfcitemimg = document.createElement("img");
    newfcitemimg.classList.add("itemimg");
    newfcitemimg.src = "../Images/image.png";
    newfcitemimg.alt = "upload image";
    newfcimglabel.appendChild(newfcitemimg);

    let newfcimage = document.createElement("input");
    newfcimage.setAttribute("type","file");
    newfcimage.classList.add("fcquestionImage");
    newfcimage.setAttribute("name","fcgamequeimg[]");
    newfcimage.setAttribute("accept","image/*");
    forfcimg.appendChild(newfcimage);

    let forfcaudio = document.createElement("span");
    forfcaudio.classList.add("foraudio");
    forfcaudio.title = "Upload Instruction Audio";
    newfcitembox.appendChild(forfcaudio);

    let newfcaudioilabel = document.createElement("label");
    newfcaudioilabel.setAttribute("for","itemaudio");
    forfcaudio.appendChild(newfcaudioilabel);

    let newfcitemaudio = document.createElement("img");
    newfcitemaudio.classList.add("itemimg");
    newfcitemaudio.classList.add("upaudio");
    newfcitemaudio.src = "../Images/audioOn.png";
    newfcitemaudio.alt = "upload audio";
    newfcaudioilabel.appendChild(newfcitemaudio);

    let newfcaudio = document.createElement("input");
    newfcaudio.setAttribute("type","file");
    newfcaudio.classList.add("fcquestionAudio");
    newfcaudio.setAttribute("name","fcgamequeaudio[]");
    newfcaudio.setAttribute("accept","audio/*");
    forfcaudio.appendChild(newfcaudio);

    let newfctext = document.createElement("input");
    newfctext.classList.add("upquestion");
    newfctext.classList.add("fcupque");
    newfctext.classList.add("fcquestionText");
    newfctext.setAttribute("type","text");
    newfcitembox.appendChild(newfctext);

    let newfcitemDelete = document.createElement("img");
    newfcitemDelete.src = "../Images/bin.png";
    newfcitemDelete.classList.add("itemimg");
    newfcitemDelete.classList.add("del");
    newfcitemDelete.classList.add("fcdeleteitem");
    newfcitemDelete.title = "Delete this Instruction";
    newfcitemDelete.alt = "delete it";
    newfc.appendChild(newfcitemDelete);
    newfcitemDelete.addEventListener("click", (event) => {
        event.preventDefault();
        const fcItemToRemove = event.target.parentNode;
        fcitems.removeChild(fcItemToRemove);
        updatefcItemNo();
      });

    noOfItemsfc++;
});

fcDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const fcItemToRemove = event.target.parentNode;
    fcitems.removeChild(fcItemToRemove);
    updatefcItemNo();
  });
});
function updatefcItemNo(){
  const fcAllItemNo = document.querySelectorAll(".fcItemNo");
  fcAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsfc--;
};



const fcform = document.querySelector(".fcform");
fcform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("fcform");
    let formData = new FormData(form);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let gameDataFields = document.querySelectorAll(".fcgamedata");

    for (var i = 0; i < gameDataFields.length; i++) {
      var fcgame = {
        questionText: gameDataFields[i].querySelector(".fcquestionText").value,
        questionImage: gameDataFields[i].querySelector(".fcquestionImage").value,
        questionAudio: gameDataFields[i].querySelector(".fcquestionAudio").value
      };
      gameDataArray[i]=fcgame;
    }

    //manage timeup value
    let istimeup = formData.get("fc_timeup");
    let passtimeup;
    if(istimeup){
      passtimeup = 1;
    }
    else{
      passtimeup = 0;
    }

    // Build the final JSON object
    const jsonObject = {
      template_id:10,
        title:formData.get("fc_activitytitle"),
        image_url:fcbg,
        thumbnail_url:fcthumb,
        description:formData.get("fc_activitydesc"),
        sound_url:fcsound,
        time:formData.get("fc_time"),
        timeup:passtimeup,
        lives:formData.get("fc_lives"),
        subject:formData.get("fc_subject"),
        age_group:formData.get("fc_age"),
        age_min:formData.get("fc_agemin"),
        age_max:formData.get("fc_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));
  });