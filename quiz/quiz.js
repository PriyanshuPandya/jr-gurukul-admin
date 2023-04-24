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
const quizDeleteoptionbtns = document.querySelectorAll("delopt");
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
              <span class="forimage" title="Upload Image">
                  <label for=${"quizqueimg"+quizitemid} class="forquizqueimg"><img class="itemimg" id="upimg"
                          src="../Images/image.png" alt="upload image"></label>
                  <input type="file" class="quizgameQuestion quizquestionImage quizqueimg" id=${"quizqueimg"+quizitemid}
                      name="quizquestionImage"
                      accept="image/*" onchange="quizgetthebase64(this)">
              </span>
              <span class="foraudio" id="foraudio" title="Upload Instruction Audio">
                  <label for=${"quizqueaudio"+quizitemid} class="forquizqueaudio"><img class="itemimg upaudio"
                          src="../Images/audioOn.png" alt="upload image"></label>
                  <input type="file" class="quizgameQuestion quizquestionAudio quizqueaudio" id=${"quizqueaudio"+quizitemid}
                      name="quizquestionAudio"
                      accept="audio/*" onchange="quizgetthebase64(this)">
              </span>
              <input type="text" id="quizquestionText" name="quizquestionText" placeholder="Enter Question"
                  class="upquestion quizupque quizgameQuestion quizquestionText"/>
          </span>
          <img class="itemimg del quizdeleteitem" onclick="removequizGame(this)" src="../Images/bin.png"
              alt="delete it" title="Delete this Instruction">
      </div>

      <div class="foropt">
          <button type="button" id="addnewoption" onclick="addquizAnsOption(this)" class="addbtn quiz_addoption">Add
              Option</button>
      </div>

      <div class="ansheading qaheading">Answers</div>

      <div class="quizansbox" id="quizansbox">
          <!--Answers Options-->
          <!--Option 1-->
          <div class="quizansitem" id="quizoptcopy">
              <span class="quizoptionname">&#97;</span>
              <input type="radio" name="forcorrect" id="ansoptRadio" class="forcorrect forquizansopt"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg1"} class="forquizoptimg1"><img class="optionimg" src="../Images/image.png"
                          alt="upload image"></label>
                  <input type="file" class="quizanswerImage1" id=${"quiz"+quizitemid+"optimg1"} name="itemimage"
                      accept="image/*" onchange="quizgetthebase64(this)">
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio1"} class="forquizoptaudio1"><img class="optionimg optioinimgaudio"
                          src="../Images/audioOn.png" alt="upload image"></label>
                  <input type="file" class="quizanswerAudio1" name="optionaudio"
                      accept="audio/*" onchange="quizgetthebase64(this)" id=${"quiz"+quizitemid+"optaudio1"}>
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option1"
                  class="upanswer quizoptans quizanswerText forquizansopt" />
              <img class="itemimg del delopt" id="ansoptText" onclick="delquizoption(this)" src="../Images/bin.png" alt="delete it"
                  title="Delete Option">
          </div>
      
          <!--Option 2-->
          <div class="quizansitem">
              <span class="quizoptionname">&#98;</span>
              <input type="radio" name="forcorrect" class="forcorrect"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg2"} class="forquizoptimg2"><img class="optionimg" src="../Images/image.png"
                          alt="upload image"></label>
                  <input type="file" class="quizanswerImage2" id=${"quiz"+quizitemid+"optimg2"} name="itemimage"
                      accept="image/*" onchange="quizgetthebase64(this)">
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio2"} class="forquizoptaudio2"><img class="optionimg optioinimgaudio"
                          src="../Images/audioOn.png" alt="upload image"></label>
                  <input type="file" class="quizanswerAudio2" id=${"quiz"+quizitemid+"optaudio2"} name="optionaudio"
                      accept="audio/*" onchange="quizgetthebase64(this)">
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option2"
                  class="upanswer quizoptans" />
              <img class="itemimg del delopt" src="../Images/bin.png" alt="delete it"
                  title="Delete Option" onclick="delquizoption(this)">
          </div>

          <!--Option 3-->
          <div class="quizansitem">
              <span class="quizoptionname">&#99;</span>
              <input type="radio" name="forcorrect" id="ansoptRadio" class="forcorrect forquizansopt"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg3"} class="forquizoptimg3"><img class="optionimg" src="../Images/image.png"
                          alt="upload image"></label>
                  <input type="file" class="quizanswerImage3" id=${"quiz"+quizitemid+"optimg3"} name="itemimage"
                      accept="image/*" onchange="quizgetthebase64(this)">
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio3"} class="forquizoptaudio3"><img class="optionimg optioinimgaudio"
                          src="../Images/audioOn.png" alt="upload image"></label>
                  <input type="file" class="quizanswerAudio3" name="optionaudio"
                      accept="audio/*" onchange="quizgetthebase64(this)" id=${"quiz"+quizitemid+"optaudio3"}>
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option3"
                  class="upanswer quizoptans forquizansopt"/>
              <img class="itemimg del delopt" id="ansoptText" onclick="delquizoption(this)" src="../Images/bin.png" alt="delete it"
                  title="Delete Option">
          </div>

          <!--Option 4-->
          <div class="quizansitem">
              <span class="quizoptionname">&#100;</span>
              <input type="radio" name="forcorrect" id="ansoptRadio" class="forcorrect forquizansopt"
                  title="Select Correct Answer">
              <span class="foroptionsimg" title="Upload Image as Option">
                  <label for=${"quiz"+quizitemid+"optimg4"} class="forquizoptimg4"><img class="optionimg" src="../Images/image.png"
                          alt="upload image"></label>
                  <input type="file" class="quizanswerImage4" id=${"quiz"+quizitemid+"optimg4"} name="itemimage"
                      accept="image/*" onchange="quizgetthebase64(this)">
              </span>
              <span class="foroptionsaudio" title="Upload Audio as Option">
                  <label for=${"quiz"+quizitemid+"optaudio4"} class="forquizoptaudio4"><img class="optionimg optioinimgaudio"
                          src="../Images/audioOn.png" alt="upload image"></label>
                  <input type="file" class="quizanswerAudio4" name="optionaudio"
                      accept="audio/*" onchange="quizgetthebase64(this)" id=${"quiz"+quizitemid+"optaudio4"}>
              </span>
              <input type="text" placeholder="Enter Answer" id="quiz1option4"
                  class="upanswer quizoptans forquizansopt"/>
              <img class="itemimg del delopt" id="ansoptText" onclick="delquizoption(this)" src="../Images/bin.png" alt="delete it"
                  title="Delete Option">
          </div>

      </div>
    </div>
  `);
  document.getElementById("quizgamecontainer").innerHTML += newquizitem[0].outerHTML;
  

  // const newquizGameData = createnewquizitem.cloneNode(true); // copy with events
  // createnewquizitem.parentNode.appendChild(newquizGameData);
  // manageoptions(newquizGameData);
  // newquizGameData.querySelector(".quizItemNo").innerText = noOfItemsquiz + 1;

  // newquizGameData.querySelector(".quizquestionText").value = "";
  // newquizGameData.querySelector(".quizquestionImage").title = "";
  // newquizGameData.querySelector(".quizquestionAudio").title = "";
  // for(let i=1; i<=4; i++){
  //   newquizGameData.querySelector("#quiz1option"+i).value = "";
  //   if(newquizGameData.querySelector("#quiz1optimg"+i).title){
  //     newquizGameData.querySelector("#quiz1optimg"+i).title = "";
  //   }
  //   if(newquizGameData.querySelector("#quiz1optaudio"+i).title){
  //     newquizGameData.querySelector("#quiz1optaudio"+i).title = "";
  //   }
  // }

  // newquizGameData.querySelector(".forquizqueimg").setAttribute("for","quizqueimg"+quizitemid);
  // newquizGameData.querySelector(".quizqueimg").setAttribute("id","quizqueimg"+quizitemid);
  // newquizGameData.querySelector(".forquizqueaudio").setAttribute("for","quizqueaudio"+quizitemid);
  // newquizGameData.querySelector(".quizqueaudio").setAttribute("id","quizqueaudio"+quizitemid);

  // newquizGameData.querySelector(".forquizoptimg1").setAttribute("for","quiz"+quizitemid+"optimg1");
  // newquizGameData.querySelector(".quizanswerImage1").setAttribute("id","quiz"+quizitemid+"optimg1");
  // newquizGameData.querySelector(".forquizoptaudio1").setAttribute("for","quiz"+quizitemid+"optaudio1");
  // newquizGameData.querySelector(".quizanswerAudio1").setAttribute("id","quiz"+quizitemid+"optaudio1");

  // newquizGameData.querySelector(".forquizoptimg2").setAttribute("for","quiz"+quizitemid+"optimg2");
  // newquizGameData.querySelector(".quizanswerImage2").setAttribute("id","quiz"+quizitemid+"optimg2");
  // newquizGameData.querySelector(".forquizoptaudio2").setAttribute("for","quiz"+quizitemid+"optaudio2");
  // newquizGameData.querySelector(".quizanswerAudio2").setAttribute("id","quiz"+quizitemid+"optaudio2");

  // newquizGameData.querySelector(".forquizoptimg3").setAttribute("for","quiz"+quizitemid+"optimg3");
  // newquizGameData.querySelector(".quizanswerImage3").setAttribute("id","quiz"+quizitemid+"optimg3");
  // newquizGameData.querySelector(".forquizoptaudio3").setAttribute("for","quiz"+quizitemid+"optaudio3");
  // newquizGameData.querySelector(".quizanswerAudio3").setAttribute("id","quiz"+quizitemid+"optaudio3");

  // newquizGameData.querySelector(".forquizoptimg4").setAttribute("for","quiz"+quizitemid+"optimg4");
  // newquizGameData.querySelector(".quizanswerImage4").setAttribute("id","quiz"+quizitemid+"optimg4");
  // newquizGameData.querySelector(".forquizoptaudio4").setAttribute("for","quiz"+quizitemid+"optaudio4");
  // newquizGameData.querySelector(".quizanswerAudio4").setAttribute("id","quiz"+quizitemid+"optaudio4");

  // newquizGameData.querySelector(".forquizdelete").classList.add("quizdeleteitem");
  // newquizGameData.querySelector(".quiz_addoption").addEventListener("click", (event) => {
  //   event.preventDefault();
  //   quiznewoption();
  // });
  // newquizGameData.querySelector(".quizdeleteitem").addEventListener("click", (event) => {
  //   event.preventDefault();
  //   const quizItemToRemove = event.target.parentNode.parentNode.parentNode;
  //   quizitems.removeChild(quizItemToRemove);
  //   updatequizItemNo();
  // });
  // noOfItemsquiz++;
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
  noofopt++;
  quizoptname = String.fromCharCode(noofopt);
  const newquizOption = $(`
  <div class="quizansitem">
  <span class="quizoptionname">${quizoptname}</span>
  <input type="radio" name="forcorrect" id="ansoptRadio" class="forcorrect forquizansopt"
      title="Select Correct Answer">
  <span class="foroptionsimg" title="Upload Image as Option">
      <label for=${"quiz1optimg"+quizoptname} class="forquizoptimg3"><img class="optionimg" src="../Images/image.png"
              alt="upload image"></label>
      <input type="file" class="quizanswerImage3" id=${"quiz1optimg"+quizoptname} name="itemimage"
          accept="image/*" onchange="quizgetthebase64(this)">
  </span>
  <span class="foroptionsaudio" title="Upload Audio as Option">
      <label for=${"quiz1optaudio"+quizoptname} class="forquizoptaudio3"><img class="optionimg optioinimgaudio"
              src="../Images/audioOn.png" alt="upload image"></label>
      <input type="file" class="quizanswerAudio3" name="optionaudio"
          accept="audio/*" onchange="quizgetthebase64(this)" id=${"quiz1optaudio"+quizoptname}>
  </span>
  <input type="text" placeholder="Enter Answer" id="quiz1option3"
      class="upanswer quizoptans forquizansopt"/>
  <img class="itemimg del delopt" id="ansoptText" onclick="delquizoption(this)" src="../Images/bin.png" alt="delete it"
      title="Delete Option">
