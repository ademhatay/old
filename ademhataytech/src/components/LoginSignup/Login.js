import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>

            <div className="w-full max-w-sm py-44 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">TECH</h2>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Giriş Yap</p>

                    <form>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Kullanıcı Adı veya Email" aria-label="username" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Şifre" aria-label="Şifre" />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="/#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Şifremi Unuttum!</a>

                            <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button">Giriş Yap</button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">15 saniyede hesabını oluştur!</span>

                    <Link to="/register" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
                        Hesap Oluştur
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login