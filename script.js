//Adding navbar to all the pages in the website

function addNavBar(){
fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });
}

addNavBar()

