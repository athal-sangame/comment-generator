loadRandomComment();

function loadRandomComment(selected_awul_level) {
    console.log(selected_awul_level)
    loadJSON(function (response) {
        var comments = JSON.parse(response);
        var comment = comments[0]
        do{
            comment = comments[Math.floor(Math.random() * comments.length)]
        }
        while(comment.awul_level != selected_awul_level);
        document.getElementById("athal-text").value = comment.comment;
        document.getElementById("copybtn").innerHTML = "<i class='fa fa-copy'></i> Copy";
        var color = '#007bff'
        var level = comment.awul_level
        switch (comment.awul_level.toLowerCase()) {
            case 'poddak': color = "#daab1f"; level = "පොඩ්ඩක් විතර"; break;
            case 'shape': color = "#28a745"; level = "ශේප්"; break;
            case 'kunuharapa': color = "#dc3545"; level = "කුණුහරප"; break;
        }
        document.getElementById("athal-level").innerHTML = level;
        document.getElementById("athal-level").style.backgroundColor = color;
        document.getElementById("athal-comments-count").innerHTML = comments.length;
        console.log(comment);

        gtag('event', 'load_comment', {
            'event_category': 'Buttons',
            'event_label': 'Load Comment'
        });
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
    document.getElementById("copybtn").innerHTML = "<i class='fa fa-copy'></i> Copied";
    gtag('event', 'copy_comment', {
        'event_category': 'Buttons',
        'event_label': 'Copy Comment'
    });    
    //alert("Copied the text: " + copyText.value);
}
