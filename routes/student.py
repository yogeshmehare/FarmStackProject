import imp
from bson import ObjectId
from fastapi import APIRouter
from models.student import Student
from config.db import connection
from schemas.student import listOfStudentEntities, studentEntity

student_router = APIRouter()

@student_router.get('/students')
async def findAllStudents():
    return listOfStudentEntities(connection.local.student.find())


@student_router.get('/hello')
async def printHello():
    return 'Hello'

@student_router.post('/students')
async def insertStudent(stud : Student):
    connection.local.student.insert_one(dict(stud))
    return listOfStudentEntities(connection.local.student.find())

@student_router.put('/students/{studId}')
async def updateStudent(studId,studentObj:Student):
    connection.local.student.find_one_and_update({"_id": ObjectId(studId)},{"$set":dict(studentObj)})
    return studentEntity(connection.local.student.find_one({"_id": ObjectId(studId)}))

@student_router.delete('/students/{studId}')
async def deleteStudent(studId):
    connection.local.student.find_one_and_delete({"_id": ObjectId(studId)})
    return listOfStudentEntities(connection.local.student.find())

