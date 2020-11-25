class Github{
  constructor(){
    this.client_id = '57e34369452d010abe3f';
    this.client_secret = '66ed6d5f3b40a65c417449420420d0087e851a22';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        

    const profile = await profileResponse.json();
    
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }

}