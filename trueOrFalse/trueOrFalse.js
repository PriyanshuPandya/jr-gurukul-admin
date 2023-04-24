let tofbg = "";
let tofthumb = "";
let tofsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changetofbg(){
    document.getElementById('tofbgname').innerText = document.getElementById('tofbg').files.item(0).name;
    const file = document.getElementById('tofbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      tofbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changetofthumb(){
    document.getElementById('tofthumbname').innerText = document.getElementById('tofthumb').files.item(0).name;
    const file = document.getElementById('tofthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      tofthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addtofbgaudio(){
    document.getElementById('tofbgaudioname').innerText = document.getElementById('tofbgaudio').files.item(0).name;
    const file = document.getElementById('tofbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      tofsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

async function tofgetthebase64(element){
  const file = element.files.item(0);
  await fileToBase64(file)
  .then( base64String => {
      element.title = base64String;
  })
  .catch(error => {
    console.error(error);
  });
}

const tof1_additembtn = document.getElementById("tof1_additembtn");
const tof2_additembtn = document.getElementById("tof2_additembtn");
const tofitems1 = document.getElementById("tofitems1");
const tofitems2 = document.getElementById("tofitems2");
const tof1DeleteItemBtns = document.querySelectorAll(".tof1deleteitem");
const tof2DeleteItemBtns = document.querySelectorAll(".tof2deleteitem");
let noOfItemstof1 = 2;
let noOfItemstof2 = 2;
let tof1itemid = 2;
let tof2itemid = 2;

tof1_additembtn.addEventListener("click", () => {
  tof1itemid++;
  const createnewtofitem = document.getElementById("tof1itemtocopy");
  const newtof1item = createnewtofitem.cloneNode(true); // copy with events
  createnewtofitem.parentNode.appendChild(newtof1item);
  newtof1item.querySelector(".tof1ItemNo").innerText = noOfItemstof1 + 1;

  newtof1item.querySelector(".fortof1questionImage").setAttribute("for","tof1Image"+tof1itemid);
  newtof1item.querySelector(".tof1questionImage").setAttribute("id","tof1Image"+tof1itemid);

  newtof1item.querySelector(".fortof1questionAudio").setAttribute("for","tof1Audio"+tof1itemid);
  newtof1item.querySelector(".tof1questionAudio").setAttribute("id","tof1Audio"+tof1itemid);

  newtof1item.querySelector(".tof1questionText").value = null;
  newtof1item.querySelector(".tof1questionImage").title = null;
  newtof1item.querySelector(".tof1questionAudio").title = null;
  newtof1item.querySelector(".fortof1delete").classList.add("tof1deleteitem");
  newtof1item.querySelector(".tof1deleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const tof1ItemToRemove = event.target.parentNode;
    tof1ItemToRemove.parentNode.removeChild(tof1ItemToRemove);
    updatetof1ItemNo();
    });
  noOfItemstof1++;
});



tof1DeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const tof1ItemToRemove = event.target.parentNode;
    tof1ItemToRemove.parentNode.removeChild(tof1ItemToRemove);
    updatetof1ItemNo();
    });
});
function updatetof1ItemNo(){
  const tofAllItemNo = document.querySelectorAll(".tof1ItemNo");
  tofAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemstof1--;
};


tof2_additembtn.addEventListener("click", () => {
  tof2itemid++;
    const createnewtofitem = document.getElementById("tof2itemtocopy");
    const newtof2item = createnewtofitem.cloneNode(true); // copy with events
    createnewtofitem.parentNode.appendChild(newtof2item);
    newtof2item.querySelector(".tof2ItemNo").innerText = noOfItemstof2 + 1;

    newtof2item.querySelector(".fortof2questionImage").setAttribute("for","tof2Image"+tof2itemid);
    newtof2item.querySelector(".tof2questionImage").setAttribute("id","tof2Image"+tof2itemid);
  
    newtof2item.querySelector(".fortof2questionAudio").setAttribute("for","tof2Audio"+tof2itemid);
    newtof2item.querySelector(".tof2questionAudio").setAttribute("id","tof2Audio"+tof2itemid);

    newtof2item.querySelector(".tof2questionText").value = null;
    newtof2item.querySelector(".tof2questionImage").title = null;
    newtof2item.querySelector(".tof2questionAudio").title = null;
    newtof2item.querySelector(".fortof2delete").classList.add("tof2deleteitem");
    newtof2item.querySelector(".tof2deleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const tof2ItemToRemove = event.target.parentNode;
    tof2ItemToRemove.parentNode.removeChild(tof2ItemToRemove);
    updatetof2ItemNo();
    });
    noOfItemstof2++;
  });
  
  tof2DeleteItemBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
    event.preventDefault();
    const tof2ItemToRemove = event.target.parentNode;
    tof2ItemToRemove.parentNode.removeChild(tof2ItemToRemove);
    updatetof2ItemNo();
    });
  });
  function updatetof2ItemNo(){
    const tofAllItemNo = document.querySelectorAll(".tof1ItemNo");
    tofAllItemNo.forEach((number, index) => {
      number.textContent = index + 1;
    });
    noOfItemstof2--;
  };


