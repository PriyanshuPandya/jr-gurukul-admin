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

async function ftmgetthebase64(element){
  const file = element.files.item(0);
      await fileToBase64(file)
      .then( base64String => {
          element.title = base64String;
      })
      .catch(error => {
        console.error(error);
      });
    }

const ftm_additembtn = document.getElementById("ftm_additembtn");
const ftmitems = document.getElementById("ftmitems");
const ftmDeleteItemBtns = document.querySelectorAll(".ftmdeleteitem");
let noOfItemsftm = 3;
let ftmitemid = 3;

ftm_additembtn.addEventListener("click", () => {
  ftmitemid++;
  const createnewftmitem = document.getElementById("ftmitemtocopy");
  const newftmGameData = createnewftmitem.cloneNode(true); // copy with events
  createnewftmitem.parentNode.appendChild(newftmGameData);
  newftmGameData.querySelector(".ftmItemNo").innerText = noOfItemsftm + 1;
  newftmGameData.querySelector(".forftmquestionImage").setAttribute("for","ftmqueimg"+ftmitemid);
  newftmGameData.querySelector(".ftmquestionImage").setAttribute("id","ftmqueimg"+ftmitemid);
  newftmGameData.querySelector(".forftmquestionAudio").setAttribute("for","ftmqueaudio"+ftmitemid);
  newftmGameData.querySelector(".ftmquestionAudio").setAttribute("id","ftmqueaudio"+ftmitemid);

  newftmGameData.querySelector(".forftmanswerImage").setAttribute("for","ftmansimg"+ftmitemid);
  newftmGameData.querySelector(".ftmanswerImage").setAttribute("id","ftmansimg"+ftmitemid);
  newftmGameData.querySelector(".forftmanswerAudio").setAttribute("for","ftmansaudio"+ftmitemid);
  newftmGameData.querySelector(".ftmanswerAudio").setAttribute("id","ftmansaudio"+ftmitemid);

  newftmGameData.querySelector(".ftmquestionText").value = null;
  newftmGameData.querySelector(".ftmquestionImage").title = null;
  newftmGameData.querySelector(".ftmquestionAudio").title = null;
  newftmGameData.querySelector(".ftmanswerText").value = null;
  newftmGameData.querySelector(".ftmanswerImage").title = null;
  newftmGameData.querySelector(".ftmanswerAudio").title = null;
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
        questionImage: gameDataFields[i].querySelector(".ftmquestionImage")?gameDataFields[i].querySelector(".ftmquestionImage").title:"",
        questionAudio: gameDataFields[i].querySelector(".ftmquestionAudio")?gameDataFields[i].querySelector(".ftmquestionAudio").title:"",
        answerText: gameDataFields[i].querySelector(".ftmanswerText")?gameDataFields[i].querySelector(".ftmanswerText").value:"",
        answerImage: gameDataFields[i].querySelector(".ftmanswerImage")?gameDataFields[i].querySelector(".ftmanswerImage").title:"",
        answerAudio: gameDataFields[i].querySelector(".ftmanswerAudio")?gameDataFields[i].querySelector(".ftmanswerAudio").title:""
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
        // age_group:formData.get("ftm_age"),
        age_min:formData.get("ftm_agemin"),
        age_max:formData.get("ftm_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));

    ftmform.reset();
    document.getElementById("findthematchgames").style.display = "none";
    document.getElementById("findthematch").style.display = "block";
    window.scrollTo(0,0);
    document.getElementById('ftmbgname').innerText = "";
    document.getElementById('ftmthumbname').innerText = "";
    showftmthree();
    showftmSuccessFlashMsg();
  });


  const ftmDeleteGameBtns = document.querySelectorAll(".ftmgamedel");
for (let i = 0; i < ftmDeleteGameBtns.length; i++) {
  ftmDeleteGameBtns[i].addEventListener("click", function() {
   document.getElementById("forftmdelgame").style.display = "block";
   document.getElementById("findthematch").style.opacity = 0.5;
   document.getElementById("menu").style.opacity = 0.5;
   document.getElementById("nav").style.opacity = 0.5;
   document.getElementById("forftmdelgame").style.opacity = 1;

   document.getElementById("ftmdelback").addEventListener("click",function(){
    hideftmGameDelPopup();
   })
   document.getElementById("ftmdelGameCancel").addEventListener("click",function(){
    hideftmGameDelPopup();
   })
  })
  document.getElementById("ftmdelcnf").addEventListener("click",function(){
    alert("Game Deleted");
  })
};

function hideftmGameDelPopup(){
  document.getElementById("forftmdelgame").style.display = "none";
  document.getElementById("findthematch").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}

//for flash msg
function showftmSuccessFlashMsg() {
  const flashMessage = document.createElement("div");
  flashMessage.classList.add("flashsuccess");
  flashMessage.textContent = "Game Added Successfully";
  document.getElementById("ftmflashsuccess").appendChild(flashMessage);
  setTimeout(function() {
    flashMessage.remove();
  }, 1500); // Set the timeout for the message to be displayed (in milliseconds)
}

//for filters json
const ftmfilform = document.querySelector("#ftmfilform");
ftmfilform.addEventListener("submit",(event)=>{
  event.preventDefault();
  const filterData = new FormData(ftmfilform);
  const ftmfilData = Array.from(filterData.getAll("ftmfil"));

  const filData = {
    fil_template_id: 9,
    fil_name:filterData.get("ftm_filname"),
    fil_agemin:filterData.get("ftm_filagemin"),
    fil_agmemax:filterData.get("ftm_filagemax"),
    fil_subject:ftmfilData
  }
  console.log(JSON.stringify(filData));
})

  //function to show only  que on refresh.....
  function showftmthree() {
    let children;
    const noofchild = ftmitems.childElementCount;
    if (noofchild > 3) {
      children = ftmitems.querySelectorAll('.ftmitem');
      for (let i = 3; i < noofchild; i++) {
        ftmitems.removeChild(children[i]);
      }
    }
    emptyfilvalues();
    noOfItemsftm = 3;
  }
  
  function emptyfilvalues(){
    let gameDataFields = document.querySelectorAll(".ftmgamedata");
    for (var i = 0; i < gameDataFields.length; i++) {
        questionImage = gameDataFields[i].querySelector(".ftmquestionImage").title="",
        questionAudio = gameDataFields[i].querySelector(".ftmquestionAudio").title="",
        answerImage = gameDataFields[i].querySelector(".ftmanswerImage").title="",
        answerAudio = gameDataFields[i].querySelector(".ftmanswerAudio").title=""
      };
  }