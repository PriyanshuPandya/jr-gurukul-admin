const fcform = document.querySelector(".fcform");
fcform.addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.getElementById("fcform");
    let formData = new FormData(form);
    let gameDataArray = [];
    // Loop through the gameData fields and build the gameDataArray
    let gameDataFields = document.querySelectorAll(".fcgameData");
    console.log(gameDataFields);
    for (var i = 0; i < gameDataFields.length; i++) {
      var fcgame = {
        questionText: gameDataFields[i].querySelector(".fcquestionText").value,
        questionImage: gameDataFields[i].querySelector(".fcquestionImage").value,
        questionAudio: gameDataFields[i].querySelector(".fcquestionAudio").value
      };
      gameDataArray[i]=fcgame;
    //   console.log(gameDataArray[i]);
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
        title:formData.get("fc_activitytitle"),
        image_url:"",
        thumbnail_url:"",
        description:formData.get("fc_activitydesc"),
        sound_url:"",
        time:formData.get("fc_time"),
        timeup:passtimeup,
        lives:formData.get("fc_lives"),
        subject:formData.get("fc_subject"),
        age_group:formData.get("fc_age"),
        gameData: gameDataArray
    };
    // Log the JSON object to the console
    console.log(JSON.stringify(jsonObject));
  });