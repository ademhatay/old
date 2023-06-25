import React from 'react'

const SingleUser = (props) => {

  return (
    <>


      <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img class="object-cover object-center w-full h-56" src={props.user.picture.large} alt="avatar" />

          <div class="px-6 py-4">
            <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{props.user.name.first} {props.user.name.last}</h1>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 0v2h1.586l-2.113 2.113c-.981-.698-2.177-1.113-3.473-1.113-2.225 0-4.151 1.219-5.187 3.018-1.473.045-2.933.615-4.057 1.739-1.171 1.172-1.756 2.707-1.756 4.242 0 1.536.585 3.071 1.757 4.243.917.917 2.055 1.469 3.243 1.669v2.24l-1.122-1.121-1.414 1.414 3.535 3.556 3.536-3.557-1.414-1.414-1.121 1.122v-2.24c1.186-.199 2.326-.752 3.242-1.668.382-.381.689-.805.943-1.252 3.227-.099 5.815-2.74 5.815-5.991 0-1.296-.415-2.492-1.113-3.473l2.113-2.113v1.586h2v-5h-5zm-4 13c-1.956 0-3.579-1.444-3.924-3.25-.326-.158-.689-.25-1.076-.25-.34 0-.661.074-.956.197.267 2.3 1.837 4.191 3.948 4.943-1.516 1.746-4.201 1.808-5.821.188-1.56-1.56-1.56-4.097-.001-5.657 2.261-2.26 6.126-1.07 6.747 2.04.328.17.687.289 1.083.289.333 0 .643-.081.932-.201-.263-2.242-1.672-4.128-3.91-4.93.728-.833 1.785-1.369 2.978-1.369 2.206 0 4 1.794 4 4s-1.794 4-4 4z"/></svg>
              <h1 class="px-2 text-sm">{props.user.gender}</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg  className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>

              <h1 class="px-2 text-sm">{props.user.phone}</h1>
            </div>

            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
              </svg>

              <h1 class="px-2 text-sm">{props.user.email }</h1>
            </div>
          </div>
      </div>
    </>
  )

  // return (
  //   // <div className='card flex flex-col items-center w-2/3 mx-auto rounded-lg pb-3  bg-red-400'>
  //   //   <div className='w-full flex justify-center bg-blue-500 rounded-t-lg py-2'>
  //   //     <img  className='rounded-full w-24 bg-blue-500' src={props.user.picture.medium} alt='profile_img'/>
  //   //   </div>

  //   //     <div className='w-full text-center'>{props.user.gender}</div>
  //   //     <div className='w-full text-center text-2xl'>{props.user.name.first} {props.user.name.last}</div>
  //   //     <div className='w-full text-center'>{props.user.email }</div>
  //   //     <div className='w-full text-center'>{props.user.phone }</div>
  //   //     <div className='w-full text-center'>{props.user.city }</div>
  //   // </div>
  // )
}

export default SingleUser