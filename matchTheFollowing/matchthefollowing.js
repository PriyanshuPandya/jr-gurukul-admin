let mtfbg = "";
let mtfthumb = "";
let mtfsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changemtfbg(){
  document.getElementById('mtfbgname').innerText = document.getElementById('mtfbg').files.item(0).name;
  const file = document.getElementById('mtfbg').files.item(0);
  await fileToBase64(file)
  .then( base64String => {
    mtfbg = base64String;
  })
  .catch(error => {
    console.error(error);
  });
}

async function changemtfthumb(){
    document.getElementById('mtfthumbname').innerText = document.getElementById('mtfthumb').files.item(0).name;
    const file = document.getElementById('mtfthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      mtfthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addmtfbgaudio(){
    document.getElementById('mtfbgaudioname').innerText = document.getElementById('mtfbgaudio').files.item(0).name;
    const file = document
    .getElementById('mtfbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      mtfsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}


const mtf_additembtn = document.getElementById("mtf_additembtn");
const mtfitems = document.getElementById("mtfitems");
const mtfDeleteItemBtns = document.querySelectorAll(".mtfdeleteitem");
let noOfItemsmtf = 3;
let mtfitemid = 3;

mtf_additembtn.addEventListener("click", () => {
  mtfitemid++;
  const createnewmtfitem = document.getElementById("mtfitemtocopy");
  const newmtfGameData = createnewmtfitem.cloneNode(true); // copy with events
  createnewmtfitem.parentNode.appendChild(newmtfGameData);
  newmtfGameData.querySelector(".mtfItemNo").innerText = noOfItemsmtf + 1;
  newmtfGameData.querySelector(".formtfquestionImage").setAttribute("for","mtfqueimg"+mtfitemid);
  newmtfGameData.querySelector(".mtfquestionImage").setAttribute("id","mtfqueimg"+mtfitemid);
  newmtfGameData.querySelector(".formtfanswerImage").setAttribute("for","mtfansimg"+mtfitemid);
  newmtfGameData.querySelector(".mtfanswerImage").setAttribute("id","mtfansimg"+mtfitemid);
  newmtfGameData.querySelector(".mtfquestionText").value = "";
  newmtfGameData.querySelector(".mtfquestionImage").title = "";
  newmtfGameData.querySelector(".mtfanswerText").value = "";
  newmtfGameData.querySelector(".mtfanswerImage").title = "";
  newmtfGameData.querySelector(".formtfdelete").classList.add("mtfdeleteitem");
  newmtfGameData.querySelector(".mtfdeleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const mtfItemToRemove = event.target.parentNode.parentNode;
    mtfitems.removeChild(mtfItemToRemove);
    updatemtfItemNo();
    });
  noOfItemsmtf++;
});

mtfDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const mtfItemToRemove = event.target.parentNode.parentNode;
    mtfitems.removeChild(mtfItemToRemove);
    updatemtfItemNo();
    });
});
function updatemtfItemNo(){
  const mtfAllItemNo = document.querySelectorAll(".mtfItemNo");
  mtfAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsmtf--;
};


