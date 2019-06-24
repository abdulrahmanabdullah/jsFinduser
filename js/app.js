//init Github class 
const user = new Github();
//Init UI class 
const ui = new UI;
// search input 
const searchUser = document.getElementById('searchUser');


//Search input event 
searchUser.addEventListener('keyup', (e) => {

    const userText = e.target.value;
    if (userText !== '') {
        user.getUser(userText).then(user =>{
            if(user.profile.message === 'Not Found'){
                ui.showAlert("user not found ","alert alert-danger");
                // ui.clearProfile();
            }else{
                ui.showProfile(user.profile);
                ui.showRepos(user.repos);
            }
        }).catch(err => console.log(err));
    } else {
        //Clear profile 
        ui.clearProfile();
    }
});
