let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
        if (this.childNodes[1].classList.contains("fa-plus")) {
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        } else {
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        }

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup-container');
    const popupImage = document.getElementById('popup-image');
    const popupButtons = document.querySelectorAll('.popup-btn');
    const closeBtn = document.querySelector('.close-btn');

    popupButtons.forEach(button => {
        button.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-img');
            popupImage.setAttribute('src', imgSrc);
            popupContainer.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });

    popupContainer.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});


