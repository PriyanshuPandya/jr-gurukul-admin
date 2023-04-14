let quizbg = "";
let quizthumb = "";
let quizsound = "";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function changequizbg(){
    document.getElementById('quizbgname').innerText = document.getElementById('quizbg').files.item(0).name;
    const file = document.getElementById('quizbg').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        quizbg = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function changequizthumb(){
    document.getElementById('quizthumbname').innerText = document.getElementById('quizthumb').files.item(0).name;
    const file = document.getElementById('quizthumb').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        quizthumb = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}
async function addquizbgaudio(){
    document.getElementById('quizbgaudioname').innerText = document.getElementById('quizbgaudio').files.item(0).name;
    const file = document.getElementById('quizbgaudio').files.item(0);
    await fileToBase64(file)
    .then( base64String => {
        quizsound = base64String;
    })
    .catch(error => {
      console.error(error);
    });
}

// const quiz_additembtn = document.getElementById("quiz_additembtn");
// const quizitems = document.getElementById("quizitems");
// const quizDeleteItemBtns = document.querySelectorAll(".quizdeleteitem");
// const quizDeleteoptionbtns = document.querySelectorAll("delopt");
// const quiz_addoptionBtns = document.querySelector(".quiz_addoption");
// const intialquizanshtml = document.getElementById("intialquizanshtml").innerHTML;
// let noOfItemsquiz = 1;
// let noofansopt = 4;
// let noofopt = 100;
// let quizoptname = String.fromCharCode(noofopt);
// console.log(quizoptname);
// //let quizoptname;
// // quizoptname = String.fromCharCode(noofopt);

// quiz_additembtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const createnewquizitem = document.getElementById("quizitemtocopy");
//   const newquizGameData = createnewquizitem.cloneNode(true); // copy with events
//   createnewquizitem.parentNode.appendChild(newquizGameData);
//   newquizGameData.querySelector(".quizansbox").innerHTMl = intialquizanshtml;
//   newquizGameData.querySelector(".quizItemNo").innerText = noOfItemsquiz + 1;
//   newquizGameData.querySelector(".quizquestionText").value = null;
//   newquizGameData.querySelector(".quizquestionImage").value = null;
//   newquizGameData.querySelector(".quizquestionAudio").value = null;
//   newquizGameData.querySelectorAll(".quizanswerText").value = null;
//   newquizGameData.querySelectorAll(".quizanswerImage").value = null;
//   newquizGameData.querySelectorAll(".quizanswerAudio").value = null;  
//   newquizGameData.querySelector(".forquizdelete").classList.add("quizdeleteitem");
//   newquizGameData.querySelector(".quiz_addoption").addEventListener("click", (event) => {
//     event.preventDefault();
//     quiznewoption();
//   });
//   newquizGameData.querySelector(".quizdeleteitem").addEventListener("click", (event) => {
//     event.preventDefault();
//     const quizItemToRemove = event.target.parentNode.parentNode.parentNode;
//     quizitems.removeChild(quizItemToRemove);
//     updatequizItemNo();
//     });
//   noOfItemsquiz++;
// });

// quizDeleteItemBtns.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.preventDefault();
//     const quizItemToRemove = event.target.parentNode.parentNode.parentNode;
//     quizitems.removeChild(quizItemToRemove);
//     updatequizItemNo();
//     });
// });
// function updatequizItemNo(){
//   const quizAllItemNo = document.querySelectorAll(".quizItemNo");
//   quizAllItemNo.forEach((number, index) => {
//     number.textContent = index + 1;
//   });
//   noOfItemsquiz--;
// };

// quiz_addoptionBtns.onclick=(e)=>{
//   e.preventDefault();
//   const newquizitem = document.getElementById("quizoptcopy");
//     const newquizoption = newquizitem.cloneNode(true); // copy with events
//     newquizitem.parentNode.appendChild(newquizoption);
//     newquizoption.querySelector(".quizanswerText").value = null;
//     newquizoption.querySelector(".quizanswerImage").value = null;
//     newquizoption.querySelector(".quizanswerAudio").value = null;
//     noofopt++;
//     quizoptname = String.fromCharCode(noofopt);
//     newquizoption.querySelector(".optionname").innerText = quizoptname;
// }

// function quiznewoption(){
      
// }

// quizDeleteoptionbtns.forEach((button)=>{
//   button.addEventListener("click", (event) => {
//     event.preventDefault();
//     const quizopttoRemove = event.target.parentNode;
//     quizopttoRemove.parentNode.removeChild(quizopttoRemove);
//   });
// });








// const quizform = document.querySelector(".quizform");
// quizform.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let form = document.getElementById("quizform");
//     let formData = new FormData(form);
//     let gameDataArray = [];
//     // Loop through the gameData fields and build the gameDataArray
//     let gameDataFields = document.querySelectorAll(".quizgamedata");

//     for (var i = 0; i < gameDataFields.length; i++) {
//       var quizgame = {
//         questionText: gameDataFields[i].querySelector(".quizquestionText")?gameDataFields[i].querySelector(".quizquestionText").value:"",
//         questionImage: gameDataFields[i].querySelector(".quizquestionImage")?gameDataFields[i].querySelector(".quizquestionImage").value:"",
//         answerText: gameDataFields[i].querySelector(".quizanswerText")?gameDataFields[i].querySelector(".quizanswerText").value:"",
//         answerImage: gameDataFields[i].querySelector(".quizanswerImage")?gameDataFields[i].querySelector(".quizanswerImage").value:""
//       };
//       gameDataArray[i]=quizgame;
//     }

//     //manage timeup value
//     let istimeup = formData.get("quiz_timeup");
//     let passtimeup;
//     if(istimeup){
//       passtimeup = 1;
//     }
//     else{
//       passtimeup = 0;
//     }

//     // Build the final JSON object
//     const jsonObject = {
//         template_id:3,
//         title:formData.get("quiz_activitytitle"),
//         image_url:"",
//         thumbnail_url:"",
//         description:formData.get("quiz_activitydesc"),
//         sound_url:"",
//         time:formData.get("quiz_time"),
//         timeup:passtimeup,
//         lives:formData.get("quiz_lives"),
//         subject:formData.get("quiz_subject"),
//         age_group:formData.get("quiz_age"),
//         gameData: gameDataArray
//     };
//     // Log the JSON object to the console
//     console.log(JSON.stringify(jsonObject));
//   });


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




function addGameData(e) {
    e.preventDefault();
    const gameDataContainer = $("#quizgamecontainer");
    const newGameData = $(`
    <div class="quizgamedata" id="quizgamedata">
        <div class="queheading qaheading">Question</div>

        <div class="quizquebox">
            <p class="quizItemNo">1</p>
            <span class="itembox quizitembox">
                <span class="forimage" id="forimage" title="Upload Image">
                    <label for="itemimage"><img class="itemimg" id="upimg"
                            src="../Images/image.png" alt="upload image"></label>
                    <input type="file" class="quizgameQuestion" id="quizquestionImage"
                        name="quizquestionImage"
                        accept="image/*"><!--onchange="getquizimgname()-->
                </span>
                <span class="foraudio" id="foraudio" title="Upload Instruction Audio">
                    <label for="itemaudio"><img class="itemimg upaudio"
                            src="../Images/audioOn.png" alt="upload image"></label>
                    <input type="file" class="quizgameQuestion" id="quizquestionAudio"
                        name="quizquestionAudio"
                        accept="audio/*"><!--onchange="getquizaudioname()"-->
                </span>
                <input type="text" id="quizquestionText" name="quizquestionText" placeholder="Enter Question"
                    class="upquestion quizupque quizgameQuestion"/>
            </span>
        </div>

        <div class="foropt">
            <button type="button" id="addnewoption" onclick="" class="addbtn quiz_addoption">Add
                Option</button>
        </div>

        <div class="ansheading qaheading">Answers</div>

        <div class="quizansbox">
            <div class="quizansitem">
                <!-- <span class="optionname">&#97;</span> -->
                <input type="radio" name="forcorrect" class="forcorrect"
                    title="Select Correct Answer" id="option1">
                <span class="foroptionsimg" title="Upload Image as Option">
                    <label for="itemimage"><img class="optionimg" src="../Images/image.png"
                            alt="upload image"></label>
                    <input type="file" class="forquizansopt" id="ansoptImage" name="itemimage"
                        accept="image/*">
                </span>
                <span class="foroptionsaudio" title="Upload Audio as Option">
                    <label for="optionaudio"><img class="optionimg optioinimgaudio"
                            src="../Images/audioOn.png" alt="upload image"></label>
                    <input type="file" class="forquizansopt" id="ansoptAudio" name="optionaudio"
                        accept="audio/*">
                </span>
                <input type="text" placeholder="Enter Answer"
                    class="upanswer quizoptans forquizansopt" />
                <img class="itemimg del delopt" id="ansoptText" onclick="removequizAnsOption(this)" src="../Images/bin.png" alt="delete it"
                    title="Delete Option">
            </div>
        </div>
    </div>
`);
    gameDataContainer.append(newGameData);
    gameDataCount++;
}

function removequizGame(button) {
    button.closest(".quizgamedata").remove();
}
function addquizAnsOption(button) {
    const answerOptionsContainer = $(button).siblings(".quizansbox");
    const newAnswerOption = $(`
    <div class="quizansitem">
        <input type="radio" name="forcorrect" class="forcorrect"
            title="Select Correct Answer" id="option1">
        <span class="foroptionsimg" title="Upload Image as Option">
            <label for="itemimage"><img class="optionimg" src="../Images/image.png"
                    alt="upload image"></label>
            <input type="file" class="forquizansopt" id="ansoptImage" name="itemimage"
                accept="image/*">
        </span>
        <span class="foroptionsaudio" title="Upload Audio as Option">
            <label for="optionaudio"><img class="optionimg optioinimgaudio"
                    src="../Images/audioOn.png" alt="upload image"></label>
            <input type="file" class="forquizansopt" id="ansoptAudio" name="optionaudio"
                accept="audio/*">
        </span>
        <input type="text" placeholder="Enter Answer"
            class="upanswer quizoptans forquizansopt" />
        <img class="itemimg del delopt" id="ansoptText" onclick="removequizAnsOption(this)" src="../Images/bin.png" alt="delete it"
            title="Delete Option">
    </div>
`);
    answerOptionsContainer.append(newAnswerOption);
    answerOptionsCount++;
}

function removeAnswerOption(button) {
    button.closest(".answerOptions").remove();
}

const quizform = document.querySelector(".quizform");
quizform.addEventListener("submit", (event) => {

    //manage timeup value
     let istimeup = form.find("#quiz_timeup").val();
     let passtimeup;
     if(istimeup){
       passtimeup = 1;
     }
     else{
       passtimeup = 0;
    }

    event.preventDefault();
    const form = $(this);
    const title = form.find("#quiz_activitytitle").val();
    const description = form.find("#quiz_activitydesc").val();
    const image_url = quizbg;
    const thumbnail_url = quizthumb;
    const sound_url = quizsound;
    const time = form.find("#quiz_time").val();
    const timeup = passtimeup;
    const lives = form.find("#quiz_lives").val();
    const subject = form.find("#quiz_subject").val();
    // const age_group = form.find("#quiz_age").val();
    const age_min = form.find("#quizagemin").val();
    const age_max = form.find("#quizagemax").val();
    const gameDataArray = [];

    form.find(".quizgamedata").each(function () {
        const gameData = {
            questionText: $(this).find(".quizgameQuestion#quizquestionText").val(),
            questionImage: $(this).find(".quizgameQuestion#quizquestionImage").val(),
            questionAudio: $(this).find(".quizgameQuestion#quizquestionAudio").val(),
            answerOptions: []
        };

        const answerOptionsContainer = $(this).find(".quizansbox");
        answerOptionsContainer.find(".quizansitem").each(function () {
            const answerOption = {
                answerImage: $(this).find(".forquizansopt#ansoptImage").val(),
                answerText: $(this).find(".forquizansopt#ansoptText").val(),
                answerAudio: $(this).find(".forquizansopt#ansoptAudio").val(),
                isCorrect: $(this).find(".forquizansopt#ansoptRadio").is(":checked")
            };
            gameData.answerOptions.push(answerOption);
        });

        gameDataArray.push(gameData);
    });

    const formData = { title, description, image_url, thumbnail_url, sound_url, 
        time, timeup, lives, subject, age_min, age_max, gameData: gameDataArray };
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson);
});







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
  document.getElementById("quizdelcnf").addEventListener("click",function(){
    alert("Game Deleted");
  })
};

function hidequizGameDelPopup(){
  document.getElementById("forquizdelgame").style.display = "none";
  document.getElementById("quiz").style.opacity = 1;
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("nav").style.opacity = 1;
}