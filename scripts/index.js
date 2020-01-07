function toggle_name_visibility(){
    nav = document.getElementById("top-nav");
    nav_title = document.getElementById("top-nav-title")
    if(nav.offsetWidth >= 428)
        nav_title.innerHTML = "Alejandro Schmidt";
    else
        nav_title.innerHTML = "";
}