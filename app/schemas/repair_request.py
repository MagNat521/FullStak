# app/schemas/repair_request.py
from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class RepairRequestBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    status: str = Field(..., min_length=1, max_length=50)


class RepairRequestCreate(RepairRequestBase):
    pass


class RepairRequestUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    status: Optional[str] = Field(None, min_length=1, max_length=50)


class RepairRequestInDBBase(RepairRequestBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True  # если используешь ORM
        orm_mode = True


class RepairRequest(RepairRequestInDBBase):
    """Схема для возврата на клиент."""


class RepairRequestList(BaseModel):
    items: list[RepairRequest]
    total: int
