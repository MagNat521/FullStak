# app/api/v1/endpoints/repair_requests.py
from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.deps import get_db, get_current_user  # функция, которая даёт Session
from app.models.user import User
from app.schemas.repair_request import (
    RepairRequest,
    RepairRequestCreate,
    RepairRequestUpdate,
    RepairRequestList,
)
from app.services import repair_request_service

router = APIRouter(prefix="/repair-requests", tags=["repair-requests"])


@router.get("/", response_model=RepairRequestList)
def list_repair_requests(
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    items = repair_request_service.get_requests(db, skip=skip, limit=limit)
    total = len(items)
    return {"items": items, "total": total}


@router.get("/{request_id}", response_model=RepairRequest)
def get_repair_request(
    request_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    obj = repair_request_service.get_request(db, request_id)
    if not obj:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Repair request not found",
        )
    return obj


@router.post(
    "/",
    response_model=RepairRequest,
    status_code=status.HTTP_201_CREATED,
)
def create_repair_request(
    data: RepairRequestCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return repair_request_service.create_request(db, data)


@router.put("/{request_id}", response_model=RepairRequest)
def update_repair_request(
    request_id: int,
    data: RepairRequestUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    obj = repair_request_service.get_request(db, request_id)
    if not obj:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Repair request not found",
        )
    return repair_request_service.update_request(db, obj, data)


@router.delete(
    "//{request_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_repair_request(
    request_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    obj = repair_request_service.get_request(db, request_id)
    if not obj:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Repair request not found",
        )
    repair_request_service.delete_request(db, obj)
    return None
