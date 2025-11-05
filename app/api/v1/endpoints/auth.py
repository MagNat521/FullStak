from fastapi import APIRouter, HTTPException, status

router = APIRouter()

@router.post("/register")
async def register_inspector():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")

@router.post("/login")
async def login():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")

@router.post("/logout")
async def logout():
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Not implemented yet")
