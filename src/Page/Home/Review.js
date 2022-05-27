import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';



const Review = () => {
    const [review, setReview] = useState([]);
    
    useEffect(() => {
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setReview(data));
    },[])
    return (
        
        <section class="text-gray-600 body-font bg-accent">
        <div class="container px-5 py-24 mx-auto">
            <div>
                <h1 className='text-3xl mb-28 font-medium'>Our Happy Clients Satisfactory Words{}</h1>
            </div>
         <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {
             review.map(reviews => 
                 <ReviewDetails key={reviews._id} reviews={reviews}></ReviewDetails>
              )
           }
         </div>
          
              </div>
      </section>
    );
};

export default Review;