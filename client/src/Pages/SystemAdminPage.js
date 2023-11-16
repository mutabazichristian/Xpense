import React from 'react';
import UserAdminsView from '../Components/UserAdminsView';

function SystemAdminPage() {
    var userAdmins = [];
    console.log(userAdmins.length)
    return (
        <div>
            <h1>System Admin</h1>
            <h5>User's Admin Accounts</h5>
            <ul style={{ border: "1px solid blacks" }}>
                {
                    userAdmins == 0 ?
                        <p>no User Admins Yet</p>
                        :

                        <li><UserAdminsView /></li>

                }
            </ul>
            <h1>Create New User Admin</h1>
            <form action="">

            </form>
            <h1>Create New System Admin</h1>
            <form action="">

            </form>

        </div>
    );
}

export default SystemAdminPage;