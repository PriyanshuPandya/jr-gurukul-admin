function intaialize(){
    let menuspinthewheel = document.getElementById('menuspinthewheel');
    let menuquiz = document.getElementById('menuquiz');
    let menumatchfollowing = document.getElementById('menumatchfollowing');
    let menuopenbox = document.getElementById('menuopenbox');
    let menuwordformation = document.getElementById('menuwordformation');
    let menumissingword = document.getElementById('menumissingword');
    let menuanagram = document.getElementById('menuanagram');
    let menugroupsort = document.getElementById('menugroupsort');
    let menufindthematch = document.getElementById('menufindthematch');
    let menuflashcards = document.getElementById('menuflashcards');
    let menunjumble = document.getElementById('menunjumble');
    let menutrueorfalse = document.getElementById('menutrueorfalse');

    let spinthewheel = document.getElementById('spinthewheel');
    let quiz = document.getElementById('quiz');
    let matchthefollowing = document.getElementById('matchthefollowing');
    let openbox = document.getElementById('openbox');
    let wordformation = document.getElementById('wordformation');
    let missingword = document.getElementById('missingword');
    let anagram = document.getElementById('anagram');
    let groupsort = document.getElementById('groupsort');
    let findthematch = document.getElementById('findthematch');
    let flashcards = document.getElementById('flashcards');
    let unjumble = document.getElementById('unjumble');
    let trueorfalse = document.getElementById('trueorfalse');

    let spinthewheelgames = document.getElementById('spinthewheelgames');
    let quizgames = document.getElementById('quizgames');
    let matchthefollowinggames = document.getElementById('matchthefollowinggames');
    let openboxgames = document.getElementById('openboxgames');
    let wordformationgames = document.getElementById('wordformationgames');
    let missingwordgames = document.getElementById('missingwordgames');
    let anagramgames = document.getElementById('anagramgames');
    let groupsortgames = document.getElementById('groupsortgames');
    let findthematchgames = document.getElementById('findthematchgames');
    let flashcardsgames = document.getElementById('flashcardsgames');
    let unjumblegames = document.getElementById('unjumblegames');
    let trueorfalsegames = document.getElementById('trueorfalsegames');

    let gotospin = document.getElementById("gotospin");
    let gotoquiz = document.getElementById("gotoquiz");
    let gotomtf = document.getElementById("gotomtf");
    let gotootb = document.getElementById("gotootb");
    let gotowf = document.getElementById("gotowf");
    let gotomw = document.getElementById("gotomw");
    let gotoagm = document.getElementById("gotoagm");
    let gotogs = document.getElementById("gotogs");
    let gotoftm = document.getElementById("gotoftm");
    let gotofc = document.getElementById("gotofc");
    let gotounjb = document.getElementById("gotounjb");
    let gototof = document.getElementById("gototof");


    let formuserlist = document.getElementById('formuserlist');
    let menuuserlist = document.getElementById('menuuserlist');

    let formpaymentslist = document.getElementById('formpaymentslist');
    let menupayments = document.getElementById('menupayments');
}

function managemenunavigation(){

    intaialize();

    menuspinthewheel.onclick=()=>{
        //for navbar
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');
    
        menuspinthewheel.classList.add('selectedgame');
    
        //for main-form
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";
    
        spinthewheel.style.display = "block";
    
        //change title
        document.title = "Admin - Spin The Wheel";
    }

    menuquiz.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menuquiz.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        quiz.style.display = "block";

        //change title
        document.title = "Admin - Quiz";
    }

    menumatchfollowing.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menumatchfollowing.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        matchthefollowing.style.display = "block";

        //change title
        document.title = "Admin - Match The Following";
    }

    menuopenbox.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menuopenbox.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        openbox.style.display = "block";

        //change title
        document.title = "Admin - Open the Box";
    }

    menuwordformation.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menuwordformation.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        wordformation.style.display = "block";

        //change title
        document.title = "Admin - Word Formation";
    }

    menumissingword.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menumissingword.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        missingword.style.display = "block";

        //change title
        document.title = "Admin - Missing Word";
    }

    menuanagram.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menuanagram.classList.add('selectedgame');

        //for main-form    
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        anagram.style.display = "block";

        //change title
        document.title = "Admin - Anagram";
    }

    menugroupsort.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menugroupsort.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        groupsort.style.display = "block";

        //change title
        document.title = "Admin - Group Sort";
    }

    menufindthematch.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menufindthematch.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        findthematch.style.display = "block";

        //change title
        document.title = "Admin - Find the Match";
    }

    menuflashcards.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menuflashcards.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        unjumble.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        flashcards.style.display = "block";

        //change title
        document.title = "Admin - Flash Cards";
    }

    menunjumble.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menutrueorfalse.classList.remove('selectedgame');

        menunjumble.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        trueorfalse.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        unjumble.style.display = "block";

        //change title
        document.title = "Admin - Ujumble";
    }

    menutrueorfalse.onclick=()=>{
        //for navbar
        menuspinthewheel.classList.remove('selectedgame');
        menuquiz.classList.remove('selectedgame');
        menumatchfollowing.classList.remove('selectedgame');
        menuopenbox.classList.remove('selectedgame');
        menuwordformation.classList.remove('selectedgame');
        menumissingword.classList.remove('selectedgame');
        menuanagram.classList.remove('selectedgame');
        menugroupsort.classList.remove('selectedgame');
        menufindthematch.classList.remove('selectedgame');
        menuflashcards.classList.remove('selectedgame');
        menunjumble.classList.remove('selectedgame');

        menutrueorfalse.classList.add('selectedgame');

        //for main-form
        spinthewheel.style.display = "none";
        quiz.style.display = "none";
        matchthefollowing.style.display = "none";
        openbox.style.display = "none";
        wordformation.style.display = "none";
        missingword.style.display = "none";
        anagram.style.display = "none";
        groupsort.style.display = "none";
        findthematch.style.display = "none";
        flashcards.style.display = "none";
        unjumble.style.display = "none";

        spinthewheelgames.style.display = "none";
        quizgames.style.display = "none";
        matchthefollowinggames.style.display = "none";
        openboxgames.style.display = "none";
        wordformationgames.style.display = "none";
        missingwordgames.style.display = "none";
        anagramgames.style.display = "none";
        groupsortgames.style.display = "none";
        findthematchgames.style.display = "none";
        flashcardsgames.style.display = "none";
        unjumblegames.style.display = "none";
        trueorfalsegames.style.display = "none";

        // formuserlist.style.display = "none";
        // formpaymentslist.style.display = "none";

        trueorfalse.style.display = "block";

        //change title
        document.title = "Admin - True or False";
    }



    // menuuserlist.onclick=()=>{
    //     //for navbar
    //     menuspinthewheel.classList.remove('selectedgame');
    //     menuquiz.classList.remove('selectedgame');
    //     menumatchfollowing.classList.remove('selectedgame');
    //     menuopenbox.classList.remove('selectedgame');
    //     menuwordformation.classList.remove('selectedgame');
    //     menumissingword.classList.remove('selectedgame');
    //     menuanagram.classList.remove('selectedgame');
    //     menugroupsort.classList.remove('selectedgame');
    //     menufindthematch.classList.remove('selectedgame');
    //     menuflashcards.classList.remove('selectedgame');
    //     menunjumble.classList.remove('selectedgame');
    //     menutrueorfalse.classList.remove('selectedgame');

    //     //for gamelists-form
    //     spinthewheel.style.display = "none";
    //     quiz.style.display = "none";
    //     matchthefollowing.style.display = "none";
    //     openbox.style.display = "none";
    //     wordformation.style.display = "none";
    //     missingword.style.display = "none";
    //     anagram.style.display = "none";
    //     groupsort.style.display = "none";
    //     findthematch.style.display = "none";
    //     flashcards.style.display = "none";
    //     unjumble.style.display = "none";
    //     trueorfalse.style.display = "none";

    //     //for main-games
    //     spinthewheelgames.style.display = "none";
    //     quizgames.style.display = "none";
    //     matchthefollowinggames.style.display = "none";
    //     openboxgames.style.display = "none";
    //     wordformationgames.style.display = "none";
    //     missingwordgames.style.display = "none";
    //     anagramgames.style.display = "none";
    //     groupsortgames.style.display = "none";
    //     findthematchgames.style.display = "none";
    //     flashcardsgames.style.display = "none";
    //     unjumblegames.style.display = "none";
    //     trueorfalsegames.style.display = "none";

    //     formpaymentslist.style.display = "none";

    //     formuserlist.style.display = "block";

    //     //hidetempitems();

    //     //change title
    //     document.title = "Admin - UserList";
    // }

    // menupayments.onclick=()=>{
    //     //for navbar
    //     menuspinthewheel.classList.remove('selectedgame');
    //     menuquiz.classList.remove('selectedgame');
    //     menumatchfollowing.classList.remove('selectedgame');
    //     menuopenbox.classList.remove('selectedgame');
    //     menuwordformation.classList.remove('selectedgame');
    //     menumissingword.classList.remove('selectedgame');
    //     menuanagram.classList.remove('selectedgame');
    //     menugroupsort.classList.remove('selectedgame');
    //     menufindthematch.classList.remove('selectedgame');
    //     menuflashcards.classList.remove('selectedgame');
    //     menunjumble.classList.remove('selectedgame');
    //     menutrueorfalse.classList.remove('selectedgame');

    //     //for gamelists-form
    //     spinthewheel.style.display = "none";
    //     quiz.style.display = "none";
    //     matchthefollowing.style.display = "none";
    //     openbox.style.display = "none";
    //     wordformation.style.display = "none";
    //     missingword.style.display = "none";
    //     anagram.style.display = "none";
    //     groupsort.style.display = "none";
    //     findthematch.style.display = "none";
    //     flashcards.style.display = "none";
    //     unjumble.style.display = "none";
    //     trueorfalse.style.display = "none";

    //     //for main-games
    //     spinthewheelgames.style.display = "none";
    //     quizgames.style.display = "none";
    //     matchthefollowinggames.style.display = "none";
    //     openboxgames.style.display = "none";
    //     wordformationgames.style.display = "none";
    //     missingwordgames.style.display = "none";
    //     anagramgames.style.display = "none";
    //     groupsortgames.style.display = "none";
    //     findthematchgames.style.display = "none";
    //     flashcardsgames.style.display = "none";
    //     unjumblegames.style.display = "none";
    //     trueorfalsegames.style.display = "none";

    //     formpaymentslist.style.display = "block";

    //     formuserlist.style.display = "none";
    //     //change title
    //     document.title = "Admin - UserList";
    // }

}

