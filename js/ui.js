class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-5">
        <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-4" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary"> Public repos : ${user.public_repos}</span>
            <span class="badge badge-secondary"> Public Gists : ${user.public_gists}</span>
            <span class="badge badge-success"> Followers : ${user.followers}</span>
            <span class="badge badge-info"> Following : ${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Bolg: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Memeber Since: ${user.created_at}</li>
            </ul>
        </div>
        </div>
        </div> 
        <h3 class="page-heading mb-3"> Last repo </h3>
        <div id="repos"></div>
        
        `;
    }


    //Show 5 repos 

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
             <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary"> Stars : ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary"> Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success"> Forks: ${repo.forks_count}</span>
                    </div>
                </div>
             </div>
            ` ;
        })
        document.getElementById('repos').innerHTML = output ;

    }

    //Show alert message 
    showAlert(message, className) {
        //Remove remining alerts . 
        this.clearAlert();
        //First create div node 
        const div = document.createElement('div');
        // add class name to this node 
        div.className = className;
        // set message 
        div.appendChild(document.createTextNode(message));
        //Get parent 
        const parent = document.querySelector('.searchContainer');
        // Get search box 
        const searchBox = document.querySelector('.search');
        parent.insertBefore(div, searchBox);

        //Remove after 3 seconds 
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    //Remove prevously alert 
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        //If it exist remove it 
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}