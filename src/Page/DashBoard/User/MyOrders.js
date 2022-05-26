
import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [lights, setLight] = useState([]);


    const handleDelete = id => {
        fetch(`http://localhost:5000/ordering/${id}` ,{
            method:'DELETE'
        })
        .then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                const remaining = lights.filter(light => light._id !== id);
                setLight(remaining);
            })
        })
       }









    useEffect(() => {
        fetch('http://localhost:5000/ordering')
        .then(res => res.json())
        .then(data => setLight(data));
        },[])



    return (
        <>
           <h1 className='text-lg'>My Orders ({lights.length})</h1>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-2/2 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Product Name</th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Id</th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                      <th class="  px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Delete</th>
                      <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                  </thead>
                  <tbody>



                  {
                     lights.map(light => 
                    <tr>
                      <td class="px-4 py-3">{light.productName}</td>
                      <td class="px-4 py-3">{light._id}</td>
                      <td class="px-4 py-3">{light.orderQuantity}</td>
                      <td class="px-1 py-2 h-4 w-20 mb-3 cursor text-sm text-gray-900 btn btn-primary " onClick={() => handleDelete(light._id)}>Delete</td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
        
            </div>
          </section>
           

        </>
       
    );
};

export default MyOrders;