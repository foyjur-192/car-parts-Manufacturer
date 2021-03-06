import React from 'react';

const Contact = () => {
    return (
        <section class="text-gray-600 body-font bg-primary">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Subscribe Our Newsletter for Future update</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We will inform if their any new announcement or offer for you </p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 item2s-end">
            <div class="relative flex-grow text-left w-full">
              <label for="full-name" class="leading-7  text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" placeholder='Full Name' name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative text-left flex-grow w-full">
              <label for="email" class="leading-7 text-left text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" placeholder='Email' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button class="text-white bg-secondary border-0 btn  mt-5 focus:outline-none hover:bg-white hover:text-secondary rounded text-lg">Submit</button>
          </div>
        </div>
      </section>
    );
};

export default Contact;