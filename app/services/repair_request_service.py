# app/services/repair_request_service.py
from sqlalchemy.orm import Session

from app.models.repair_request import RepairRequest
from app.schemas.repair_request import (
    RepairRequestCreate,
    RepairRequestUpdate,
)


def get_request(db: Session, request_id: int) -> RepairRequest | None:
    return db.query(RepairRequest).filter(RepairRequest.id == request_id).first()


def get_requests(db: Session, skip: int = 0, limit: int = 100) -> list[RepairRequest]:
    return (
        db.query(RepairRequest)
        .order_by(RepairRequest.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )


def create_request(db: Session, data: RepairRequestCreate) -> RepairRequest:
    db_obj = RepairRequest(
        title=data.title,
        status=data.status,
    )
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def update_request(
    db: Session,
    db_obj: RepairRequest,
    data: RepairRequestUpdate,
) -> RepairRequest:
    if data.title is not None:
        db_obj.title = data.title
    if data.status is not None:
        db_obj.status = data.status
    db.commit()
    db.refresh(db_obj)
    return db_obj


def delete_request(db: Session, db_obj: RepairRequest) -> None:
    db.delete(db_obj)
    db.commit()
