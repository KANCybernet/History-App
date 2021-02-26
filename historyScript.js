//alert("Hello world ");

var form = document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
});

document.getElementById("button").addEventListener("click", () => {


    let date = document.getElementById("date").value;
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let day = newDate.getDate();
    let month = newDate.getUTCMonth() + 1;
    let container = document.getElementById("container");

    fetch("http://numbersapi.com/" + month + "/" + day + "/date")
        .then(
            (response) => response.text(),
            (fetchError) => alert("No value returned" + fetchError)
        )
        .then(
            (response) => container.textContent = response,
            (fetchError) => alert("COuld not be processed" + fetchError)
        );




    // container.textContent = month;
})