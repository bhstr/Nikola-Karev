function toggleProfesori() {
    var profesoriSection = document.getElementById("profesoriSection");
    if (profesoriSection.style.display === "none") {
        profesoriSection.style.display = "block";
    } else {
        profesoriSection.style.display = "none";
    }
}


function toggleProfesori1() {
    var profesoriSection = document.getElementById("profesoriSection1");
    if (profesoriSection.style.display === "none") {
        profesoriSection.style.display = "block";
    } else {
        profesoriSection.style.display = "none";
    }
}


function toggleProfesori() {
    var profesoriSection = document.getElementById("profesoriSection");
    if (profesoriSection.style.display === "none" || profesoriSection.style.display === "") {
        profesoriSection.style.display = "block";
    } else {
        profesoriSection.style.display = "none";
    }
    checkScrollButtonVisibility();
}

function checkScrollButtonVisibility() {
    var scrollTopButton = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

window.onscroll = function() {
    checkScrollButtonVisibility();
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}











