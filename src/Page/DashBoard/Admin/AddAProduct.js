import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const [lights, setLight] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setLight(data));
        },[])


   //Add product
   const handleSubmit = async (event) => {
    event.preventDefault();
    const service = {
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      img: event.target.img.value,
      
    };
    console.log(service);

    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers: {
          'content-type':'application/json'
      },
      body: JSON.stringify(service)
   })
   .then(res => res.json())
   .then(data => {
       if (data.success){
           toast.success( 'order successful proceed' )
       }
   
       //to close the modal
       
   })
  
  
  
  };




















   
    return (

             <div>
            <h2 className='text-xl mt-5'>All Product ({lights.length})</h2>
            <section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-full w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Number</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Product Name</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Id</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
          </tr>
        </thead>
        <tbody className=''>
           
          {
           lights.map((a,index) => 
           <tr>
            <th>{index + 1}</th>
            <td>{a.name}</td>
            <td>{a._id}</td>
            <td>${a.price}</td>
           
          </tr>
           
           
           )
          }
          
        </tbody>
      </table>
    </div>
  </div>
</section>

        <section class="text-gray-600 body-font relative ">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-1/2 md:w-2/3 mx-auto bg-white shadow-lg p-12">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Product</h1>
    </div>
   
     <form onSubmit={handleSubmit} >
      <div class="flex flex-wrap text-left -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600 text-left">Product Name</label>
            <input type="text"  name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600 text-left">Product Price</label>
            <input type="text"  name="price"  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>


        <div class="p-2 w-full">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-gray-600">Description</label>
            <input type="text"  name="description" placeholder='Description' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="text" class="leading-7 text-sm text-gray-600">Image</label>
            <input type="text"  name="img" placeholder='Image' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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


        </div>
             
       
    );
};

export default AddAProduct;