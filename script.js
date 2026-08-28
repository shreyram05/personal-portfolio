fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

const username = "shreyram05";
async function getGithubRepo(repoName, cardId) {

    const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}`
    );

    const repo = await response.json();

    const card = document.getElementById(cardId);

    card.querySelector(".github-link").href = repo.html_url;
}

getGithubRepo("Restaurant-Website", "restaurant");
getGithubRepo("shopease-responsive-website", "shopease");
getGithubRepo("public-weather-api", "weather");