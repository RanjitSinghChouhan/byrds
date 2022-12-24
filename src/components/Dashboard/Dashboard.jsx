import React from 'react'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'

function Dashboard() {
    return (
        <div className='flex'>
            <div className='w-1/6'>
                <SideBar />
            </div>
            <div className='w-5/6'>
                <Content />
            </div>

        </div>
    )
}

export default Dashboard