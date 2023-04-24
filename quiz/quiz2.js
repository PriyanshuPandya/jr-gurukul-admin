let quizbg = "";
let quizthumb = "";
let quizsound = "";

const createnewquizitem = document.getElementById("quizitemtocopy");
const newquizGameData = createnewquizitem.cloneNode(true); // copy with events

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changequizbg(){
  document.getElementById('quizbgname').innerText = document.getElementById('quiz_bg').files.item(0).name;
  const file = document.getElementById('quiz_bg').files.item(0);
  await fileToBase64(file)
  .then( base64String => {
      quizbg = base64String;
  })
  .catch(error => {
    console.error(error);
  });
}
async function changequizthumb(){
  document.getElementById('quizthumbname').innerText = document.getElementById('quiz_thumb').files.item(0).name;
  const file = document.getElementById('quiz_thumb').files.item(0);
  await fileToBase64(file)
  .then( base64String => {
      quizthumb = base64String;
  })
  .catch(error => {
    console.error(error);
  });
}
async function addquizbgaudio(){
  document.getElementById('quizbgaudioname').innerText = document.getElementById('quiz_sound').files.item(0).name;
  const file = document.getElementById('quiz_sound').files.item(0);
  await fileToBase64(file)
  .then( base64String => {
      quizsound = base64String;
  })
  .catch(error => {
    console.error(error);
  });
}

async function quizgetthebase64(element){
  const file = element.files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        element.title = base64String;
    })
    .catch(error => {
      console.error(error);
  });
}

const quiz_additembtn = document.getElementById("quiz_additembtn");
const quizitems = document.getElementById("quizitems");
const quizDeleteItemBtns = document.querySelectorAll(".quizdeleteitem");
const quizDeleteoptionbtns = document.querySelectorAll(".delopt");
const quiz_addoptionBtns = document.querySelector(".quiz_addoption");
// const intialquizanshtml = document.getElementById("intialquizanshtml").innerHTML;
let noOfItemsquiz = 1;
let noofansopt = 4;
let noofopt = 100;
let quizoptname = String.fromCharCode(noofopt);

//function to show only 4 options always.....
function manageoptions(newquizGameData) {
  let children;
  console.log("hijthjtrihjrojthoijrijrtjrojiij");
  const quizansbox = newquizGameData.querySelector(".quizansbox");
  const noofchild = quizansbox.childElementCount;
  if (noofchild > 4) {
    children = quizansbox.querySelectorAll('div');
    for (let i = 4; i < noofchild; i++) {
      console.log(children[i]);
      children[i].style.display = "none";
    }
  }
}

