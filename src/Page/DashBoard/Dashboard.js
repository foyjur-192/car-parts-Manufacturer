// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
// import auth from '../../firebase.init';
// import useAdmin from '../../Hook/useAdmin';


const Dashboard = () => {
    // const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboardSideBar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content text-left ">
        <h2 className='text-3xl mt-3 '>Your Dashboard </h2>
         <Outlet></Outlet>
      
        
        </div> 
        <div class="drawer-side mr-5">
          <label for="dashboardSideBar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/addAReview'>Add a Review</Link></li>
            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
            <li><Link to='/dashboard/allUser'>All Users</Link></li>
            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
           
           {/* { admin && <li><Link to='/dashboard/users'>All users</Link></li>} */}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;