</div>
  `)
  //  document.getElementById("quizansbox").append(newquizOption);
  document.getElementById("quizansbox").innerHTML += newquizOption[0].outerHTML;

  // const newquizitem = document.getElementById("quizoptcopy");
  // const newquizoption = newquizitem.cloneNode(true); // copy with events
  // newquizitem.parentNode.appendChild(newquizoption);
  // newquizoption.querySelector(".quizanswerText").value = "";
  // newquizoption.querySelector(".quizanswerImage").value = "";
  // newquizoption.querySelector(".quizanswerAudio").value = "";
  
  // newquizoption.querySelector(".quizoptionname").innerText = quizoptname;
}

function quiznewoption(){
      
}

// quizDeleteoptionbtns.forEach((button)=>{
//   button.addEventListener("click", (event) => {
//     event.preventDefault();
//     const quizopttoRemove = event.target.parentNode;
//     quizopttoRemove.parentNode.removeChild(quizopttoRemove);
//   });
// });
let noofoptdel;
function delquizoption(element){
  noofoptdel = 97;
  const quizopttoRemove = element.parentNode;
  quizopttoRemove.parentNode.removeChild(quizopttoRemove);
  let x = element.parentNode.parentNode.querySelectorAll('.quizoptionname');
  for(i=0; i<element.parentNode.childElementCount; i++){
    quizoptname = String.fromCharCode(noofoptdel);
    x[i].innerText = noofoptdel;
    noofoptdel++;
  };
}

const quizform = document.querySelector(".quizform");
quizform.addEventListener("submit", (event) => {
  event.preventDefault();
  let form = document.getElementById("quizform");
  let formData = new FormData(form);
  let gameDataArray = [];
  // Loop through the gameData fields and build the gameDataArray
  let gameDataFields = document.querySelectorAll(".quizgamedata");

  for (var i = 0; i < gameDataFields.length; i++) {
    var quizgame = {
      questionText: gameDataFields[i].querySelector(".quizquestionText")?gameDataFields[i].querySelector(".quizquestionText").value:"",
      questionImage: gameDataFields[i].querySelector(".quizquestionImage")?gameDataFields[i].querySelector(".quizquestionImage").title:"",
      answerText: gameDataFields[i].querySelector(".quizanswerText")?gameDataFields[i].querySelector(".quizanswerText").value:"",
      answerImage: gameDataFields[i].querySelector(".quizanswerImage")?gameDataFields[i].querySelector(".quizanswerImage").title:""
    };
    gameDataArray[i]=quizgame;
  }

  //manage timeup value
  let istimeup = formData.get("quiz_timeup");
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














  

let gameDataCount = 1;
let answerOptionsCount = 4;

//quizgamecontainer = gamedata-container
//quizgamedata = gamedata
//addGameData() = addquizGameData()
//addquizAnsOption(this) = addAnswerOption(this)
//removequizAnsOption(this) = removeAnswerOption(this)
//removequizGame(this) = removeGameData(this)
//quizform = dynamic-form
//quizansbox = answerOptions-container
//quizansitem = answerOptions
//forquizansopt =  answerOptions-answer
//quizgameQuestion = gameData-question




// function addGameData(e) {
//     e.preventDefault();
//     const gameDataContainer = $("#quizgamecontainer");
//     const newGameData = $(`
//     <div class="quizgamedata" id="quizgamedata">
//         <div class="queheading qaheading">Question</div>

