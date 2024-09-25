function promptName() {
    let name = prompt("Siapakah namamu?", "");
    console.log(name)
    document.getElementById("username").innerHTML = name
}

document.addEventListener("DOMContentLoaded", function() {
    promptName();
})

document.getElementById("changeName").addEventListener("click", function() {
    promptName();
})

function validateForm() {
    let inputName = document.getElementById("input-name").value;
    if (inputName == "") {
        alert("Inputan kosong");
    }
    else {
        document.getElementById("result-form").innerHTML = inputName;
        alert("Sukses submit form!")
    }
}

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