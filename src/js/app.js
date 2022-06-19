const submit_btn = document.querySelector(".submit-button");

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

const rating_btns = document.querySelectorAll(".number");

const score = document.querySelector(".score");

let rating = 3;

submit_btn.addEventListener("click", onSubmit);

rating_btns.forEach((btn) => {
    btn.addEventListener("click", handleRating);
});

function onSubmit() {
    score.textContent = rating;
    card1.classList.add("hide");
    card2.classList.remove("hide");
}

function handleRating(e) {
    rating_btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    if (e.target.classList.contains("number")) {
        e.target.classList.add("active");
    } else {
        e.target.parentElement.classList.add("active");
    }

    rating = e.target.textContent;
}
