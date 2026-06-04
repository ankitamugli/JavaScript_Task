   let GetSumbtn = document.querySelector("#submit");

        GetSumbtn.addEventListener("click", () => {
            let val1 = Number(document.querySelector("#val1").value);
            let val2 = Number(document.querySelector("#val2").value);

            let para = document.querySelector("#para");

            para.textContent = `Sum is ${val1 + val2}`;
        });

        // Background Color Changer
        let red = document.querySelector("#red");
        let green = document.querySelector("#green");
        let blue = document.querySelector("#blue");

        red.addEventListener("click", () => {
            document.body.style.backgroundColor = "red";
        });

        green.addEventListener("click", () => {
            document.body.style.backgroundColor = "green";
        });

        blue.addEventListener("click", () => {
            document.body.style.backgroundColor = "blue";
        });