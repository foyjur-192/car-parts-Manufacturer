import React from 'react';

const AboutUs = () => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col item2s-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:item2s-start md:text-left mb-16 md:mb-0 item2s-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About CK Auto Mobile
            </h1>
            <p class="mb-8 leading-relaxed">We have started our journey in 2002 with a few work force and small factory.Moreover, Our Quality product made us superior in the competitor market.We are based on China.We are improving our production facility day by day.Besides, We are building more skilled and productive work force for future</p>
            <div class="flex justify-flex-start">
              <button class="inline-flex text-secondary bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Check </button>
             
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://abas-erp.com/sites/default/files/automotive%20parts%20manufacturing%20ERP.jpg"/>
          </div>
        </div>
      </section>
    );
};

export default AboutUs;