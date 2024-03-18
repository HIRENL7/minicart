import React, { useEffect, useState } from 'react'
import { centerDiv, fullname, password, registerBtn, username } from '../lib/Classes'
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [userData, setUserData] = useState([]);
    const [userInput, setUserInput] = useState({
        name: "",
        username: "",
        password: ""
    });
    const navigate = useNavigate();
    const handlechange = (e) => {
        const { value, name, } = e.target

        setUserInput((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    const registerUser = () => {
        const id = (Math.floor(Math.random() * 100000));
        let storeData = JSON.parse(localStorage.getItem("allUserData")) || []
        debugger
        let tempUser = [...userData, { id: id, userInput }]
        setUserData(tempUser)
        localStorage.setItem("allUserData", JSON.stringify([...storeData, ...tempUser]))
        localStorage.setItem("loggedInUser", JSON.stringify(tempUser[tempUser?.length - 1]))
        navigate("/")
        console.log(userData);
        console.log(userInput);
        debugger


    }
    const clearlocalStorage = () => {

        localStorage.clear()

    }
    return (
        <>
            <section className="flex flex-col items-center pt-6 mt-[75px]">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
                            account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${centerDiv}`} >Your full name</label>
                                <input type="text" name="name" id="name" className={fullname} value={userInput.name} placeholder="Emelia Erickson" onChange={(e) => handlechange(e)} />
                            </div>
                            <div>
                                <label htmlFor="username" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${centerDiv}`} >Username</label>
                                <input type="text" name="username" id="username" className={username} value={userInput.username} placeholder="emelia_erickson24" onChange={(e) => handlechange(e)} />
                            </div>
                            <div>
                                <label htmlFor="password" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${centerDiv}`} >Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={userInput.password} className={password} onChange={(e) => handlechange(e)} />
                            </div>
                            <button className={registerBtn} onClick={(e) => clearlocalStorage(e)}>Clear</button>
                            <button className={registerBtn} onClick={(e) => registerUser(e)}>Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <button
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500" onClick={() => navigate("/login")}>Sign in here</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Register