const mtfform = document.querySelector(".mtfform");
mtfform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("mtfform");
    let formData = new FormData(form);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let gameDataFields = document.querySelectorAll(".mtfgamedata");

    for (var i = 0; i < gameDataFields.length; i++) {
      var mtfgame = {
        questionText: gameDataFields[i].querySelector(".mtfquestionText")?gameDataFields[i].querySelector(".mtfquestionText").value:"",
        questionImage: gameDataFields[i].querySelector(".mtfquestionImage")?gameDataFields[i].querySelector(".mtfquestionImage").title:"",
        answerText: gameDataFields[i].querySelector(".mtfanswerText")?gameDataFields[i].querySelector(".mtfanswerText").value:"",
        answerImage: gameDataFields[i].querySelector(".mtfanswerImage")?gameDataFields[i].querySelector(".mtfanswerImage").title:""
      };
      gameDataArray[i]=mtfgame;
    }

    //manage timeup value
    let istimeup = formData.get("mtf_timeup");
    let passtimeup;
    if(istimeup){
      passtimeup = 1;
    }
    else{
      passtimeup = 0;
    }

    // Build the final JSON object
    const jsonObject = {
        template_id:3,
        title:formData.get("mtf_activitytitle"),
        image_url:mtfbg,
        thumbnail_url:mtfthumb,
        description:formData.get("mtf_activitydesc"),
        sound_url:mtfsound,
        time:formData.get("mtf_time"),
        timeup:passtimeup,
        lives:formData.get("mtf_lives"),
        subject:formData.get("mtf_subject"),
        age_min:formData.get("mtf_agemin"),
        age_max:formData.get("mtf_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));

    mtfform.reset();
    document.getElementById("matchthefollowinggames").style.display = "none";
    document.getElementById('mtfbgname').innerText = "";
    document.getElementById('mtfthumbname').innerText = "";
    showthreeitems();
    document.getElementById("matchthefollowing").style.display = "block";
    window.scrollTo(0,0);
    showmtfSuccessFlashMsg();
  });

  const mtfDeleteGameBtns = document.querySelectorAll(".mtfgamedel");
for (let i = 0; i < mtfDeleteGameBtns.length; i++) {
  mtfDeleteGameBtns[i].addEventListener("click", function() {
   document.getElementById("formtfdelgame").style.display = "block";
   document.getElementById("matchthefollowing").style.opacity = 0.5;
   document.getElementById("menu").style.opacity = 0.5;
   document.getElementById("nav").style.opacity = 0.5;
   document.getElementById("formtfdelgame").style.opacity = 1;

   document.getElementById("mtfdelback").addEventListener("click",function(){
    hidemtfGameDelPopup();
   })
   document.getElementById("mtfdelGameCancel").addEventListener("click",function(){
    hidemtfGameDelPopup();
   })
  })
  document.getElementById("mtfdelcnf").addEventListener("click",function(){
    alert("Game Deleted");
  })
};

function hidemtfGameDelPopup(){
  document.getElementById("formtfdelgame").style.display = "none";
  document.getElementById("matchthefollowing").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}

  //for flash msg
  function showmtfSuccessFlashMsg() {
    const flashMessage = document.createElement("div");
    flashMessage.classList.add("flashsuccess");
    flashMessage.textContent = "Game Added Successfully";
    document.getElementById("mtfflashsuccess").appendChild(flashMessage);
    setTimeout(function() {
      flashMessage.remove();
    }, 1500); // Set the timeout for the message to be displayed (in milliseconds)
  }

  //for filters json
const mtffilform = document.querySelector("#mtffilform");
mtffilform.addEventListener("submit",(event)=>{
  event.preventDefault();
  const filterData = new FormData(mtffilform);
  const mtffilData = Array.from(filterData.getAll("mtffil"));

  const filData = {
    fil_template_id: 3,
    fil_name:filterData.get("mtf_filname"),
    fil_agemin:filterData.get("mtf_filagemin"),
    fil_agmemax:filterData.get("mtf_filagemax"),
    fil_subject:mtffilData
  }
  console.log(JSON.stringify(filData));
})

async function mtfgetthebase64(element){
const file = element.files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        element.title = base64String;
    })
    .catch(error => {
      console.error(error);
    });
  }


  //function to show only 3 que on refresh.....
function showthreeitems() {
  let children;
  const noofchild = mtfitems.childElementCount;
  if (noofchild > 3) {
    children = mtfitems.querySelectorAll('.mtfitem');
    for (let i = 3; i < noofchild; i++) {
      mtfitems.removeChild(children[i]);
    }
  }
  emptyfilvalues();
}

function emptyfilvalues(){
  let gameDataFields = document.querySelectorAll(".mtfgamedata");
  for (var i = 0; i < gameDataFields.length; i++) {
      questionImage = gameDataFields[i].querySelector(".mtfquestionImage").title="",
      answerImage =  gameDataFields[i].querySelector(".mtfanswerImage").title=""
    };
}