let quizitemid = 1;
quiz_additembtn.addEventListener("click", (e) => {
  e.preventDefault();
  quizitemid++;
  const newquizitem = $(`
      <div class="quizgamedata">
      <div class="queheading qaheading">Question</div>

      <div class="quizquebox">
          <p class="quizItemNo">${quizitemid}</p>
          <span class="itembox quizitembox">
              <span class="forquizimage" title="Upload Image">
                  <label for=${"quizqueimg"+quizitemid} class="forquizqueimg"></label>
                  <input type="file" class="quizgameQuestion quizquestionImage quizqueimg gameData-question" id=${"quizqueimg"+quizitemid}
                      name="quizquestionImage"
                      accept="image/*">
              </span>
              <span class="forquizaudio" id="foraudio" title="Upload Instruction Audio">
                  <label for=${"quizqueaudio"+quizitemid} class="forquizqueaudio"></label>
                  <input type="file" class="quizgameQuestion quizquestionAudio quizqueaudio gameData-question" id=${"quizqueaudio"+quizitemid}
                      name="quizquestionAudio"
                      accept="audio/*">
              </span>
              <input type="text" id="quizquestionText" name="quizquestionText" placeholder="Enter Question"
                  class="upquestion quizupque quizgameQuestion quizquestionText gameData-question"/>
          </span>
          <img class="itemimg del quizdeleteitem" src="../Images/bin.png"
              alt="delete it" title="Delete this Instruction">
      </div>

      <div class="foropt">
          <button type="button" id="addnewoption" class="addbtn quiz_addoption">Add
              Option</button>
      </div>

      <div class="ansheading qaheading">Answers</div>

      <div class="quizansbox" id="quizansbox">
          <!--Answers Options-->
          <!--Option 1-->
          <div class="quizansitem" id="quizoptcopy">
              <!--<span class="quizoptionname">&#97;</span>-->
              <input type="radio" name="isCorrect" id="ansoptRadio" class="forcorrect forquizansopt"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg1"} class="forquizoptimg1 "></label>
                  <input type="file" class="quizanswerImage1 forquizansopt" id=${"quiz"+quizitemid+"optimg1"} name="answerImage"
                      accept="image/*" >
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio1"} class="forquizoptaudio1"></label>
                  <input type="file" class="quizanswerAudio1 forquizansopt" name="answerAudio"
                      accept="audio/*"  id=${"quiz"+quizitemid+"optaudio1"}>
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option1"
                  class="upanswer quizoptans quizanswerText forquizansopt" name="answerText"/>
              <img class="itemimg del delopt" id="ansoptText"  src="../Images/bin.png" alt="delete it"
                  title="Delete Option">
          </div>
      
          <!--Option 2-->
          <div class="quizansitem">
              <!--<span class="quizoptionname">&#98;</span>-->
              <input type="radio" name="isCorrect" class="forcorrect forquizansopt"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg2"} class="forquizoptimg2"></label>
                  <input type="file" class="quizanswerImage2 forquizansopt" id=${"quiz"+quizitemid+"optimg2"} name="answerImage"
                      accept="image/*">
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio2"} class="forquizoptaudio2"></label>
                  <input type="file" class="quizanswerAudio2 forquizansopt" id=${"quiz"+quizitemid+"optaudio2"} name="answerAudio"
                      accept="audio/*">
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option2"
                  class="upanswer quizoptans" name="answerText"/>
              <img class="itemimg del delopt" src="../Images/bin.png" alt="delete it"
                  title="Delete Option">
          </div>

          <!--Option 3-->
          <div class="quizansitem">
              <!--<span class="quizoptionname">&#99;</span>-->
              <input type="radio" name="isCorrect" id="ansoptRadio" class="forcorrect forquizansopt"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg3"} class="forquizoptimg3"></label>
                  <input type="file" class="quizanswerImage3 forquizansopt" id=${"quiz"+quizitemid+"optimg3"} name="answerImage"
                      accept="image/*">
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio3"} class="forquizoptaudio3"></label>
                  <input type="file" class="quizanswerAudio3 forquizansopt" name="answerAudio"
                      accept="audio/*" id=${"quiz"+quizitemid+"optaudio3"}>
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option3"
                  class="upanswer quizoptans forquizansopt" name="answerText"/>
              <img class="itemimg del delopt" id="ansoptText" onclick="delquizoption(this)" src="../Images/bin.png" alt="delete it"
                  title="Delete Option">
          </div>

          <!--Option 4-->
          <div class="quizansitem">
              <!--<span class="quizoptionname">&#100;</span>-->
              <input type="radio" name="isCorrect" id="ansoptRadio" class="forcorrect forquizansopt"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg4"} class="forquizoptimg4"></label>
                  <input type="file" class="quizanswerImage4 forquizansopt" id=${"quiz"+quizitemid+"optimg4"} name="answerImage"
                      accept="image/*">
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio4"} class="forquizoptaudio4"></label>
                  <input type="file" class="quizanswerAudio4 forquizansopt" name="answerAudio"
                      accept="audio/*"  id=${"quiz"+quizitemid+"optaudio4"}>
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option4"
                  class="upanswer quizoptans forquizansopt" name="answerText"/>
              <img class="itemimg del delopt" id="ansoptText" onclick="delquizoption(this)" src="../Images/bin.png" alt="delete it"
                  title="Delete Option">
          </div>

      </div>
    </div>
  `);
  // document.getElementById("quiz_additembtn").addEventListener("click",addquizAnsOption(this))
   document.getElementById("quizgamecontainer").innerHTML += newquizitem[0].outerHTML;

});

quizDeleteItemBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const quizItemToRemove = event.target.parentNode.parentNode.parentNode;
    quizitems.removeChild(quizItemToRemove);
    updatequizItemNo();
    });
});

