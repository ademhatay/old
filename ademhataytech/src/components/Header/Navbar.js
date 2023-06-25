import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CategoryList from '../Categories/CategoryList';

const Navbar = () => {
    const [isActive, setActive] = useState();
    const handleToggle = () => {
        setActive(!isActive);
    };

    const [dark, setDark] = useState('dark');
    useEffect(() => {
        if (localStorage.getItem('dark')) {
            document.documentElement.classList.add('dark');
        }
    }, [dark])
    const darkMode = () => {
        const root = document.documentElement;
        root.classList.toggle('dark');
        if (root.classList.contains('dark')) {
            localStorage.setItem('dark', true);
        } else {
            localStorage.removeItem('dark');
            setDark("");
        }
    };
    return (
        <div>

            <nav className="bg-gray-100 shadow dark:bg-gray-800">
                <div className="container px-6 py-3 mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Link className="text-2xl font-bold text-gray-700 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-800 dark:hover:text-gray-300" to="/">TECH</Link>

                                {/* <!-- Search input on desktop screen --> */}
                                <div className="hidden mx-10 md:block">
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>

                                        <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Ara..." />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex md:hidden">
                                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" onClick={handleToggle}>
                                    {/* <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${isActive ? "hidden" : "block"}`} >
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                    {isActive ? "X" : ""} */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 transform transition-opacity duration-500 ${isActive ? "hidden opacity-0" : "block opacity-100"}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {isActive ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    : ""}
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className={`items-center md:flex  ${isActive ? "block" : "hidden"}`}>
                            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                <Link className="my-1  leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0 text-lg" to="/">
                                    Anasayfa
                                </Link>
                                <Link className="my-1 text-lg leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="/blog">
                                    Blog
                                </Link>
                                <Link className="my-1 text-lg leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="/categories">
                                    Kategoriler
                                </Link>
                                <Link className="my-1 text-lg leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="/about">
                                    Hakkımda
                                </Link>
                                <Link className="my-1 text-lg leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" to="/contact">
                                    İletişim
                                </Link>
                            </div>

                            <div className="flex items-center py-2 -mx-1 md:mx-0">
                                <Link className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto" to="login">
                                    Giriş Yap
                                </Link>
                                <Link className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" to="register">
                                    Kayıt Ol
                                </Link>
                            </div>
                            <div className="flex items-center py-2 -mx-1 md:mx-0">
                                <button className="block w-full px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transform bg-gray-900 dark:bg-white dark:text-black  rounded-md  md:mx-2 md:w-auto" onClick={darkMode}>
                                    <span className='dark:hidden flex justify-center'>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                    </span>
                                    <span className='hidden dark:flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            {/* <!-- Search input on mobile screen --> */}
                            <div className="mt-3 md:hidden">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>

                                    <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Ara..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CategoryList />

                </div>
            </nav>

        </div>
    )
}

export default Navbar