//         <div class="quizquebox">
//             <p class="quizItemNo">1</p>
//             <span class="itembox quizitembox">
//                 <span class="forimage" id="forimage" title="Upload Image">
//                     <label for="itemimage"><img class="itemimg" id="upimg"
//                             src="../Images/image.png" alt="upload image"></label>
//                     <input type="file" class="quizgameQuestion" id="quizquestionImage"
//                         name="quizquestionImage"
//                         accept="image/*"><!--onchange="getquizimgname()-->
//                 </span>
//                 <span class="foraudio" id="foraudio" title="Upload Instruction Audio">
//                     <label for="itemaudio"><img class="itemimg upaudio"
//                             src="../Images/audioOn.png" alt="upload image"></label>
//                     <input type="file" class="quizgameQuestion" id="quizquestionAudio"
//                         name="quizquestionAudio"
//                         accept="audio/*"><!--onchange="getquizaudioname()"-->
//                 </span>
//                 <input type="text" id="quizquestionText" name="quizquestionText" placeholder="Enter Question"
//                     class="upquestion quizupque quizgameQuestion"/>
//             </span>
//         </div>

//         <div class="foropt">
//             <button type="button" id="addnewoption" onclick="" class="addbtn quiz_addoption">Add
//                 Option</button>
//         </div>

