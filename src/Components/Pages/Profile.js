import React from 'react'
import RootLayout from '../Layout/RootLayout'
import Header from '../Layout/Header'

function Profile() {
    return (
        <RootLayout>
            <Header />
            <div className='flex justify-center min-h-full p-5 '>
                <div className='w-11/12 border-sky-500 shadow-md rounded-lg '>
                    <p className='text-zinc-950 text-2xl p-5  font-extrabold text-base sm:text-sm md:text-base lg:text-lg xl:text-xl'>Personal Details</p>
                    <div className='grid grid-cols-2 gap-2 divide-x m-2 p-5'>
                        <div className='w-50'>
                            <label for="FirstName" className="form-label inline-block mb-2  text-gray-700 text-base sm:text-sm">First Name </label><span style={{ color: "red" }}> &nbsp; *</span>
                            <input type="text" value="First Name" className="form-control shadow-md block  w-full px-3 py-1.5  
                            text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
                            ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                             text-base sm:text-sm " id="fName"
                                aria-describedby="emailHelp" placeholder="Enter First Name" />
                        </div>
                        <div className='w-50'>
                            <label for="LastName" className="form-label inline-block mb-2 text-gray-700 text-base sm:text-sm">Last Name </label><span style={{ color: "red" }}> &nbsp; *</span>
                            <input type="text" value="Last Name" className="form-control shadow-md block text-base sm:text-sm w-full px-3 py-1.5  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="lName"
                                aria-describedby="emailHelp" placeholder="Enter Last Name" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 divide-x m-2 p-5'>
                        <div className='w-50'>
                            <label for="UserType" className="form-label inline-block mb-2 text-gray-700 text-base sm:text-sm">User Type</label><span style={{ color: "red" }}> &nbsp; *</span>
                            <select value="Admin" className="form-control block text-base sm:text-sm w-full px-3  shadow-md text-base py-1.5  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="User type">
                                <option>User</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <div className='w-50'>
                            <label for="Gender" className="form-label inline-block mb-2 text-gray-700 text-base sm:text-sm">Gender</label><span style={{ color: "red" }}> &nbsp; *</span>
                            <select value="Female" className="form-control block text-base sm:text-sm w-full px-3  shadow-md text-base py-1.5  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Transgender</option>
                             </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 divide-x m-2 p-5'>
                        <div className='w-50'>
                            <label for="Phone" className="form-label inline-block mb-2 text-gray-700 text-base sm:text-sm">Phone </label><span style={{ color: "red" }}> &nbsp; *</span>
                            <input type="text" value="9762854356" className="form-control shadow-md block text-base sm:text-sm w-full px-3 py-1.5  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="Phone"
                                aria-describedby="emailHelp" placeholder="Enter Your Phone No." />
                        </div>
                        <div className='w-50'>
                            <label for="Email" className="form-label inline-block mb-2 text-gray-700 text-base sm:text-sm">Email</label><span style={{ color: "red" }}> &nbsp; *</span>
                            <input type="email" value="irpd@email.com" className="form-control shadow-md block text-base sm:text-sm w-full px-3 py-1.5  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                                aria-describedby="emailHelp" placeholder="Enter Your Email." />
                        </div>
                    </div>
                   
                
                </div>
            </div>
            
        </RootLayout >

    )
}

export default Profile