import React from 'react';

const Banner = ({image}) => {
    return (
        <section class="text-gray-600 mt-28 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col item2s-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:item2s-start md:text-left mb-16 md:mb-0 item2s-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Auto Mobile Parts
              <br class="hidden lg:inline-block"/> Manufacturer
            </h1>
            <p class="mb-8 leading-relaxed">We are Proudly Celebrating our 20 Years Successful Journey.We are proudly say our parts are using by Popular Brands in the world, Our Clients are BMW, Range Rover, Marcedes etc</p>
            <div class="flex justify-flex-start items-left">
              <button class="inline-flex text-secondary bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">About us</button>
              
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src={image}/>
          </div>
        </div>
      </section>
    );
};

export default Banner;