//         <div class="ansheading qaheading">Answers</div>

//         <div class="quizansbox">
//             <div class="quizansitem">
//                 <!-- <span class="quizoptionname">&#97;</span> -->
//                 <input type="radio" name="forcorrect" class="forcorrect"
//                     title="Select Correct Answer" id="option1">
//                 <span class="foroptionsimg" title="Upload Image as Option">
//                     <label for="itemimage"><img class="optionimg" src="../Images/image.png"
//                             alt="upload image"></label>
//                     <input type="file" class="forquizansopt" id="ansoptImage" name="itemimage"
//                         accept="image/*">
//                 </span>
//                 <span class="foroptionsaudio" title="Upload Audio as Option">
//                     <label for="optionaudio"><img class="optionimg optioinimgaudio"
//                             src="../Images/audioOn.png" alt="upload image"></label>
//                     <input type="file" class="forquizansopt" id="ansoptAudio" name="optionaudio"
//                         accept="audio/*">
//                 </span>
//                 <input type="text" placeholder="Enter Answer"
//                     class="upanswer quizoptans forquizansopt" />
//                 <img class="itemimg del delopt" id="ansoptText" onclick="removequizAnsOption(this)" src="../Images/bin.png" alt="delete it"
//                     title="Delete Option">
//             </div>
//         </div>
//     </div>
// `);
//     gameDataContainer.append(newGameData);
//     gameDataCount++;
// }

