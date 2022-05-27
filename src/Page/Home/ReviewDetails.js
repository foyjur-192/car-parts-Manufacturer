import React from 'react';

const ReviewDetails = ({reviews}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={reviews.image}/>
        <p class="leading-relaxed">{reviews.ReviewDescription} </p>
        <h4 className='text-lg font-medium'>{reviews.name}</h4>
        <p>Company Name: {reviews.CompanyName}</p>
          <div class="card-actions">
           
          </div>
        </div>
      </div>
    );
};

export default ReviewDetails;