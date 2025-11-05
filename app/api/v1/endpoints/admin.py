from fastapi import APIRouter, HTTPException, status

router = APIRouter()

@router.post("/roads")
async def create_road_segment():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
