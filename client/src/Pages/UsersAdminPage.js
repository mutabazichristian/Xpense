import React from 'react';
import UsersView from '../Components/UsersView';

function UsersAdminPage() {
    return (
        <>
            <h1>User's Admin</h1>
            <h5>Users</h5>
            <ul>
                <li><UsersView /></li>
                <li><UsersView /></li>
            </ul>
        </>
    );
}

export default UsersAdminPage;