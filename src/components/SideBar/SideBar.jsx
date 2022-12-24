import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faDashboard, faFire, faMobile, faPager, faPerson, faPlateWheat, faRoute, faUndoAlt, faUpload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import birdIcon from '../../assets/hummingbird.png'

function SideBar() {
    return (
        <div className='bg-slate-50'>
            <div className='w-2/5 my-0.5 mx-auto p-2'>
                <img className='bg-slate-50' src={birdIcon} alt="" />
            </div>
            <div className='grid grid-cols-2 gap-4 place-items-center px-8 py-4'>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faDashboard} /></div>
                    <div className='text-center text-xs'>Dashboard</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer' ><FontAwesomeIcon className='mt-2' icon={faMobile} /></div>
                    <div className='text-center text-xs'>Profile</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faPager} /></div>
                    <div className='text-center text-xs'>Byrds Page</div>
                </div>
                <div className='w-2/4' >
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faRoute} /></div>
                    <div className='text-center text-xs'>API</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faCamera} /></div>
                    <div className='text-center text-xs'>Echo Eco</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faPlateWheat} /></div>
                    <div className='text-center text-xs'>Leader Board</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faFire} /></div>
                    <div className='text-center text-xs'>Completed Transactions</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer' ><FontAwesomeIcon className='mt-2' icon={faUndoAlt} /></div>
                    <div className='text-center text-xs'>Pending Transactions</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faUpload} /></div>
                    <div className='text-center text-xs'>Latest Updates</div>
                </div>
                <div className='w-2/4'>
                    <div className='text-center text-gray-500 bg-slate-100 h-8 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer'><FontAwesomeIcon className='mt-2' icon={faPerson} /></div>
                    <div className='text-center text-xs'>Logout</div>
                </div>

            </div>
            <div className='h-52 rounded-2xl overflow-hidden m-6'>
                <img className='h-full w-full object-cover' src="data:image/jpeg;base64,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" alt="" />
            </div>
        </div>
    )
}

export default SideBar