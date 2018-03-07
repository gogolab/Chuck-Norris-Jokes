document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
    const number = document.getElementById("number").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.icndb.com/jokes/random/" + number, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = "";

            if (response.type === "success") {
                response.value.forEach(el => {
                    output += `<li>${el.joke}</li>`;
                });
            } else {
                output += "<li>Somenthing went wrong</li>";
            }

            document.querySelector(".jokes").innerHTML = output;
        }
    };

    xhr.onerror = function(e) {
        console.log("error: ", e);
    };

    xhr.send();

    e.preventDefault();
}
