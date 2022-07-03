import React from 'react'
import Student from './Student';


const StudentList = (props) => {
    return (
        <>
            <p className='p-3 mb-2 text-center text-purple-700 align-middle'>All Students</p>
            <table className="table-auto text-center mx-auto">
                <thead className='border'>
                    <tr>
                        <th className='border'>Name</th>
                        <th className='border'>Email</th>
                        <th className='border'>RollNo</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {
                        props.mStudents.map(
                            (stud, index) => {
                                return <Student key={index} student={stud} />
                            }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default StudentList