from fastapi import APIRouter, HTTPException, status

router = APIRouter()

@router.get("/")
async def list_defects():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")

@router.get("/{defect_id}")
async def get_defect(defect_id: str):
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
