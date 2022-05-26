import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect( () => {
        const email = user?.user?.email;
//if email available then we will send
const currentUser = {email: email};


if(email){
     fetch(`http://localhost:5000/user/${email}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(currentUser)
     })
     .then(res => res.json())
     .then(data => {
         console.log('data inside useToken', data);
         const accessToken = data.token;
         localStorage.setItem('accessToken', accessToken)
         setToken(accessToken)
     })
        }
    }, [user]);
    return [token];
};

export default useToken;