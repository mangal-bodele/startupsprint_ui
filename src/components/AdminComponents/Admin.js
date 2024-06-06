import React from 'react';
import ShowFeedback from './ShowFeedback'; 
import AdminDashBoard from './components/AdminComponents/AdminDashBoard';

function Admin() {
    return (
        <div>
            <h1>Admin Page</h1>
            <ShowFeedback />
            <AdminDashBoard />
        </div>
    );
}

export default Admin;
