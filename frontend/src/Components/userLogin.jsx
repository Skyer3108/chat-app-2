
import '../style.css'
import { useState } from 'react'

// import _ from 'loadash'

const UserLogin = ({setUser}) => {

    const [userName,setUserName]=useState('')

    // const onChangeHandler=(event)=>{

    //     const name=event.target.name 
    //     const value=event.target.value 

    //     setUserName(userName=>({...userName,[name]:value}))
    // }

    const handleUser=()=>{

        if(!userName){
           return
        }

       

        localStorage.setItem('user',userName)

        setUser(userName)

        localStorage.setItem('avatar',`https://picsum.photos/200/300?grayscale`)
    }


    return (
        <div className="login-container">

            <div className="login_title">
                <h1>Chat App</h1>
            </div>

            <div className="login-form">
                <input value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Your Name" type='text' />
               


                <button onClick={handleUser}  className="btn btn-primary">Login</button>
            </div>

        </div>

    )


//     return(

//         <div>

//         <div className='login-popup min-vh-100 container d-flex justify-content-center align-items-center'>

//         <form onSubmit={handleSubmit}>

       

// <div className='login-popup-input'>

//     <div className="mb-3">
//         <label>
//             <span>Name</span>
//         </label>
//     <input className="form-control" name='name' onChange={onChangeHandler} value={data.name} placeholder='Enter Your Name' type='text' required />
//     </div>



//       <div className="mb-3">
//       <label>
//             <span>Email</span>
//         </label>
//       <input className="form-control"  name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter Your Email' type='email' required />
//       </div>

//       <div className="mb-3">
//       <label>
//             <span>Possword</span>
//         </label>
//       <input className="form-control"  name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter Your Password' type='password' required />
//       </div>

//       <div className="mb-3">
//       <label>
//             <span>Confirm Possword</span>
//         </label>
//       <input className="form-control"  name='confirmPassword' onChange={onChangeHandler} value={data.confirmPassword} placeholder='Enter Your Password' type='password' required />
//       </div>

// </div>

// <button className='btn btn-primary' type='submit'>Register</button>
            

// <p>Have already an Account ?
//     <Link to='/login'>
//     <span>Login here</span>
//     </Link>
// </p>
//         </form>

       


//         </div>

//     </div>

//     )
}

export default UserLogin