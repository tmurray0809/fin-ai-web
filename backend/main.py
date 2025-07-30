from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from classes.user import User

app = FastAPI()

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def root():
    return {"message":"Hello, world!"}

@app.post("/login")
async def login(data: User):
    print(data)
    if data.email == "tmurray2024@gmail.com" and data.password == "Parkview2015!":
        return {"message":"success"}
    raise HTTPException(status_code=401, detail="Incorrect Username or Password")