function updatequizItemNo(){
  const quizAllItemNo = document.querySelectorAll(".quizItemNo");
  quizAllItemNo.forEach((number, index) => {
    number.textContent = index + 1;
  });
  noOfItemsquiz--;
};

quiz_addoptionBtns.onclick=(e)=>{
  e.preventDefault();
  console.log("rg9uurej9uerj9uerjyu9reyj9");
  // noofopt++;
  // quizoptname = String.fromCharCode(noofopt);
  const newquizOption = $(`
  <div class="quizansitem">
  <!--<span class="quizoptionname">${quizoptname}</span>-->
  <input type="radio" name="isCorrect" id="ansoptRadio" class="forcorrect forquizansopt"
      title="Select Correct Answer">
  <span class="foroptionsimg" title="Upload Image as Option">
      <label for=${"quiz1optimg"+quizoptname} class="forquizoptimg3"></label>
      <input type="file" class="quizanswerImage3 forquizansopt" id=${"quiz1optimg"+quizoptname} name="answerImage"
          accept="image/*" onchange="quizgetthebase64(this)">
  </span>
  <span class="foroptionsaudio" title="Upload Audio as Option">
      <label for=${"quiz1optaudio"+quizoptname} class="forquizoptaudio3"></label>
      <input type="file" class="quizanswerAudio3 forquizansopt" name="answerAudio"
          accept="audio/*" onchange="quizgetthebase64(this)" id=${"quiz1optaudio"+quizoptname}>
  </span>
  <input type="text" placeholder="Enter Answer" id="quiz1option3"
      class="upanswer quizoptans forquizansopt" name="answerText"/>
  <img class="itemimg del delopt" id="ansoptText" onclick="delquizoption(this)" src="../Images/bin.png" alt="delete it"
      title="Delete Option">
</div>
  `)
  document.getElementById("quizansbox").innerHTML += newquizOption[0].outerHTML;
}

let noofoptdel;
function delquizoption(element){
  // noofoptdel = 97;
  const quizopttoRemove = element.parentNode;
  quizopttoRemove.parentNode.removeChild(quizopttoRemove);
  // let x = element.querySelectorAll('.quizoptionname');
  // console.log(x);
  // for(i=0; i<element.parentNode.childElementCount; i++){
  //   quizoptname = String.fromCharCode(noofoptdel);
  //   x[i].innerText = noofoptdel;
  //   noofoptdel++;
  // };
}

