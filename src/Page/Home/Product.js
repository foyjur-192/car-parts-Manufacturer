import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
     const navigate = useNavigate();




    //For light
        const [lights, setLight] = useState([]);
    
        useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setLight(data));
        },[])


       //for ac control
       const [controls, setControls] = useState([]);

       useEffect(() => {
       fetch('http://localhost:5000/control')
       .then(res => res.json())
       .then(data => setControls(data));
       },[])


       //for frame
       const [frames, setFrames] = useState([]);

       useEffect(() => {
       fetch('http://localhost:5000/frame')
       .then(res => res.json())
       .then(data => setFrames(data));
       },[])

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div className='mt-12 mb-20'> <h1 className=' font-medium text-4xl font-semi-bold'>Our Products</h1>
                <p>Our Available Manufacturing items</p></div>
               
          
                <div class="flex flex-wrap -m-4 ">
                    {
                        lights.slice(0, 1).map(light =>
                            <div class="p-4 md:w-1/3  ">
                                <div class="h-full  bg-white drop-shadow-2xl  rounded-lg overflow-hidden">
                                    <img class="lg:h-72 p-2 md:h-36 w-full object-cover object-center" src={light.img} alt="blog" />
                                    <div class="p-3 mt-3">
                                        <div className='flex justify-between mb-5 '> <h1 class="title-font text-lg text-left font-medium text-gray-900 mb-3">{light.name}</h1>
                                        <h3 ><span className='text-2xl font-bold bg-primary'>$150</span> per Item Price</h3>
                                         </div>
                                       
                                        <p class="leading-relaxed mb-3 text-left">{light.description}</p>
                                        <div class="flex justify-between mt-8">
                                            <div className='text-left'><span className=' font-bold'>Min. Order<br></br> Quantity</span> <p className=''>2 peces</p> </div>
                                            <div className=''><span className='font-bold'>Available<br></br> Quantity</span> <p>{lights.length}</p></div>
                                            <div><button class="inline-flex text-secondary bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => navigate('/purchase')}  >Order Now</button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                    {
                        controls.slice(0, 1).map(control =>
                            <div class="p-4 md:w-1/3">
                                <div class="h-full  bg-white drop-shadow-2xl  rounded-lg overflow-hidden">
                                    <img class="lg:h-72 p-2 md:h-36 w-full object-cover object-center" src={control.img} alt="blog" />
                                    <div class="p-3 mt-3">
                                    <div className='flex justify-between mb-5 '> <h1 class="title-font text-lg text-left font-medium text-gray-900 mb-3">{control.name}</h1>
                                        <h3 ><span className='text-2xl font-bold bg-primary'>$120</span> per Item Price</h3>
                                         </div>
                                        <p class="leading-relaxed mb-3 text-left">{control.description}</p>
                                        <div class="flex justify-between mt-8">
                                            <div className='text-left'><span className=' font-bold'>Min. Order<br></br> Quantity</span> <p className=''>2 peces</p> </div>
                                            <div className=''><span className='font-bold'>Available<br></br> Quantity</span> <p>{controls.length}</p></div>
                                            <div><button class="inline-flex text-secondary bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={() => navigate('/controlPurchase')} >Order Now</button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }



                    {
                        frames.slice(0, 1).map(frame =>
                            <div class="p-4 md:w-1/3">
                                <div class="h-full  bg-white drop-shadow-2xl  rounded-lg overflow-hidden">
                                    <img class="lg:h-72 p-2 md:h-36 w-full object-cover object-center" src={frame.img} alt="blog" />
                                    <div class="p-3 mt-3">
                                    <div className='flex justify-between mb-5 '> <h1 class="title-font text-3xl text-lg text-left font-medium text-gray-900 mb-3">{frame.name}</h1>
                                        <h3 ><span className='text-2xl font-bold bg-primary'>$70</span> per Item Price</h3>
                                         </div>
                                        <p class="leading-relaxed mb-3 text-left">{frame.description}</p>
                                        <div class="flex justify-between mt-8">
                                            <div className='text-left'><span className=' font-bold'>Min. Order<br></br> Quantity</span> <p className=''>2 peces</p> </div>
                                            <div className=''><span className='font-bold'>Available<br></br> Quantity</span> <p>{frames.length}</p></div>
                                            <div><button class="inline-flex text-secondary bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={() => navigate('/frameControl')} >Order Now</button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }


                </div>
            </div>
        </section>
    );
};

export default Product;