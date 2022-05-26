import React, { useEffect, useState } from 'react';


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
         <div className='flex'>
         {
             review.map(reviews => 
              <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.istockphoto.com/photos/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office-picture-id1354898581?b=1&k=20&m=1354898581&s=170667a&w=0&h=Jkv4uO6gEaLFtz6F22ZrEk4VQljqLNKMuVpdRlIYoEY="/>
                <p class="leading-relaxed">{reviews.description}</p>
                <span class="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{reviews.name}</h2>
                <p class="text-gray-500">{reviews.Company}</p>
              </div>
              </div>
              )
           }
         </div>
          
              </div>
      </section>
    );
};

export default Review;