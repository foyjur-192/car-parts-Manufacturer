import React, { useEffect, useState } from 'react';
import {toast} from "react-toastify"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReviewDetails from '../Home/ReviewDetails';






const Purchase = () => {
    const [user] = useAuthState(auth);
    const [lights, setLight] = useState([]);
    const [value, setValue] = useState([]);

    const [review, setReview] = useState([]);
    
    useEffect(() => {
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setReview(data));
    },[])








   const min = 2;
   const max = lights.length;


    useEffect(() => {
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setLight(data));
    },[])
    
   //Post order
   const handleSubmit = async (event) => {
    event.preventDefault();
    const ordering = {
      productName: event.target.productName.value,
      productId: event.target.id.value,
      Name: event.target.userName.value,
      user: event.target.email.value,
      address: event.target.address.value,
      cityName: event.target.cityName.value,
      orderQuantity: event.target.quantity.value,
    };
    // console.log(order);

    fetch('http://localhost:5000/ordering', {
      method: 'POST',
      headers: {
          'content-type':'application/json'
      },
      body: JSON.stringify(ordering)
   })
   .then(res => res.json())
   .then(data => {
       if (data.success){
           toast( 'order successful proceed' )
       }
   
       //to close the modal
       
   })
  
  
  
  };

    // }

    return (
        <>
        {lights.slice(0, 1).map(light =>  <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 drop-shadow-xl object-cover object-center rounded" src={light.img} />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
                  <h1 class="text-gray-900 text-3xl text-left title-font font-medium mb-1">{light.name}</h1>
                  <div class="flex mb-4">
                    <span class="flex items-center">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span class="text-gray-600 ml-3">{review.length} Reviews</span>
                    </span>
            
                   
                  </div>
                  <div className='text-left'>
                    <p class="leading-relaxed"><span className='font-medium mr-12'>Lighting Type:</span>   LED</p>
                    <span className='h-1 bg-secondary'></span>
                    <p class="leading-relaxed"><span className='font-medium  mr-12'>Body Material:</span>     Plastic</p>
                    <span className='h-1 bg-secondary'></span>
                    <p class="leading-relaxed"> <span className='font-medium  mr-12'>Lighting Color:</span>    Black</p>
                    <span className='h-1 w-10 bg-secondary'></span>
                    <p class="leading-relaxed"> <span className='font-medium  mr-24'> Power: </span>      150W</p>
                    <span className='h-1 bg-secondary'></span>
                    <p class="leading-relaxed">  <span className='font-medium  mr-20'> Diameter: </span>     7inch</p>
                    <span className='h-1 bg-secondary'></span>
                    <p class="leading-relaxed">  <span className='font-medium mr-20'> Thickness:</span>   2MM</p>
                    <span className='h-1 bg-secondary'></span>
                    <p class="leading-relaxed"></p>
                  </div>
                  <div class="flex justify-start mt-8">
                    <div className='text-left'><span className=' font-bold'>Description</span> <p className=''>{light.description}</p> </div>
                   
                  </div>

                  <div class="flex justify-start mt-8">
                    <div className='text-left'><span className=' font-bold'>Min. Order<br></br> Quantity</span> <p className=''>2 peces</p> </div>
                    <div className='ml-12'><span className='font-bold'>Available<br></br> Quantity</span> <p>{lights.length}</p> </div>
                  </div>
                  <div className='text-left mt-6'>
                      <p className='font-medium text-2xl'><span className='font-normal '>Per Pair Price:</span> ${light.price}</p>
                  </div>
                </div>
              </div>
        </div>
      </section>  
       )}

     {lights.slice(0, 1).map(light =>
        <section class="text-gray-600 body-font relative ">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-1/2 md:w-2/3 mx-auto bg-white shadow-lg p-12">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Order Now</h1>
    </div>
   
     <form onSubmit={handleSubmit} >
      <div class="flex flex-wrap text-left -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600 text-left">Product Name</label>
            <input type="productName"  name="productName" value={light.name} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600 text-left">Product Id</label>
            <input type="text"  name="id" value={light._id} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600 text-left"> Name</label>
            <input type="userName"  name="userName" value={user?.displayName} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">user</label>
            <input type="email"  name="email" value={user?.email} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-gray-600">Address</label>
            <input type="address"  name="address" placeholder='Address' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-gray-600">City</label>
            <input type="cityName"  name="cityName" placeholder='City Name' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-gray-600">Order Quantity</label>
            <input
            
            value={value}
            inputProps={{min, max}}
            onChange={(e) => {
            var value = parseInt(e.target.value, lights.length);
            if(value > max) value =max;
            if(value < min) value = min;

            setValue(value);
            }}
            variant="outlined"
            
            
            
            type="number" id="text" name="quantity" placeholder='Quantity' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       
        <div class="p-2 w-full mt-5">
          <button class="flex mx-auto text-secondary bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary hover:text-white rounded text-lg">Complete Order</button>
        </div>
      </div>
      </form>
    </div>
  </div>
</section>
)}

        
      </> 
    );
};

export default Purchase;