import {useState} from 'react'

function Signup() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${process.env.REACT_APP_API_URL}/api/user/signup`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>Email : </label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <label>Password : </label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />

        <button>Signup</button>
    </form>
  )
}

export default Signup