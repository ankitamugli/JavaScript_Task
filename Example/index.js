let button = document.querySelector("#btn");

        button.addEventListener("click", () => {
            let input = document.querySelector("#input").value;

            if (input === "") return;

            let li = document.createElement("li");
            li.textContent = input;

            document.querySelector("#list").appendChild(li);

            document.querySelector("#input").value = "";
        });