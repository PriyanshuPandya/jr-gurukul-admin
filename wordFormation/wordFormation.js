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

async function wfgetthebase64(element){
const file = element.files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        element.title = base64String;
    })
    .catch(error => {
      console.error(error);
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
let wfitemid = 1;

wf_additembtn.addEventListener("click", () => {
  wfitemid++;
  const createnewwfitem = document.getElementById("wfitemtocopy");
  const newwfGameData = createnewwfitem.cloneNode(true); // copy with events
  createnewwfitem.parentNode.appendChild(newwfGameData);
  newwfGameData.querySelector(".wfItemNo").innerText = noOfItemswf + 1;
  newwfGameData.querySelector(".forwfquestionImage").setAttribute("for","wfqueimg"+wfitemid);
  newwfGameData.querySelector(".wfquestionImage").setAttribute("id","wfqueimg"+wfitemid);
  newwfGameData.querySelector(".wfquestionText").value = "";
  newwfGameData.querySelector(".wfquestionImage").title = "";
  newwfGameData.querySelector(".wfactualwords").value = "";
  newwfGameData.querySelector(".wfrandomwords").value = "";
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
        questionImage: gameDataFields[i].querySelector(".wfquestionImage")?gameDataFields[i].querySelector(".wfquestionImage").title:"",
        actualword: gameDataFields[i].querySelector(".wfactualwords")?gameDataFields[i].querySelector(".wfactualwords").value:"",
        randomletters: gameDataFields[i].querySelector(".wfrandomwords")?gameDataFields[i].querySelector(".wfrandomwords").value:"",
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
        age_min:formData.get("wf_agemin"),
        age_max:formData.get("wf_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));

    wfform.reset();
    document.getElementById("wordformationgames").style.display = "none";
    document.getElementById("wordformation").style.display = "block";
    window.scrollTo(0,0);
    document.getElementById('wfbgname').innerText = "";
    document.getElementById('wfthumbname').innerText = "";
    showwfone();
    showwfSuccessFlashMsg();
  });

  const wfDeleteGameBtns = document.querySelectorAll(".wfgamedel");
  for (let i = 0; i < wfDeleteGameBtns.length; i++) {
    wfDeleteGameBtns[i].addEventListener("click", function() {
     document.getElementById("forwfdelgame").style.display = "block";
     document.getElementById("wordformation").style.opacity = 0.5;
     document.getElementById("menu").style.opacity = 0.5;
     document.getElementById("nav").style.opacity = 0.5;
     document.getElementById("forwfdelgame").style.opacity = 1;
  
     document.getElementById("wfdelback").addEventListener("click",function(){
      hidewfGameDelPopup();
     })
     document.getElementById("wfdelGameCancel").addEventListener("click",function(){
      hidewfGameDelPopup();
     })
    })
    document.getElementById("wfdelcnf").addEventListener("click",function(){
      alert("Game Deleted");
    })
  };
  
  function hidewfGameDelPopup(){
    document.getElementById("forwfdelgame").style.display = "none";
    document.getElementById("wordformation").style.opacity = 1;
    document.getElementById("menu").style.opacity = 1;
    document.getElementById("nav").style.opacity = 1;
  }

  //for flash msg
function showwfSuccessFlashMsg() {
  const flashMessage = document.createElement("div");
  flashMessage.classList.add("flashsuccess");
  flashMessage.textContent = "Game Added Successfully";
  document.getElementById("wfflashsuccess").appendChild(flashMessage);
  setTimeout(function() {
    flashMessage.remove();
  }, 1500); // Set the timeout for the message to be displayed (in milliseconds)
}

//for filters json
const wffilform = document.querySelector("#wffilform");
wffilform.addEventListener("submit",(event)=>{
  event.preventDefault();
  const filterData = new FormData(wffilform);
  const wffilData = Array.from(filterData.getAll("wffil"));

  const filData = {
    fil_template_id: 5,
    fil_name:filterData.get("wf_filname"),
    fil_agemin:filterData.get("wf_filagemin"),
    fil_agmemax:filterData.get("wf_filagemax"),
    fil_subject:wffilData
  }
  console.log(JSON.stringify(filData));
})

  //function to show only  que on refresh.....
  function showwfone() {
    let children;
    const noofchild = wfcontent.childElementCount;
    if (noofchild > 1) {
      children = wfcontent.querySelectorAll('.wfsingleitem');
      for (let i = 1; i < noofchild; i++) {
        wfcontent.removeChild(children[i]);
      }
    }
    emptyfilvalues();
    noOfItemswf = 1;
  }
  
  function emptyfilvalues(){
    let gameDataFields = document.querySelectorAll(".wfgamedata");
    for (var i = 0; i < gameDataFields.length; i++) {
        questionImage = gameDataFields[i].querySelector(".wfquestionImage").title=""
      };
  }