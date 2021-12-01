import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div className="bg-red-600 text-white text-center p-2 font-bold mb-4 rounded-md uppercase">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error
