// Function for show and hide password

const password = document.getElementById("password");

let state = false;
const toogle = () => {
    if (state) {
        // console.log("password");
        password.setAttribute("type", "password");
        state = false;
        // change icon from eye-slash to eye
        document.getElementById("openEye").style.display = "block"
        document.getElementById("closeEye").style.display = "none"
    } else {
        // console.log("text");
        password.setAttribute("type", "text");
        // change icon from eye to eye-slash
        document.getElementById("openEye").style.display = "none"
        document.getElementById("closeEye").style.display = "block"
        state = true;
    }
}

// Function to prevent reload the page on form submit

const formControl = () => {
    event.preventDefault();
    console.log("Form clicked!");
}