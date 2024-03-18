import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [userInput, setUserInput] = useState({
        username: "",
        password: ""
    });
    const [userLoggedIn, setUserLoggedIn] = useState()
    const navigate = useNavigate();
    // useEffect(() => {
    // let isLoggedIN = JSON.parse(localStorage.getItem("allUserData"))


    // }, [])
    const handlechange = (e) => {
        const { value, name, } = e.target
        setUserInput((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const checkLogginStatus = () => {
        let storageData = JSON.parse(localStorage.getItem("allUserData"))
        let isLoggedIN = storageData?.find((item) => {
            return item.userInput.username === userInput.username && item.userInput.password === userInput.password
        })
        console.log(userInput.username);
        console.log(isLoggedIN);
        if (isLoggedIN?.length === 0) {
            alert("Wrong Credentials")
        } else if (isLoggedIN?.length !== 0) {
            localStorage.setItem("loggedInUser", JSON.stringify(isLoggedIN))
            navigate("/")
        }
        console.log(isLoggedIN, "isLoggedIN");
        console.log(storageData, "storageData");


    }



    return (
        <>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 my-[75px]">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div class="space-y-6" >
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 flex items-center justify-between" >User Name</label>
                            <div class="mt-2">
                                <input id="email" onChange={(e) => handlechange(e)} name="username" type="text" autocomplete="email" value={userInput.username} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input id="password" onChange={(e) => handlechange(e)} value={userInput.password} name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={() => checkLogginStatus()} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </div>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <button onClick={() => navigate("/register")} class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Here</button>
                    </p>
                </div>
            </div>
        </>

    )
}

export default Login