//Show Main Game Page
gotospin.onclick=()=>{
    //for navbar
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.add('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    wordformationgames.style.display = "none";
    missingwordgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    spinthewheelgames.style.display = "block";
}

gotoquiz.onclick=()=>{
    menuquiz.classList.add('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    wordformationgames.style.display = "none";
    missingwordgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    quizgames.style.display = "block";
}

gotomtf.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.add('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    openboxgames.style.display = "none";
    wordformationgames.style.display = "none";
    missingwordgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    matchthefollowinggames.style.display = "block";
}

gotootb.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.add('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    wordformationgames.style.display = "none";
    missingwordgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    openboxgames.style.display = "block";
}

gotowf.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.add('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    missingwordgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    wordformationgames.style.display = "block";
}

gotomw.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.add('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    wordformationgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";
    
    missingwordgames.style.display = "block";
}

gotoagm.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.add('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    missingwordgames.style.display = "none";
    wordformationgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";
    
    anagramgames.style.display = "block";
}

gotogs.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.add('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    missingwordgames.style.display = "none";
    wordformationgames.style.display = "none";
    anagramgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    groupsortgames.style.display = "block";
}

gotoftm.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.add('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    missingwordgames.style.display = "none";
    wordformationgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    findthematchgames.style.display = "block";
}

gotofc.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.add('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    missingwordgames.style.display = "none";
    wordformationgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    unjumblegames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    flashcardsgames.style.display = "block";
}

gotounjb.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.add('selectedgame');
    menutrueorfalse.classList.remove('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    missingwordgames.style.display = "none";
    wordformationgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    trueorfalsegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    unjumblegames.style.display = "block";
}

gototof.onclick=()=>{
    menuquiz.classList.remove('selectedgame');
    menumatchfollowing.classList.remove('selectedgame');
    menuopenbox.classList.remove('selectedgame');
    menuwordformation.classList.remove('selectedgame');
    menumissingword.classList.remove('selectedgame');
    menuanagram.classList.remove('selectedgame');
    menugroupsort.classList.remove('selectedgame');
    menufindthematch.classList.remove('selectedgame');
    menuflashcards.classList.remove('selectedgame');
    menunjumble.classList.remove('selectedgame');
    menutrueorfalse.classList.add('selectedgame');
    menuspinthewheel.classList.remove('selectedgame');

    //for main-formdis
    spinthewheel.style.display = "none";
    quiz.style.display = "none";
    matchthefollowing.style.display = "none";
    openbox.style.display = "none";
    wordformation.style.display = "none";
    missingword.style.display = "none";
    anagram.style.display = "none";
    groupsort.style.display = "none";
    findthematch.style.display = "none";
    flashcards.style.display = "none";
    unjumble.style.display = "none";
    trueorfalse.style.display = "none";

    spinthewheelgames.style.display = "none";
    quizgames.style.display = "none";
    matchthefollowinggames.style.display = "none";
    openboxgames.style.display = "none";
    missingwordgames.style.display = "none";
    wordformationgames.style.display = "none";
    anagramgames.style.display = "none";
    groupsortgames.style.display = "none";
    findthematchgames.style.display = "none";
    flashcardsgames.style.display = "none";
    unjumblegames.style.display = "none";

    // formuserlist.style.display = "none";
    // formpaymentslist.style.display = "none";

    trueorfalsegames.style.display = "block";
}

//handle show and hide of main menu
let hammenublue = document.getElementById('hammenublue');
let isnavopen = true;
let menu= document.getElementById('menu');
let container = document.getElementById('container');
let menustatus;


hammenublue.onclick=()=>{
    if(isnavopen){
        menustatus = menu.innerHTML;
        hammenublue.title = "Show Navbar"
        menu.classList.remove('hidemenu');
        menu.classList.add('showmenu');
        menu.style.height = "0%";

        hidemenuitems();
        
        container.classList.remove('hidecontainer');
        container.classList.add('showcontainer');
        container.style.width = "90%";

        isnavopen = false;
    }
    else{
        hammenublue.title = "Hide Navbar"
        menu.classList.remove('showmenu');
        menu.classList.add('hidemenu');
        menu.style.height = "100%";

        showmenuitems();
        managemenunavigation();

        container.classList.remove('showcontainer');
        container.classList.add('hidecontainer');
        container.style.width = "82%";
        isnavopen = true;
    }  
}

function hidemenuitems(){
    menuspinthewheel.style.display = "none";
    menuquiz.style.display = "none";
    menumatchfollowing.style.display = "none";
    menuopenbox.style.display = "none";
    menuwordformation.style.display = "none";
    menumissingword.style.display = "none";
    menuanagram.style.display = "none";
    menugroupsort.style.display = "none";
    menufindthematch.style.display = "none";
    menuflashcards.style.display = "none";
    menunjumble.style.display = "none";
    menutrueorfalse.style.display = "none";
}
function showmenuitems(){
    menu.onclick=()=>{managemenunavigation()};
    menu.innerHTML = menustatus;
}

//handle template items
let menutemplates = document.getElementById('menutemplates');
let tempdown = document.getElementById('tempdown');
let gamestatus;
let istempopen = true;
let gameheight;

menutemplates.onclick=()=>{
    managetemplates();
}
function managetemplates(){
    if(istempopen){

        gamestatus = games.innerHTML;
        gameheight = games.style.height;
        games.classList.remove('hidemenu');
        games.classList.add('showmenu');
        games.style.height = "0%";

        hidemenuitems();

        istempopen = false;
    }
    else{
        games.classList.remove('showmenu');
        games.classList.add('hidemenu');
        games.style.height = gameheight;

        showtempitems();

        istempopen = true;
    }
}

function showtempitems(){
    games.innerHTML = gamestatus;
}

function hidetempitems(){
    gamestatus = games.innerHTML;
    gameheight = games.style.height;
    games.classList.remove('hidemenu');
    games.classList.add('showmenu');
    games.style.height = "0%";

    hidemenuitems();

    istempopen = false;
}


//generic functon for Create-Game Success flash message
// export function showSuccessFlashMsg() {
//     const flashMessage = document.createElement("div");
//     flashMessage.classList.add("flashsuccess");
//     flashMessage.textContent = "Game Added Successfully";
//     document.getElementById("flashsuccess").appendChild(flashMessage);
//     setTimeout(function() {
//       flashMessage.remove();
//     }, 3000); // Set the timeout for the message to be displayed (in milliseconds)
// }