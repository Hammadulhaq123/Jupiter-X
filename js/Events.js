

//Feature dropdown open and close
const feature = document.querySelector(".nav-item1");
feature.addEventListener('click', () => {
    const featurePopup = document.querySelector(".feature-popup");
    const widgetPopup = document.querySelector(".widgets-popup");
    const themePopup = document.querySelector(".theme-popup");

    const featurePopupStyle = featurePopup.style.display;

    featurePopupStyle == "flex" ? featurePopup.style.display = "none" : featurePopup.style.display = "flex"; widgetPopup.style.display = "none"; themePopup.style.display = "none";

})

// Widget Item Dropdown open and close:
const widget = document.querySelector(".nav-item2");
widget.addEventListener('click', () => {
    const widgetPopup = document.querySelector(".widgets-popup");
    const featurePopup = document.querySelector(".feature-popup");
    const themePopup = document.querySelector(".theme-popup");

    const widgetPopupStyle = widgetPopup.style.display;

    widgetPopupStyle == "flex" ? widgetPopup.style.display = "none" : widgetPopup.style.display = "flex"; featurePopup.style.display = "none"; themePopup.style.display = "none";
})

// Theme Item Dropdown open and close:
const theme = document.querySelector(".nav-item3");
theme.addEventListener('click', () => {
    const themePopup = document.querySelector(".theme-popup");
    const featurePopup = document.querySelector(".feature-popup");
    const widgetPopup = document.querySelector(".widgets-popup");

    const themePopupStyle = themePopup.style.display;

    themePopupStyle == "flex" ? themePopup.style.display = "none" : themePopup.style.display = "flex"; featurePopup.style.display = "none"; widgetPopup.style.display = "none";
})


//Close Popup:

const close1 = document.querySelector(".close-popup1");
close1.addEventListener('click', () => {
    const featurePopup = document.querySelector(".feature-popup");
    featurePopup.style.display = "none";
})
const close2 = document.querySelector(".close-popup2");
close2.addEventListener('click', () => {
    const widgetPopup = document.querySelector(".widgets-popup");
    widgetPopup.style.display = "none";

})
const close3 = document.querySelector(".close-popup3");
close3.addEventListener('click', () => {
    const themePopup = document.querySelector(".theme-popup");
    themePopup.style.display = "none";

})

