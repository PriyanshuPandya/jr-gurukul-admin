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

        // hidemenuitems();
        
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
        // managemenunavigation();

        container.classList.remove('showcontainer');
        container.classList.add('hidecontainer');
        container.style.width = "82%";
        isnavopen = true;
    }  
}

// function hidemenuitems(){
//     menuspinthewheel.style.display = "none";
//     menuquiz.style.display = "none";
//     menumatchfollowing.style.display = "none";
//     menuopenbox.style.display = "none";
//     menuwordformation.style.display = "none";
//     menumissingword.style.display = "none";
//     menuanagram.style.display = "none";
//     menugroupsort.style.display = "none";
//     menufindthematch.style.display = "none";
//     menuflashcards.style.display = "none";
//     menunjumble.style.display = "none";
//     menutrueorfalse.style.display = "none";
// }
function showmenuitems(){
   // menu.onclick=()=>{managemenunavigation()};
    menu.innerHTML = menustatus;
}