import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Header() {
  return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className='text-3xl text-violet text-700 py-4'>Umar Khursheed</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-violet-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-violet-800 hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to=""
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "bg-purple-800 text-white":"bg-white"} duration-200 border-b border-gray-100 lg:border-0 rounded-md lg:p-2 text-center`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "bg-purple-800 text-white":"bg-white"} duration-200 border-b border-gray-100 lg:border-0  rounded-md lg:p-2`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "bg-purple-800 text-white":"bg-white"} duration-200 border-b border-gray-100 lg:border-0 rounded-md lg:p-2`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "bg-purple-800 text-white":"bg-white"} duration-200 border-b border-gray-100 lg:border-0 rounded-md lg:p-2`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header