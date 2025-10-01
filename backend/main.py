from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from bson import ObjectId
import motor.motor_asyncio

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://mongo:27017")
db = client.notesdb

class NoteModel(BaseModel):
    title: str
    content: str

@app.get("/notes")
async def get_notes():
    notes = []
    async for note in db.notes.find():
        notes.append({"id": str(note["_id"]), "title": note["title"], "content": note["content"]})
    return notes

@app.post("/notes")
async def create_note(note: NoteModel):
    new_note = await db.notes.insert_one(note.dict())
    return {"id": str(new_note.inserted_id)}

@app.put("/notes/{note_id}")
async def update_note(note_id: str, note: NoteModel):
    updated = await db.notes.update_one({"_id": ObjectId(note_id)}, {"$set": note.dict()})
    if updated.modified_count == 0:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"msg": "Note updated"}

@app.delete("/notes/{note_id}")
async def delete_note(note_id: str):
    deleted = await db.notes.delete_one({"_id": ObjectId(note_id)})
    if deleted.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"msg": "Note deleted"}
