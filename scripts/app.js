


function openSideBar(){
    hambugerButton.classList.toggle("active")
    sideBar.classList.toggle("active")
    mobileHeader.classList.toggle("active")
}
hambugerButton.addEventListener("click", openSideBar)