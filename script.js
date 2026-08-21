
function display() {

    const html = document.getElementById("html").value;
    const css = document.getElementById("css").value;
    const js = document.getElementById("js").value;

    const output = document.getElementById("output");
    const editbox = document.querySelector(".editbox");

    output.style.display = "block";
    editbox.style.display = "none";

    output.srcdoc = `
        <!DOCTYPE html>

        <html>

        <head>

            <meta charset="UTF-8">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            >

            <style>
                ${css}
            </style>

        </head>

        <body>

            ${html}

            <script>
                ${js}
            <\/script>

        </body>

        </html>
    `;
}

document
    .getElementById("run")
    .addEventListener("click", display);

document
    .getElementById("code")
    .addEventListener("click", () => {

        const output = document.getElementById("output");
        const editbox = document.querySelector(".editbox");

        output.style.display = "none";
        editbox.style.display = "";

    });

function downloadCode() {

    const html = document.getElementById("html").value;
    const css = document.getElementById("css").value;
    const js = document.getElementById("js").value;


    const completeCode = `
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>My Web Page</title>

    <style>

        ${css}

    </style>

</head>

<body>

    ${html}

    <script>

        ${js}

    <\/script>

</body>

</html>
`;


    const blob = new Blob(
        [completeCode],
        {
            type: "text/html"
        }
    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href = url;

    let filename = prompt(
        "Enter file name:"
    );


    /* Default filename */

    if (!filename || filename.trim() === "") {

        filename = "index";

    }


    /* Remove .html if user already entered it */

    filename = filename.replace(
        /\.html$/i,
        ""
    );


    link.download = `${filename}.html`;


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    /* Clean URL */

    URL.revokeObjectURL(url);
}


/* =========================================
   DOWNLOAD BUTTON
========================================= */

document
    .getElementById("download")
    .addEventListener(
        "click",
        downloadCode
    );


/* =========================================
   THEME TOGGLE
========================================= */

const editors = [

    document.getElementById("html"),

    document.getElementById("css"),

    document.getElementById("js")

];


const mode = document.getElementById("mode");


/*
   Load saved theme
*/

const savedTheme =
    localStorage.getItem("editorTheme");


if (savedTheme === "dark") {

    editors.forEach((area) => {

        area.classList.add("dark-mode");

    });

    mode.textContent = "Light";

} else {

    mode.textContent = "Dark";

}


/*
   Theme button
*/

mode.addEventListener("click", () => {

    const isDark =
        editors[0].classList.toggle(
            "dark-mode"
        );


    /*
       Apply same theme to all editors
    */

    editors.slice(1).forEach((area) => {

        area.classList.toggle(
            "dark-mode",
            isDark
        );

    });


    /*
       Change button text
    */

    if (isDark) {

        mode.textContent = "Light";

        localStorage.setItem(
            "editorTheme",
            "dark"
        );

    } else {

        mode.textContent = "Dark";

        localStorage.setItem(
            "editorTheme",
            "light"
        );

    }

});

