function saveReview(event) {

    event.preventDefault();

    const review = {
        product:
            document.querySelector("#productName").value,

        rating:
            document.querySelector("#rating").value,

        comment:
            document.querySelector("#review").value
    };

    const reviews =
        JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push(review);

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

    document.querySelector("#message").textContent =
        "Thank you for submitting your review!";

    event.target.reset();
}

document
    .querySelector("form")
    .addEventListener("submit", saveReview);