
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import useToken from '../../Hook/useToken';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Share/Loading';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
   
   //Sign in with email and password
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
   
//update user profile
const [updateProfile, updating, updateError] = useUpdateProfile(auth);

const [token] = useToken(user || gUser)
const navigate = useNavigate();




   let signInError;

   if ( loading || gLoading || updating){
    return <Loading></Loading>
   }

   if(token){
    navigate('/purchase');
 }

//  if(user || gUser){
//     navigate('/purchase');
//  }
   if(error || gError || updateError) {
     signInError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
   }
   
   
 
    const onSubmit = async data =>{
        await  createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
     
    }
    return (
        <div className='flex justify-center text-center items-center h-screen'>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body ">
                <h2 class="text-center mb-3 text-2xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>




                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your password"
                            class="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 Characters or longer password' 
                                  }
                               
                            })}
                        />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>
                    {signInError}
                    <br/>
                    <input className='btn mb-3 w-full max-w-xs text-white' type="submit" value="Sign up" />
                    <span className='text-1xl'>Already have an Account? <Link to="/login" className=' text-primary'>Log in Now</Link> </span>
               
                </form>
                <div class="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    class="btn">Continue with Google</button>
            </div>
        </div>
    </div>
    );
};

export default SignUp;