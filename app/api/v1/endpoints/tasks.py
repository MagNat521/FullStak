from fastapi import APIRouter, HTTPException, status

router = APIRouter()

@router.post("/")
async def create_repair_task():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")

@router.get("/")
async def list_repair_tasks():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
