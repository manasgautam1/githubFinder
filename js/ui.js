class UI{


  displayProfile(user){
  const profile = document.querySelector('#profile');
  profile.innerHTML = `
  <div class="container card card-body p-3">
    <div class="row">
      <div class="col-md-3 m-2">
        <img class="img-fluid mb-3" src="${user.avatar_url}" >
        <a href="${user.html_url}" class="btn btn-lg btn-primary btn-block" target="_blank">View Profile</a>
      </div>
      <div class="col-m-9 m-2">
        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
        <span class="badge badge-success">Followers : ${user.followers}</span>
        <span class="badge badge-info">Following : ${user.following}</span>
        <ul class="list-group mt-4">
          <li class="list-group-item">Company : ${user.company}</li>
          <li class="list-group-item">Website/Blog : ${user.blog}</li>
          <li class="list-group-item">Location : ${user.location}</li>
          <li class="list-group-item">Member Since : ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
  }
  // <div class="card card-content p-3">
  //     <h4>Latest Repos</h4>
  //   </div>
  displayRepos(repos){
    // console.log(repos);
    const repositories = document.querySelector('#repositories');
    const div = document.createElement('div');
    div.className = 'card card-content p-3';
    let output = `<h4>Latest Repos</h4><ul class="list-group mt-4">`;
    repos.forEach((repo) =>{
      // console.log(repo.html_url);
      output+=`
      <li class="list-group-item">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      <span class="float-right">
      <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
      <span class="badge badge-secondary">Watchers : ${repo.watchers}</span>
      <span class="badge badge-success">Forks : ${repo.forks}</span>
      </span>
      </li>
      `;
    });
    output+='</ul>'
    div.innerHTML=output;
    repositories.appendChild(div);
    // console.log();
  }
  clearRepos(){
    const repositories = document.querySelector('#repositories');
    repositories.innerHTML="";

  }

  displayNone(){
    const profile = document.querySelector('#profile');
    profile.innerHTML = "";


  }

  displayAlert(){
    const alert = document.querySelector('.alert');
    alert.classList.remove('d-none');
    setTimeout(()=>{
      alert.classList.add('d-none');
    }, 3000);
  }

}