const reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

document.querySelector("#review-count").textContent =
    `Total Reviews Submitted: ${reviews.length}`;