// function removequizGame(button) {
//     button.closest(".quizgamedata").remove();
// }
// function addquizAnsOption(button) {
//     const answerOptionsContainer = $(button).siblings(".quizansbox");
//     const newAnswerOption = $(`
//     <div class="quizansitem">
//         <input type="radio" name="forcorrect" class="forcorrect"
//             title="Select Correct Answer" id="option1">
//         <span class="foroptionsimg" title="Upload Image as Option">
//             <label for="itemimage"><img class="optionimg" src="../Images/image.png"
//                     alt="upload image"></label>
//             <input type="file" class="forquizansopt" id="ansoptImage" name="itemimage"
//                 accept="image/*">
//         </span>
//         <span class="foroptionsaudio" title="Upload Audio as Option">
//             <label for="optionaudio"><img class="optionimg optioinimgaudio"
//                     src="../Images/audioOn.png" alt="upload image"></label>
//             <input type="file" class="forquizansopt" id="ansoptAudio" name="optionaudio"
//                 accept="audio/*">
//         </span>
//         <input type="text" placeholder="Enter Answer"
//             class="upanswer quizoptans forquizansopt" />
//         <img class="itemimg del delopt" id="ansoptText" onclick="removequizAnsOption(this)" src="../Images/bin.png" alt="delete it"
//             title="Delete Option">
//     </div>
// `);
//     answerOptionsContainer.append(newAnswerOption);
//     answerOptionsCount++;
// }

// function removeAnswerOption(button) {
//     button.closest(".answerOptions").remove();
// }

// const quizform = document.querySelector(".quizform");
// quizform.addEventListener("submit", (event) => {

//     //manage timeup value
//      let istimeup = form.find("#quiz_timeup").val();
//      let passtimeup;
//      if(istimeup){
//        passtimeup = 1;
//      }
//      else{
//        passtimeup = 0;
//     }

//     event.preventDefault();
//     const form = $(this);
//     const title = form.find("#quiz_activitytitle").val();
//     const description = form.find("#quiz_activitydesc").val();
//     const image_url = quizbg;
//     const thumbnail_url = quizthumb;
//     const sound_url = quizsound;
//     const time = form.find("#quiz_time").val();
//     const timeup = passtimeup;
//     const lives = form.find("#quiz_lives").val();
//     const subject = form.find("#quiz_subject").val();
//     const age_min = form.find("#quizagemin").val();
//     const age_max = form.find("#quizagemax").val();
//     const gameDataArray = [];

//     form.find(".quizgamedata").each(function () {
//         const gameData = {
//             questionText: $(this).find(".quizgameQuestion#quizquestionText").val(),
//             questionImage: $(this).find(".quizgameQuestion#quizquestionImage").val(),
//             questionAudio: $(this).find(".quizgameQuestion#quizquestionAudio").val(),
//             answerOptions: []
//         };

//         const answerOptionsContainer = $(this).find(".quizansbox");
//         answerOptionsContainer.find(".quizansitem").each(function () {
//             const answerOption = {
//                 answerImage: $(this).find(".forquizansopt#ansoptImage").val(),
//                 answerText: $(this).find(".forquizansopt#ansoptText").val(),
//                 answerAudio: $(this).find(".forquizansopt#ansoptAudio").val(),
//                 isCorrect: $(this).find(".forquizansopt#ansoptRadio").is(":checked")
//             };
//             gameData.answerOptions.push(answerOption);
//         });

//         gameDataArray.push(gameData);
//     });

//     const formData = { title, description, image_url, thumbnail_url, sound_url, 
//         time, timeup, lives, subject, age_min, age_max, gameData: gameDataArray };
//     const formDataJson = JSON.stringify(formData);
//     console.log(formDataJson);
// });







