let gsbg = "";
let gsthumb = "";
let gssound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changegsbg(){
    document.getElementById('gsbgname').innerText = document.getElementById('gsbg').files.item(0).name;
    const file = document.getElementById('gsbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      gsbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changegsthumb(){
    document.getElementById('gsthumbname').innerText = document.getElementById('gsthumb').files.item(0).name;
    const file = document.getElementById('gsthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      gsthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addgsbgaudio(){
    document.getElementById('gsbgaudioname').innerText = document.getElementById('gsbgaudio').files.item(0).name;
    const file = document.getElementById('gsbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
      agmbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

async function gsgetthebase64(element){
  const file = element.files.item(0);
      await fileToBase64(file)
      .then( base64String => {
          element.title = base64String;
      })
      .catch(error => {
        console.error(error);
      });
    }


const gs1_additembtn = document.getElementById("gs1_additembtn");
const gs2_additembtn = document.getElementById("gs2_additembtn");
const gsitems1 = document.getElementById("gsitems1");
const gsitems2 = document.getElementById("gsitems2");
const gs1DeleteItemBtns = document.querySelectorAll(".gs1deleteitem");
const gs2DeleteItemBtns = document.querySelectorAll(".gs2deleteitem");
let noOfItemsgs1 = 2;
let noOfItemsgs2 = 2;
let gs1itemid = 2;
let gs2itemid = 2;

gs1_additembtn.addEventListener("click", () => {
  gs1itemid++;
  const createnewgsitem = document.getElementById("gs1itemtocopy");
  const newgs1item = createnewgsitem.cloneNode(true); // copy with events
  createnewgsitem.parentNode.appendChild(newgs1item);
  newgs1item.querySelector(".gs1ItemNo").innerText = noOfItemsgs1 + 1;

  newgs1item.querySelector(".forgs1answerImage").setAttribute("for","gs1Image"+gs1itemid);
  newgs1item.querySelector(".gs1questionImage").setAttribute("id","gs1Image"+gs1itemid);

  newgs1item.querySelector(".forgs1answerAudio").setAttribute("for","gs1Audio"+gs1itemid);
  newgs1item.querySelector(".gs1questionAudio").setAttribute("id","gs1Audio"+gs1itemid);

  newgs1item.querySelector(".gs1questionText").value = null;
  newgs1item.querySelector(".gs1questionImage").value = null;
  newgs1item.querySelector(".gs1questionAudio").value = null;
  newgs1item.querySelector(".forgs1delete").classList.add("gs1deleteitem");
  newgs1item.querySelector(".gs1deleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const gs1ItemToRemove = event.target.parentNode;
    gs1ItemToRemove.parentNode.removeChild(gs1ItemToRemove);
    updategs1ItemNo();
    });
  noOfItemsgs1++;
});



gs1DeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const gs1ItemToRemove = event.target.parentNode;
    gs1ItemToRemove.parentNode.removeChild(gs1ItemToRemove);
    updategs1ItemNo();
    });
});
function updategs1ItemNo(){
  const gsAllItemNo = document.querySelectorAll(".gs1ItemNo");
  gsAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsgs1--;
};


gs2_additembtn.addEventListener("click", () => {
  gs2itemid++;
    const createnewgsitem = document.getElementById("gs2itemtocopy");
    const newgs2item = createnewgsitem.cloneNode(true); // copy with events
    createnewgsitem.parentNode.appendChild(newgs2item);
    newgs2item.querySelector(".gs2ItemNo").innerText = noOfItemsgs2 + 1;

    newgs2item.querySelector(".forgs2answerImage").setAttribute("for","gs2Image"+gs2itemid);
    newgs2item.querySelector(".gs2questionImage").setAttribute("id","gs2Image"+gs2itemid);
  
    newgs2item.querySelector(".forgs2answerAudio").setAttribute("for","gs2Audio"+gs2itemid);
    newgs2item.querySelector(".gs2questionAudio").setAttribute("id","gs2Audio"+gs2itemid);

    newgs2item.querySelector(".gs2questionText").value = null;
    newgs2item.querySelector(".gs2questionImage").title = null;
    newgs2item.querySelector(".gs2questionAudio").title = null;
    newgs2item.querySelector(".forgs2delete").classList.add("gs2deleteitem");
    newgs2item.querySelector(".gs2deleteitem").addEventListener("click", (event) => {
    event.preventDefault();
    const gs2ItemToRemove = event.target.parentNode;
    gs2ItemToRemove.parentNode.removeChild(gs2ItemToRemove);
    updategs2ItemNo();
    });
    noOfItemsgs2++;
  });
  
  
  
  gs2DeleteItemBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
    event.preventDefault();
    const gs2ItemToRemove = event.target.parentNode;
    gs2ItemToRemove.parentNode.removeChild(gs2ItemToRemove);
    updategs2ItemNo();
    });
  });
  function updategs2ItemNo(){
    const gsAllItemNo = document.querySelectorAll(".gs1ItemNo");
    gsAllItemNo.forEach((number, index) => {
      number.textContent = index + 1;
    });
    noOfItemsgs2--;
  };


