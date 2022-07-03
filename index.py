 #import
from turtle import st
from fastapi import FastAPI
from routes.student import student_router
from fastapi.middleware.cors import CORSMiddleware

clientApps = ['http://localhost:3000']

#Create App
app = FastAPI()

#registering router
app.include_router(student_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins = clientApps,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    )