// function addGameData() {
//     const gameDataContainer = $("#gameData-container");
//     const newGameData = $(`
//     <div class="gameData">
//     <label for="questionText">Question Text:</label>
//     <input type="text" id="questionText" name="questionText" class="gameData-question">
//     <label for="questionImage">Question Image:</label>
//     <input type="file" id="questionImage" name="questionImage" class="gameData-question">
//     <label for="questionAudio">Question Audio:</label>
//     <input type="file" id="questionAudio" name="questionAudio" class="gameData-question">

//     <div class="answerOptions-container">
//         <div class="answerOptions">
//         <label for="answerImage">Answer Image:</label>
//         <input type="file" id="answerImage" name="answerImage" class="answerOptions-answer">
//         <label for="answerText">Answer Text:</label>
//         <input type="text" id="answerText" name="answerText" class="answerOptions-answer">
//         <label for="answerAudio">Answer Audio:</label>
//         <input type="file" id="answerAudio" name="answerAudio" class="answerOptions-answer">
//         <label for="isCorrect">Is Correct:</label>
//         <input type="checkbox" id="isCorrect" name="isCorrect" class="answerOptions-answer">
//         <button type="button" onclick="removeAnswerOption(this)">Remove Answer Option</button>
//         </div>
//     </div>

//     <button type="button" onclick="addAnswerOption(this)">Add Answer Option</button>
//     <button type="button" onclick="removeGameData(this)">Remove Game Data</button>
//     </div>
// `);
//     gameDataContainer.append(newGameData);
//     gameDataCount++;
// }

// function removeGameData(button) {
//     button.closest(".gameData").remove();
// }
// function addAnswerOption(button) {
//     const answerOptionsContainer = $(button).siblings(
//         ".answerOptions-container"
//     );
//     const newAnswerOption = $(`
//     <div class="answerOptions">
//     <h4>Answer Option ${answerOptionsCount + 1}</h4>
//     <label for="answerImage">Answer Image:</label>
//     <input type="file" id="answerImage" name="answerImage" class="answerOptions-answer">
//     <label for="answerText">Answer Text:</label>
//     <input type="text" id="answerText" name="answerText" class="answerOptions-answer">
//     <label for="answerAudio">Answer Audio:</label>
//     <input type="file" id="answerAudio" name="answerAudio" class="answerOptions-answer">
//     <label for="isCorrect">Is Correct:</label>
//     <input type="checkbox" id="isCorrect" name="isCorrect" class="answerOptions-answer">
//     <button type="button" onclick="removeAnswerOption(this)">Remove Answer Option</button>
//     </div>
// `);
//     answerOptionsContainer.append(newAnswerOption);
//     answerOptionsCount++;
// }

// function removeAnswerOption(button) {
//     button.closest(".answerOptions").remove();
// }

// $("#dynamic-form").on("submit", function (event) {
//     event.preventDefault();
//     const form = $(this);
//     const title = form.find("#title").val();
//     const description = form.find("#description").val();
//     const gameDataArray = [];

//     form.find(".gameData").each(function () {
//         const gameData = {
//             questionText: $(this).find(".gameData-question#questionText").val(),
//             questionImage: $(this)
//                 .find(".gameData-question#questionImage")
//                 .val(),
//             questionAudio: $(this)
//                 .find(".gameData-question#questionAudio")
//                 .val(),
//             answerOptions: []
//         };

//         const answerOptionsContainer = $(this).find(
//             ".answerOptions-container"
//         );
//         answerOptionsContainer.find(".answerOptions").each(function () {
//             const answerOption = {
//                 answerImage: $(this)
//                     .find(".answerOptions-answer#answerImage")
//                     .val(),
//                 answerText: $(this)
//                     .find(".answerOptions-answer#answerText")
//                     .val(),
//                 answerAudio: $(this)
//                     .find(".answerOptions-answer#answerAudio")
//                     .val(),
//                 isCorrect: $(this)
//                     .find(".answerOptions-answer#isCorrect")
//                     .is(":checked")
//             };
//             gameData.answerOptions.push(answerOption);
//         });

//         gameDataArray.push(gameData);
//     });

//     const formData = { title, description, gameData: gameDataArray };
//     const formDataJson = JSON.stringify(formData);
//     console.log(formDataJson);
// });

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
//   document.getElementById("quizdelcnf").addEventListener("click",function(){
//     alert("Game Deleted");
//   })
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