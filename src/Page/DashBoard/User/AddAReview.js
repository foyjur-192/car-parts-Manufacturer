import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const AddAReview = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const review = {
          name: event.target.name.value,
          CompanyName: event.target.CompanyName.value,
          image: event.target.url.value,
          ReviewDescription: event.target.ReviewDescription.value,
          email: event.target.email.value,
        };
        // console.log(order);
    
        fetch('http://localhost:5000/reviews', {
          method: 'POST',
          headers: {
              'content-type':'application/json'
          },
          body: JSON.stringify(review)
       })
       .then(res => res.json())
       .then(data => {
           if (data){
               toast.success('Review Added')
           }
       
           //to close the modal
           
       })
      
    }







    return (
        <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Review</h1>
          </div>
          <form onSubmit={handleSubmit}>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" value={user?.displayName} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email"  name="email" value={user?.email} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Company Name</label>
                  <input type="companyName" id="email" name="CompanyName" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Image</label>
                  <input type="text" id="email" name="url" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Your Review</label>
                  <textarea id="message" name="ReviewDescription" required class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-secondary bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary hover:text-white rounded text-lg">Submit</button>
              </div>
            
            </div>
          </div>
          </form>
        </div>
      </section>
    );
};
export default AddAReview;