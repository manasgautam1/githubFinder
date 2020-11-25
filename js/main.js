const github = new Github;
const ui = new UI;

const searchUser = document.querySelector('#searchUser');


searchUser.addEventListener('keyup', () => {
  const user = searchUser.value;

  if(user !== ''){
    github.getUser(user)
    .then(data => {
      // console.log(data);
      if(data.profile.message != 'Not Found'){
        ui.displayProfile(data.profile);
        ui.clearRepos();
        ui.displayRepos(data.repos);
        // console.log(data);
        // console.log(data.repos);
      }
      else{
        ui.displayAlert();
        // console.clear();
      }
    })
    .catch(() =>{
      ui.displayAlert();
    })
  }
  else{
    ui.displayNone();
    ui.clearRepos();
  }

});

