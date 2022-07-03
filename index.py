 #import
from turtle import st
from fastapi import FastAPI
from routes.student import student_router

#Create App
app = FastAPI()

#registering router
app.include_router(student_router)