const tofform = document.querySelector(".tofform");
tofform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("tofform");
    let formData = new FormData(form);
    console.log(formData);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let tof1Fields = document.querySelectorAll(".tofitems1");
    let tof2Fields = document.querySelectorAll(".tofitems2");


      for (var i = 0; i < tof1Fields.length; i++) {
        var tof1game = {
          questionText: tof1Fields[i].querySelector(".tof1questionText")?tof1Fields[i].querySelector(".tof1questionText").value:"",
          questionImage: tof1Fields[i].querySelector(".tof1questionImage")?tof1Fields[i].querySelector(".tof1questionImage").title:"",
          questionAudio: tof1Fields[i].querySelector(".tof1questionAudio")?tof1Fields[i].querySelector(".tof1questionAudio").title:"",
          answerText:document.getElementById("tofanswer1text").value,
          answerImage:document.getElementById("tof1answerImage").title
          };
        gameDataArray[i]=tof1game;
      }
      for (var j = 0; j < tof2Fields.length; j++){
          var tof2game = {
              questionText: tof2Fields[j].querySelector(".tof2questionText")?tof2Fields[j].querySelector(".tof2questionText").value:"",
              questionImage: tof2Fields[j].querySelector(".tof2questionImage")?tof2Fields[j].querySelector(".tof2questionImage").title:"",
              questionAudio: tof2Fields[j].querySelector(".tof2questionAudio")?tof2Fields[j].querySelector(".tof2questionAudio").title:"",
              answerText:document.getElementById("tofanswer2text").value,
              answerImage:document.getElementById("tof2answerImage").title
              };
          gameDataArray[i+j]=tof2game;
      }

    //manage timeup value
    let istimeup = formData.get("tof_timeup");
    let passtimeup;
    if(istimeup){
      passtimeup = 1;
    }
    else{
      passtimeup = 0;
    }

    // Build the final JSON object
    const jsonObject = {
        template_id:12,
        title:formData.get("tof_activitytitle"),
        image_url:tofbg,
        thumbnail_url:tofthumb,
        description:formData.get("tof_activitydesc"),
        sound_url:tofsound,
        time:formData.get("tof_time"),
        timeup:passtimeup,
        lives:formData.get("tof_lives"),
        subject:formData.get("tof_subject"),
        age_min:formData.get("tof_agemin"),
        age_max:formData.get("tof_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));

    tofform.reset();
    document.getElementById("trueorfalsegames").style.display = "none";
    document.getElementById("trueorfalse").style.display = "block";
    window.scrollTo(0,0);
    document.getElementById('tofbgname').innerText = "";
    document.getElementById('tofthumbname').innerText = "";
    showtoftwo();
    showtofSuccessFlashMsg();
  });

  const tofDeleteGameBtns = document.querySelectorAll(".tofgamedel");
for (let i = 0; i < tofDeleteGameBtns.length; i++) {
  tofDeleteGameBtns[i].addEventListener("click", function() {
   document.getElementById("fortofdelgame").style.display = "block";
   document.getElementById("trueorfalse").style.opacity = 0.5;
   document.getElementById("menu").style.opacity = 0.5;
   document.getElementById("nav").style.opacity = 0.5;
   document.getElementById("fortofdelgame").style.opacity = 1;

   document.getElementById("tofdelback").addEventListener("click",function(){
    hidetofGameDelPopup();
   })
   document.getElementById("tofdelGameCancel").addEventListener("click",function(){
    hidetofGameDelPopup();
   })
  })
  document.getElementById("tofdelcnf").addEventListener("click",function(){
    alert("Game Deleted");
  })
};

function hidetofGameDelPopup(){
  document.getElementById("fortofdelgame").style.display = "none";
  document.getElementById("trueorfalse").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}

//for flash msg
function showtofSuccessFlashMsg() {
  const flashMessage = document.createElement("div");
  flashMessage.classList.add("flashsuccess");
  flashMessage.textContent = "Game Added Successfully";
  document.getElementById("tofflashsuccess").appendChild(flashMessage);
  setTimeout(function() {
    flashMessage.remove();
  }, 1500); // Set the timeout for the message to be displayed (in milliseconds)
}

//for filters json
const toffilform = document.querySelector("#toffilform");
toffilform.addEventListener("submit",(event)=>{
  event.preventDefault();
  const filterData = new FormData(toffilform);
  const toffilData = Array.from(filterData.getAll("toffil"));

  const filData = {
    fil_template_id: 12,
    fil_name:filterData.get("tof_filname"),
    fil_agemin:filterData.get("tof_filagemin"),
    fil_agmemax:filterData.get("tof_filagemax"),
    fil_subject:toffilData
  }
  console.log(JSON.stringify(filData));
})

//function to show only  que on refresh.....
function showtoftwo() {
  let children;
  let truefalse1 = document.getElementById("truefalse1");
  const noofchild1 = truefalse1.childElementCount;
  if (noofchild1 > 2) {
    children = truefalse1.querySelectorAll('.tofitems1');
    for (let i = 2; i < noofchild1; i++) {
      truefalse1.removeChild(children[i]);
    }
  }
  let truefalse2 = document.getElementById("truefalse2");
  const noofchild2 = truefalse2.childElementCount;
  if (noofchild2 > 2) {
    children = truefalse2.querySelectorAll('.tofitems2');
    for (let i = 2; i < noofchild2; i++) {
      truefalse2.removeChild(children[i]);
    }
  }
  emptyfilvalues();
  noOfItemstof1 = 2;
  noOfItemstof2 = 2;
}

function emptyfilvalues(){
  let tof1Fields = document.querySelectorAll(".tofitems1");
  let tof2Fields = document.querySelectorAll(".tofitems2");
  for (var i = 0; i < tof1Fields.length; i++) {
      questionImage = tof1Fields[i].querySelector(".tof1questionImage").title="",
      questionAudio = tof1Fields[i].querySelector(".tof1questionAudio").title="",
      answerImage = document.getElementById("tof1answerImage").title=""
    };
    for (var i = 0; i < tof2Fields.length; i++) {
      questionImage = tof2Fields[i].querySelector(".tof2questionImage").title="",
      questionAudio = tof2Fields[i].querySelector(".tof2questionAudio").title="",
      answerImage = document.getElementById("tof1answerImage").title=""
    };
}