const gsform = document.querySelector(".gsform");
gsform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("gsform");
    let formData = new FormData(form);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let gs1Fields = document.querySelectorAll(".gsitems1");
    let gs2Fields = document.querySelectorAll(".gsitems2");


      for (var i = 0; i < gs1Fields.length; i++) {
        var gs1game = {
          questionText: gs1Fields[i].querySelector(".gs1questionText")?gs1Fields[i].querySelector(".gs1questionText").value:"",
          questionImage: gs1Fields[i].querySelector(".gs1questionImage")?gs1Fields[i].querySelector(".gs1questionImage").title:"",
          questionAudio: gs1Fields[i].querySelector(".gs1questionAudio")?gs1Fields[i].querySelector(".gs1questionAudio").title:"",
          answer:document.getElementById("g1name").value
          };
        gameDataArray[i]=gs1game;
      }
      for (var j = 0; j < gs2Fields.length; j++){
          var gs2game = {
              questionText: gs2Fields[j].querySelector(".gs2questionText")?gs2Fields[j].querySelector(".gs2questionText").value:"",
              questionImage: gs2Fields[j].querySelector(".gs2questionImage")?gs2Fields[j].querySelector(".gs2questionImage").title:"",
              questionAudio: gs2Fields[j].querySelector(".gs2questionAudio")?gs2Fields[j].querySelector(".gs2questionAudio").title:"",
              answer:document.getElementById("g2name").value
              };
          gameDataArray[i+j]=gs2game;
      }

    //manage timeup value
    let istimeup = formData.get("gs_timeup");
    let passtimeup;
    if(istimeup){
      passtimeup = 1;
    }
    else{
      passtimeup = 0;
    }

    // Build the final JSON object
    const jsonObject = {
        template_id:8,
        title:formData.get("gs_activitytitle"),
        image_url:gsbg,
        thumbnail_url:gsthumb,
        description:formData.get("gs_activitydesc"),
        sound_url:gssound,
        time:formData.get("gs_time"),
        timeup:passtimeup,
        lives:formData.get("gs_lives"),
        subject:formData.get("gs_subject"),
        age_min:formData.get("gs_agemin"),
        age_max:formData.get("gs_agemax"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));

    gsform.reset();
    document.getElementById("groupsortgames").style.display = "none";
    document.getElementById("groupsort").style.display = "block";
    window.scrollTo(0,0);
    document.getElementById('gsbgname').innerText = "";
    document.getElementById('gsthumbname').innerText = "";
    showgstwo();
    showgsSuccessFlashMsg();
  });

const gsDeleteGameBtns = document.querySelectorAll(".gsgamedel");
for (let i = 0; i < gsDeleteGameBtns.length; i++) {
  gsDeleteGameBtns[i].addEventListener("click", function() {
   document.getElementById("forgsdelgame").style.display = "block";
   document.getElementById("groupsort").style.opacity = 0.5;
   document.getElementById("menu").style.opacity = 0.5;
   document.getElementById("nav").style.opacity = 0.5;
   document.getElementById("forgsdelgame").style.opacity = 1;

   document.getElementById("gsdelback").addEventListener("click",function(){
    hidegsGameDelPopup();
   })
   document.getElementById("gsdelGameCancel").addEventListener("click",function(){
    hidegsGameDelPopup();
   })
  })
  document.getElementById("gsdelcnf").addEventListener("click",function(){
    alert("Game Deleted");
  })
};

function hidegsGameDelPopup(){
  document.getElementById("forgsdelgame").style.display = "none";
  document.getElementById("groupsort").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}

//for flash msg
function showgsSuccessFlashMsg() {
  const flashMessage = document.createElement("div");
  flashMessage.classList.add("flashsuccess");
  flashMessage.textContent = "Game Added Successfully";
  document.getElementById("gsflashsuccess").appendChild(flashMessage);
  setTimeout(function() {
    flashMessage.remove();
  }, 1500); // Set the timeout for the message to be displayed (in milliseconds)
}

const gsfilform = document.querySelector("#gsfilform");
gsfilform.addEventListener("submit",(event)=>{
  event.preventDefault();
  const filterData = new FormData(gsfilform);
  const gsfilData = Array.from(filterData.getAll("gsfil"));

//for filters json
const filData = {
  fil_template_id: 8,
  fil_name:filterData.get("gs_filname"),
  fil_agemin:filterData.get("gs_filagemin"),
  fil_agmemax:filterData.get("gs_filagemax"),
  fil_subject:gsfilData
}
console.log(JSON.stringify(filData));
})

//function to show only  que on refresh.....
function showgstwo() {
  let children;
  let groupsortitems1 = document.getElementById("groupsortitems1");
  const noofchild1 = groupsortitems1.childElementCount;
  if (noofchild1 > 2) {
    children = groupsortitems1.querySelectorAll('.gsitems1');
    for (let i = 2; i < noofchild1; i++) {
      groupsortitems1.removeChild(children[i]);
    }
  }
  let groupsortitems2 = document.getElementById("groupsortitems2");
  const noofchild2 = groupsortitems2.childElementCount;
  if (noofchild2 > 2) {
    children = groupsortitems2.querySelectorAll('.gsitems2');
    for (let i = 2; i < noofchild2; i++) {
      groupsortitems2.removeChild(children[i]);
    }
  }
  emptyfilvalues();
  noOfItemsgs1 = 2;
  noOfItemsgs2 = 2;
}

function emptyfilvalues(){
  let gs1Fields = document.querySelectorAll(".gsitems1");
  let gs2Fields = document.querySelectorAll(".gsitems2");
  for (var i = 0; i < gs1Fields.length; i++) {
      questionImage = gs1Fields[i].querySelector(".gs1questionImage").title="",
      questionAudio = gs1Fields[i].querySelector(".gs1questionAudio").title=""
    };
    for (var i = 0; i < gs2Fields.length; i++) {
      questionImage = gs2Fields[i].querySelector(".gs2questionImage").title="",
      questionAudio = gs2Fields[i].querySelector(".gs2questionAudio").title=""
    };
}