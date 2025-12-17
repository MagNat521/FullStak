# app/models/repair_request.py
from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime
from app.core.db import Base  # импортируй из своего проекта


class RepairRequest(Base):
    __tablename__ = "repair_requests"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    status = Column(String(50), nullable=False, default="new")
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
