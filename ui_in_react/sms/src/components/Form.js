import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentList from './StudentList';
// import 'bootstrap/dist/css/bootstrap.min.css'

const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [rollNo, setRollNo] = useState(0)

  const [students, setStudents] = useState([])



  const insertStudent = (e) => {
    // e.preventDefault()
    var li = students
    li.push({ name: name, email: email, rollNo: rollNo })
    setStudents(li)
    axios.post('http://localhost:8000/students', { name: name, email: email, rollNo: rollNo })
    getAllStudents()
  }

  const getAllStudents = () => {
    axios.get('http://localhost:8000/students')
      .then(
        res => {
          console.log(res.data);
          setStudents(res.data)
        }
      ).catch(err => { console.log(err) })
  }

  useEffect(() => {
    getAllStudents()
  }, [])

  return (
    <>
      <div className='flex justify-center items-center'>
        <h1 className='my-2 p-2 container text-purple-600 border text-center shadow-md font-serif '>Student Management System</h1>
      </div>

      <div className='flex-col container border mx-auto shadow-sm
      '>
        <div className="m-3 text-center">
          <label htmlFor="formGroupExampleInput" className="form-label font-bold">Enter Name: </label>
          <input type="text" onChange={(e) => setName(e.target.value)} className="form-control p-1 m-1 font-semibold border" id="formGroupExampleInput" placeholder="John Doe" />
        </div>
        <div className="m-3 text-center">
          <label htmlFor="formGroupExampleInput2" className="form-label font-bold">Enter Email: </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control p-1 m-1 font-semibold border" id="formGroupExampleInput2" placeholder="johndoe@example.com" />
        </div>
        <div className="m-3 text-center">
          <label htmlFor="formGroupExampleInput3" className="form-label font-bold">Enter Roll No: </label>
          <input type="number" onChange={(e) => setRollNo(e.target.value)} className="form-control p-1 m-1 font-semibold border" id="formGroupExampleInput3" placeholder="1" />
        </div>
        <div className='mx-auto p-2 text-center'>
          <button onClick={(e) => insertStudent(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register Student</button>
        </div>
      </div>

      <div className='mx-auto'>
        <StudentList mStudents={students} />
      </div>

    </>
  )
}

export default Form
