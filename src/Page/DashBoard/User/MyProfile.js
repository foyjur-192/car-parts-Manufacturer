
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
 <h4>My Profile Details</h4>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-lg mb-4 font-normal text-gray-900"> Name: {user?.displayName}</h1>
      <p class="mb-8 leading-relaxed">Email: {user?.email}</p>
    <p className=''>About me : My Name is Foyjur Rahman, I'm a web developer</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        
       
      </div>
      
    </div>
   
  </div>
</section>
        </div>
    );
};

export default MyProfile;