const quizform = document.querySelector(".quizform");
quizform.addEventListener("submit", (event) => {
  event.preventDefault();

  //manage timeup value
  let istimeup = formData.get("quiz_timeup");
  let passtimeup;
  if(istimeup){
    passtimeup = 1;
  }
  else{
    passtimeup = 0;
  } 

  // let form = document.getElementById("quizform");
  const form = $(this);

  const template_id = 2;
  const title = formData.get("quiz_activitytitle");
  const image_url = quizbg;
  const thumbnail_url = quizthumb;
  const description = formData.get("quiz_activitydesc");
  const sound_url = quizsound;
  const time = formData.get("quiz_time");
  const timeup = passtimeup;
  const lives = formData.get("quiz_lives");
  const subject = formData.get("quiz_subject");
  const age_min = formData.get("quiz_agemin");
  const age_max = formData.get("quiz_agemax");
  // const age_group = formData.get("quiz_age");
  const gameDataArray = [];


  const formData = {template_id, title, image_url, thumbnail_url, description, sound_url, time, timeup, lives, subject, age_min, age_max, gameData: gameDataArray };
  const formDataJson = JSON.stringify(formData);
// console.log(formDataJson);

//   event.preventDefault();
//   const form = $(this);
//   const title = form.find("#title").val();
//   const description = form.find("#description").val();
//   const gameDataArray = [];
// ​
  form.find(".gameData").each(function () {
      const gameData = {
          questionText: $(this).find(".gameData-question#questionText").val(),
          questionImage: $(this)
              .find(".gameData-question#questionImage")
              .val(),
          questionAudio: $(this)
              .find(".gameData-question#questionAudio")
              .val(),
          quizansitem: []
      };
​
      const quizansitemContainer = $(this).find(
          ".quizansitem-container"
      );
      quizansitemContainer.find(".quizansitem").each(function () {
          const answerOption = {
              answerImage: $(this)
                  .find(".forquizansopt#answerImage")
                  .val(),
              answerText: $(this)
                  .find(".forquizansopt#answerText")
                  .val(),
              answerAudio: $(this)
                  .find(".forquizansopt#answerAudio")
                  .val(),
              isCorrect: $(this)
                  .find(".forquizansopt#isCorrect")
                  .is(":checked")
          };
          gameData.quizansitem.push(answerOption);
      });
​
      gameDataArray.push(gameData);
  });
// ​
//   const formData = { title, description, gameData: gameDataArray };
//   const formDataJson = JSON.stringify(formData);
// console.log(formDataJson);






  // Loop through the gameData fields and build the gameDataArray
  let gameDataFields = document.querySelectorAll(".quizgamedata");

  for (var i = 0; i < gameDataFields.length; i++) {
    var quizgame = {
      questionText: gameDataFields[i].querySelector(".quizquestionText")?gameDataFields[i].querySelector(".quizquestionText").value:"",
      questionImage: gameDataFields[i].querySelector(".quizquestionImage")?gameDataFields[i].querySelector(".quizquestionImage").title:"",
      questionImage: gameDataFields[i].querySelector(".quizquestionAudio")?gameDataFields[i].querySelector(".quizquestionAudio").title:"",
      answerText: gameDataFields[i].querySelector(".quizanswerText")?gameDataFields[i].querySelector(".quizanswerText").value:"",
      answerImage: gameDataFields[i].querySelector(".quizanswerImage")?gameDataFields[i].querySelector(".quizanswerImage").title:""
    };
    gameDataArray[i]=quizgame;
  }

  

  // Build the final JSON object
  const jsonObject = {
      template_id:2,
      title:formData.get("quiz_activitytitle"),
      image_url:quizbg,
      thumbnail_url:quizthumb,
      description:formData.get("quiz_activitydesc"),
      sound_url:quizsound,
      time:formData.get("quiz_time"),
      timeup:passtimeup,
      lives:formData.get("quiz_lives"),
      subject:formData.get("quiz_subject"),
      age_group:formData.get("quiz_age"),
      gameData: gameDataArray
  };
  // Log the JSON object to the console
  console.log(JSON.stringify(jsonObject));

  quizform.reset();
  document.getElementById("quizgames").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  window.scrollTo(0,0);
  showquizSuccessFlashMsg();
});

//for flash msg
function showquizSuccessFlashMsg() {
  const flashMessage = document.createElement("div");
  flashMessage.classList.add("flashsuccess");
  flashMessage.textContent = "Game Added Successfully";
  document.getElementById("quizflashsuccess").appendChild(flashMessage);
  setTimeout(function() {
    flashMessage.remove();
  }, 1500); // Set the timeout for the message to be displayed (in milliseconds)
}

const quizDeleteGameBtns = document.querySelectorAll(".quizgamedel");
for (let i = 0; i < quizDeleteGameBtns.length; i++) {
  quizDeleteGameBtns[i].addEventListener("click", function() {
   document.getElementById("forquizdelgame").style.display = "block";
   document.getElementById("quiz").style.opacity = 0.5;
   document.getElementById("menu").style.opacity = 0.5;
   document.getElementById("nav").style.opacity = 0.5;
   document.getElementById("forquizdelgame").style.opacity = 1;

   document.getElementById("quizdelback").addEventListener("click",function(){
    hidequizGameDelPopup();
   })
   document.getElementById("quizdelGameCancel").addEventListener("click",function(){
    hidequizGameDelPopup();
   })
  })
};

function hidequizGameDelPopup(){
  document.getElementById("forquizdelgame").style.display = "none";
  document.getElementById("quiz").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}

//for filters json
const quizfilform = document.querySelector("#quizfilform");
quizfilform.addEventListener("submit",(event)=>{
  event.preventDefault();
  const filterData = new FormData(quizfilform);
  const quizfilData = Array.from(filterData.getAll("quizfil"));

  const filData = {
    fil_template_id: 2,
    fil_name:filterData.get("quiz_filname"),
    fil_agemin:filterData.get("quiz_filagemin"),
    fil_agmemax:filterData.get("quiz_filagemax"),
    fil_subject:quizfilData
  }
  console.log(JSON.stringify(filData));
})