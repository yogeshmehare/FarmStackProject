import React from 'react'

const Student = (props) => {
    return (
        <tr className='border'>
            <td className='border p-2'>{props.student.sName}</td>
            <td className='border p-2'>{props.student.sEmail}</td>
            <td className='border p-2'>{props.student.sRollNo}</td>
        </tr>
    )
}

export default Student