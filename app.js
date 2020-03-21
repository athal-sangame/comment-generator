loadRandomComment();

function loadRandomComment() {
    loadJSON(function (response) {
        var comments = JSON.parse(response);
        var comment = comments[Math.floor(Math.random() * comments.length)]
        document.getElementById("athal-text").value = comment.comment;
        document.getElementById("athal-level").innerHTML = comment.awul_level;
       // copyToClipboard()
        console.log(comment)
    });
}


// Load JSON File
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'comments.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function copyToClipboard() {
    var copyText = document.getElementById("athal-text");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    //alert("Copied the text: " + copyText.value);
}
