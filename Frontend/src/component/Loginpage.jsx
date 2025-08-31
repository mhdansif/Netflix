import React, { useState } from 'react'
import bg from "../assets/background.jpg"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import eduflix from "../assets/eduflix logo.png"

const Loginpage = () => {

  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [emailerr, setemailerr] = useState("")
  const [passerr, setpasserr] = useState("")
  const [loading, setloading] = useState(false)

  const check = () => {

    console.log("Sending email:", email);
    console.log("Sending password:", pass);

    
    setloading(true)
    var logindetails = axios.post("https://eduflix-login.onrender.com/login", {"useremail":email, "password":pass })
    logindetails.then(function (data) {
      setloading(false)
      if (data.data == true) {
        console.log(data)
        navigate("/success")
      }
      else {
        navigate("/failed")
      }
    })
    .catch(function (error) {
      setloading(false)
      console.error("Login error:", error)
      navigate("/failed")
    })
  }

  const handleSignup = (e) => {
    e.preventDefault()

    setemailerr("")
    setpasserr("")

    let valid = true

    if (!email) {
      setemailerr("please enter your email.")
      valid = false
    }
    if (!pass) {
      setpasserr("please enter your password")
      valid = false
    } else if (pass.length < 4 || pass.length > 60) {
      setpasserr("Password must be between 4 and 60 characters.")
      valid = false
    }
    if (valid) {
      check()
    }

  }

  return (
    <div className=' relative w-full h-screen bg-black'>

      <img className='absolute top-3 lg:w-44 left-8 lg:left-24 w-36 object-contain z-10' src={eduflix} alt="" />

      <div>
        <img className=' w-full h-screen object-cover opacity-50' src={bg} alt="" />
      </div>

      <div className='flex absolute top-16 sm:top-24 right-6 left-10 sm:left-16 md:left-42  justify-center items-center '>

        <div className='bg-black  bg-opacity-70 px-16 py-10 sm:py-20 rounded-md text-white w-full max-w-lg'>
          <h2 className='text-3xl font-bold mb-6'> Sign In</h2>

          <form onSubmit={handleSignup} className='flex flex-col gap-4'>

            <input onChange={(e) => {
              setemail(e.target.value.trim().toLowerCase())
            }} className={` border p-3 bg-transparent placeholder-gray-400 focus:outline-none ${emailerr ? "border-red-600" : "border-gray-600"}`} type="email" value={email} name="email" placeholder='Email or mobile number' />

            {
              emailerr && (
                <p className='text-red-600  text-md mt-1'>{emailerr}</p>
              )
            }

            <input onChange={(e) => {
              setpass(e.target.value)
            }} className={`border p-3 bg-transparent placeholder-gray-400 focus:outline-none ${passerr ? "border-red-600" : "border-gray-600"}`} type="password" value={pass} name="password" placeholder='Password' />

            {passerr && (
              <p className='text-red-600 text-md mt-1'>{passerr}</p>
            )}


            <button type='submit' disabled={loading} className='text-white  w-full bg-red-600 p-3 hover:bg-red-700 transition disabled:opacity-50'>{loading ? "Signing in..." : "Sign in"}</button>


          </form>

          <div className='flex items-center justify-center my-4'>
            <span className='text-gray-400'>OR</span>
          </div>

          <button className=' bg-gray-400 p-3 w-full bg-opacity-40 text-white text-center text-sm  hover:underline cursor-pointer mb-4'>use a sign-in code</button>

          <p className='text-center text-white underline cursor-pointer hover:text-gray-400'>Forgot password?</p>

          <div className='flex items-center mt-4'>
            <input type="checkbox" className='mr-2' />
            <label className='text-sm text-gray-400 '>Remember me</label>
          </div>

          <div className='flex items-center mt-4 gap-1'>
            <p className='text-gray-400'>New to Netflix?</p>
            <p className=' font-bold hover:underline cursor-pointer'>Sign up now.</p>
          </div>

          <p className='text-gray-400 text-md mt-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

          <p className='underline text-blue-600 cursor-pointer mt-4 text-sm'>learn more.</p>
        </div>
      </div>

    </div>


  )
}

export default Loginpage