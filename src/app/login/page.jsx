import React from 'react'

const page = () => {
  return (
    <div>
<div>


<div className="mx-auto max-w-screen-xl min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-white">
<div className="mx-auto max-w-[350px] shadow-[0_0_2px_2px_#0003] bg-[#80808034]">
  {/* (For Auto Predefined Width)<div className="mx-auto max-w-sm">  */}
  {/* (For Custom Maximum Width) max-w-[400px] */}
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-2xl">Financial Management System</h1>

    <form className="mb-0 rounded-lg p-4  sm:p-6 lg:p-8">
      <p className="mt-1 text-center text-lg font-medium text-black">Sign in to your account</p>

      <div>
        <label for="username" className='mb-1  text-xs font-bold inline-block text-black'>User Name</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg text-black border border-gray-400 p-2 text-xs shadow-sm"
            placeholder="Enter User Name"
            id='username'
          />

          
        </div>
      </div>

      <div>
        <label for="password" className="mb-1 text-xs font-bold inline-block text-black">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg text-black border border-gray-400 p-2 pe-12 text-xs shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
         className="block w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
      >
        Sign in
      </button>

      <p className="text-center text-sm text-gray-500">
        No account?
        <a className="underline" href="#">Sign up</a>
      </p>
    </form>
  </div>
</div>

</div>

    </div>
  )
}

export default page