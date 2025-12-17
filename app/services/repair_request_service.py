# app/services/repair_request_service.py
from sqlalchemy.orm import Session

from app import models
from app.schemas.repair_request import (
    RepairRequestCreate,
    RepairRequestUpdate,
)


def get_request(db: Session, request_id: int) -> models.RepairRequest | None:
    return db.query(models.RepairRequest).filter(models.RepairRequest.id == request_id).first()


def get_requests(db: Session, skip: int = 0, limit: int = 100) -> list[models.RepairRequest]:
    return (
        db.query(models.RepairRequest)
        .order_by(models.RepairRequest.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )


def create_request(db: Session, data: RepairRequestCreate) -> models.RepairRequest:
    db_obj = models.RepairRequest(
        title=data.title,
        status=data.status,
    )
    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def update_request(
    db: Session,
    db_obj: models.RepairRequest,
    data: RepairRequestUpdate,
) -> models.RepairRequest:
    if data.title is not None:
        db_obj.title = data.title
    if data.status is not None:
        db_obj.status = data.status
    db.commit()
    db.refresh(db_obj)
    return db_obj


def delete_request(db: Session, db_obj: models.RepairRequest) -> None:
    db.delete(db_obj)
    db.commit()
