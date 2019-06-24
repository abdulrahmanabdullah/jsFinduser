//Base Url 
// https://api.github.com/users/a?client_id=904278fef1973d603e08&client_secret=3b7704643ad09bd3fa7380aa6d16a13ed9631b30
class Github {
    constructor() {
        this.client_id = "904278fef1973d603e08";
        this.client_secret = "3b7704643ad09bd3fa7380aa6d16a13ed9631b30";
        this.repo_count = 5; // Get last repos 
        this.repo_sort = 'created;asc';
    }

    async getUser(user) {
        const profileResponse =
            await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //Fetch last repos .. 
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repo_count}&sort=${this.repo_sort}`)
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}