const showDashboardAdmin = () => ({})


function verify(params) {

    if (params.logged) {

        if (params.valid) {

            if (params.admin) {

                showDashboardAdmin();
            } else {
                console.log('Must be an admin')
            }
        } else {
            console.log('Must be valid')
        }
    } else {
        console.log('Must be logged')
    }
}