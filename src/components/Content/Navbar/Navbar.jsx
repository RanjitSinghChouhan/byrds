import React from 'react'

function Navbar() {
    return (
        <div className='flex items-center gap-6 px-8 py-4'>
            <form className="flex items-center w-3/6">
                <label for="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
            </form>
            <h1 className='text-4xl min-w-max relative'>Hi, Viresh<sup className='text-xs bg-red-400 rounded-full h-6 w-6 p-1 absolute -top-1 -right-6 text-white'>23</sup></h1>
            <div className='flex items-center gap-4'>
                <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400 ml-48" type="button">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                    <div className="flex relative">
                        <div className="inline-flex relative -top-2 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                </button>
                <div className="overflow-hidden relative w-10 h-10 p-2 text-gray-500 bg-yellow-300 rounded-full dark:bg-gray-600">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                <div className='ml-2'>
                    <h3 className='text-xs min-w-max'><strong>Andrew</strong></h3>
                    <div className='text-xs min-w-max'>Admin Account</div>
                </div>
            </div>

        </div>
    )
}

export default Navbar