import React from 'react'
import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth.js"
import {logout } from "../../store/authSlice.js"

function LogoutBtn() {
    const dispatch = useDispatch()

    const lougoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }
  return (
    <button
    className="px-5 py-2 rounded-lg text-gray-300 transition duration-300 hover:text-white hover:bg-blue-600"
    onClick={lougoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn