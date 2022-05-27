
import { useQuery } from 'react-query';


const AllUser = () => {
   
    
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user')
     .then(res => res.json()));
    if(isLoading){
        return isLoading
    }






    // useEffect(() => {
    // fetch('http://localhost:5000/user')
    // .then(res => res.json())
    // .then(data => setUser(data));
    // },[])



    return (
        <div>
            <h2 className='text-xl mt-5'>All Users ({users.length})</h2>
            <section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-full w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Number</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">User</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Id</th>
          </tr>
        </thead>
        <tbody className=''>
           
          {
           users.map((a,index) => 
           <tr>
            <th>{index + 1}</th>
            <td>{a.email}</td>
            <td>{a._id}</td>
           
          </tr>
           
           
           )
          }
          
        </tbody>
      </table>
    </div>
  </div>
</section>
        </div>
    );
};

export default AllUser;