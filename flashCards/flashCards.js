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

async function fcgetthebase64(element){
  const file = element.files.item(0);
      await fileToBase64(file)
      .then( base64String => {
          element.title = base64String;
      })
      .catch(error => {
        console.error(error);
      });
    }

const fc_additembtn = document.getElementById("fc_additembtn");
const fcitems = document.getElementById("fcitems");
const fcDeleteItemBtns = document.querySelectorAll(".fcdeleteitem");
let noOfItemsfc = 3;
let fcitemid = 3;

fc_additembtn.addEventListener("click", () => {
  fcitemid++;
  const createnewfcitem = document.getElementById("fcitemtocopoy");
  const newfcGameData = createnewfcitem.cloneNode(true); // copy with events
  createnewfcitem.parentNode.appendChild(newfcGameData);

  newfcGameData.querySelector(".fcItemNo").innerText = noOfItemsfc + 1;
  newfcGameData.querySelector(".forfcquestionImage").setAttribute("for","fcqueimg"+fcitemid);
  newfcGameData.querySelector(".fcquestionImage").setAttribute("id","fcqueimg"+fcitemid);
  newfcGameData.querySelector(".forfcquestionAudio").setAttribute("for","fcqueaudio"+fcitemid);
  newfcGameData.querySelector(".fcquestionAudio").setAttribute("id","fcqueaudio"+fcitemid);

  newfcGameData.querySelector(".fcquestionText").value = null;
  newfcGameData.querySelector(".fcquestionImage").title = null;
  newfcGameData.querySelector(".fcquestionAudio").title = null;

  newfcGameData.querySelector(".forfcdelete").classList.add("fcdeleteitem");
  newfcGameData.querySelector(".fcdeleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const fcItemToRemove = event.target.parentNode;
    fcitems.removeChild(fcItemToRemove);
    updatefcItemNo();
    });
    noOfItemsfc++;
  })

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
        questionText: gameDataFields[i].querySelector(".fcquestionText")?gameDataFields[i].querySelector(".fcquestionText").value:"",
        questionImage: gameDataFields[i].querySelector(".fcquestionImage")?gameDataFields[i].querySelector(".fcquestionImage").title:"",
        questionAudio: gameDataFields[i].querySelector(".fcquestionAudio")?gameDataFields[i].querySelector(".fcquestionAudio").title:"",
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
        age_min:formData.get("fc_agemin"),
        age_max:formData.get("fc_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));

    fcform.reset();
    document.getElementById("flashcardsgames").style.display = "none";
    document.getElementById("flashcards").style.display = "block";
    window.scrollTo(0,0);
    document.getElementById('fcbgname').innerText = "";
    document.getElementById('fcthumbname').innerText = "";
    showfcthree();
    showfcSuccessFlashMsg();
  });


  const fcDeleteGameBtns = document.querySelectorAll(".fcgamedel");
  for (let i = 0; i < fcDeleteGameBtns.length; i++) {
    fcDeleteGameBtns[i].addEventListener("click", function() {
     document.getElementById("forfcdelgame").style.display = "block";
     document.getElementById("flashcards").style.opacity = 0.5;
     document.getElementById("menu").style.opacity = 0.5;
     document.getElementById("nav").style.opacity = 0.5;
     document.getElementById("forfcdelgame").style.opacity = 1;
  
     document.getElementById("fcdelback").addEventListener("click",function(){
      hidefcGameDelPopup();
     })
     document.getElementById("fcdelGameCancel").addEventListener("click",function(){
      hidefcGameDelPopup();
     })
    })
    document.getElementById("fcdelcnf").addEventListener("click",function(){
      alert("Game Deleted");
    })
  };
  
  function hidefcGameDelPopup(){
    document.getElementById("forfcdelgame").style.display = "none";
    document.getElementById("flashcards").style.opacity = 1;
    document.getElementById("menu").style.opacity = 1;
    document.getElementById("nav").style.opacity = 1;
  }

  //for flash msg
function showfcSuccessFlashMsg() {
  const flashMessage = document.createElement("div");
  flashMessage.classList.add("flashsuccess");
  flashMessage.textContent = "Game Added Successfully";
  document.getElementById("fcflashsuccess").appendChild(flashMessage);
  setTimeout(function() {
    flashMessage.remove();
  }, 1500); // Set the timeout for the message to be displayed (in milliseconds)
}

//for filters json
const fcfilform = document.querySelector("#fcfilform");
fcfilform.addEventListener("submit",(event)=>{
event.preventDefault();
const filterData = new FormData(fcfilform);
const fcfilData = Array.from(filterData.getAll("fcfil"));

const filData = {
  fil_template_id: 10,
  fil_name:filterData.get("fc_filname"),
  fil_agemin:filterData.get("fc_filagemin"),
  fil_agmemax:filterData.get("fc_filagemax"),
  fil_subject:fcfilData
}
console.log(JSON.stringify(filData));
})

//function to show only  que on refresh.....
function showfcthree() {
  let children;
  const noofchild = fcitems.childElementCount;
  if (noofchild > 1) {
    children = fcitems.querySelectorAll('.fcitem');
    for (let i = 3; i < noofchild; i++) {
      fcitems.removeChild(children[i]);
    }
  }
  emptyfilvalues();
  noOfItemsfc = 3;
}

function emptyfilvalues(){
  let gameDataFields = document.querySelectorAll(".fcgamedata");
  for (var i = 0; i < gameDataFields.length; i++) {
      questionImage = gameDataFields[i].querySelector(".fcquestionImage").title="",
      questionAudio = gameDataFields[i].querySelector(".fcquestionAudio").title=""
    };
}