const showDashboardAdmin = () => ({})


function verify(params) {

  if (!params.logged) {
    console.log("Must be logged");
    return;
  }

  if (!params.valid) {
    console.log('Must be valid');
    return;
  }

  
  if (!params.admin) {
    console.log('Must be an admin')
    return;
  }

  showDashboardAdmin()

}
