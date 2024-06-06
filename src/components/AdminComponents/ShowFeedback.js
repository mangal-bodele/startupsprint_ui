import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowFeedback() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/a1/feedback/')
            .then(response => {
                setFeedbacks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the feedbacks:', error);
            });
    }, []);

    return (
        <div className='container border border-dark mt-5'>
            <center className='p-3 mb-2 bg-primary text-white'><h1><u>Feedback Records</u></h1></center>
            <div className='row mt-5'>
                {feedbacks.length > 0 ? (
                    feedbacks.map(feedback => (
                        <div key={feedback.id} className='col-md-4 col-sm-6 mb-3'>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <h3 className=''>First_Name:{feedback.first_name}</h3>
                                    <h3 className=''>Last_Name:{feedback.last_name}</h3>
                                    <h3 className=''>Email:{feedback.email}</h3>
                                    <h3 className=''>Ratings: {feedback.ratings}</h3>
                                    <h3 className=''>Feedback_Text:{feedback.feedback_text}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <p className="text-center">No feedback records found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShowFeedback;



