$("#logout-btn").on("click", function (event) {
    event.preventDefault();

    localStorage.clear();
    window.location.href="/";

});