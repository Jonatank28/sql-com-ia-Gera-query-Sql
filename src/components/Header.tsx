import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { PiFileSql } from 'react-icons/pi'

const Header = () => {
    return (
        <header className="flex justify-between">
            <div className="flex gap-1 items-center">
                <PiFileSql className="text-lg" />
                <h1 className="text-lg font-bold">askSQL</h1>
            </div>
            <FaTrashAlt className="text-lg" />
        </header>
    )
}

export default Header
