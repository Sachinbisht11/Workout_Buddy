import {useState} from 'react'

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${process.env.REACT_APP_API_URL}/api/user/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
        const json=await response.json();
        if(!response.ok){
            console.log(json.error);
        }
        if(response.ok){
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json));
        }
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email : </label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <label>Password : </label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />

        <button>Login</button>
    </form>
  )
}

export default Login