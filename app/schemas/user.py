# app/schemas/user.py
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field


class UserBase(BaseModel):
    email: EmailStr


class UserCreate(UserBase):
    password: str = Field(..., min_length=8)


class UserInDBBase(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        orm_mode = True
        from_attributes = True


class User(UserInDBBase):
    pass
