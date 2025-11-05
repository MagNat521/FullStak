from fastapi import APIRouter, HTTPException, status

router = APIRouter()

@router.get("/{inspection_id}")
async def get_inspection(inspection_id: str):
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")

@router.post("/run")
async def run_inspection():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
