//show name
function promptName() {
    let name = prompt("Siapakah namamu?", "");
    document.getElementById("username").innerHTML = name
}

document.addEventListener("DOMContentLoaded", function() {
    promptName();
})

document.getElementById("changeName").addEventListener("click", function() {
    promptName();
})

//banner autoslide
let indexSlide = 1;
showSlide(1 );

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    let listImage = document.getElementsByClassName("photo-banner");
    console.log(indexSlide);

    if (index > listImage.length) indexSlide = 1;
    
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = "none";
        i++;
    }
    listImage[indexSlide - 1].style.display = "block";
    console.log(listImage);
}

setInterval(() => nextSlide(1), 3000)


//form validation
function validateForm() {
    let inputName = document.getElementById("form-name").value;
    let inputDOB = document.getElementById("form-dob").value;

    let inputGender = document.querySelector('input[name="gender"]:checked');
    let genderValue = inputGender ? inputGender.value : ""; // Get value if checked, otherwise empty string

    let inputMessage = document.getElementById("form-message").value;
    if (inputName === "" || inputDOB === "" || genderValue === "" || inputMessage === "") {
        alert("Harap mengisi semua formulir");
        return false;
    }
    else {
        alert("Sukses submit form!");
        return true;
    }
}

function liveMessage() {
    //get value
    const formDisplayName = document.getElementById("form-name").value;
    const formDOB = document.getElementById("form-dob").value;

    //selected gender
    const genderElements = document.getElementsByName("gender");
    let formGender = "";
    for (const gender of genderElements) {
        if (gender.checked) {
            formGender = gender.value;
            break;
        }
    }

    const formMessage = document.getElementById("form-message").value;

    //adding time
    const date = new Date();

    document.getElementById("display-date").innerHTML = date;
    document.getElementById("display-name").innerHTML = formDisplayName;
    document.getElementById("display-dob").innerHTML = formDOB;
    document.getElementById("display-gender").innerHTML = formGender;
    document.getElementById("display-message").innerHTML = formMessage;
}

document.getElementById("formResult").addEventListener("click", function() {
    if (validateForm()) {
        liveMessage();
    }
})