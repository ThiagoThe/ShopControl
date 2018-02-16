function setConfig() { //Update of title of page
    var texts = {
        "title":"Shopping Control"

    };
    document.title = texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;
}

setConfig();