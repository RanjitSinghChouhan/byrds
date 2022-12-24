import React from 'react'
import GraphicalContent from './GraphicalContent/GraphicalContent'
import Navbar from './Navbar/Navbar'

function Content() {
    return (
        <div className='ml-3'>
            <Navbar />
            <GraphicalContent />
        </div>
    )
}

export default Content