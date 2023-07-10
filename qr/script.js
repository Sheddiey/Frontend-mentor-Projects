function genQr() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs="
    var myimg = document.getElementById("image");
    var mytext = document.getElementById("qr-text").value;

    if (mytext !== ""){
        myimg.src = gapi + "200x200" + "&chl" + mytext;
    }
    else{
        alert("Please enter text!")
    }
}