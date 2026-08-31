const username = "shreyram05";


//Fetching GitHub repos and displaying it on projects.html

async function getGithubRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    const container = document.getElementById("project-container");
    repos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "project-card";
        const githubLink = repo.html_url;
        const projectLink = `https://${username}.github.io/${repo.name}/`;
        card.innerHTML = 
            `<h3>${repo.name}</h3>
            <p>${repo.description || "No description available."}</p>
            <div class="project-buttons">
                <a href="${githubLink}"
                   target="_blank"
                   class="btn">
                    GitHub Link
                </a>

                <a href="${projectLink}"
                   target="_blank"
                   class="btn">
                    View Project
                </a>
            </div> `;
        container.appendChild(card);
    });
}
getGithubRepos();