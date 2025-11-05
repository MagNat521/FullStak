from fastapi import APIRouter, HTTPException, status

router = APIRouter()

@router.post("/")
async def create_upload_session():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")

@router.post("/{upload_id}/image")
async def upload_image(upload_id: str):
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")

@router.post("/{upload_id}/complete")
async def complete_upload(upload_id: str):
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
