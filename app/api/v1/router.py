from fastapi import APIRouter
from app.api.v1.endpoints import health, auth, uploads, inspections, defects, tasks, admin, repair_requests

api_router = APIRouter()
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(uploads.router, prefix="/uploads", tags=["uploads"])
api_router.include_router(inspections.router, prefix="/inspections", tags=["inspections"])
api_router.include_router(defects.router, prefix="/defects", tags=["defects"])
api_router.include_router(tasks.router, prefix="/tasks", tags=["tasks"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
api_router.include_router(repair_requests.router, prefix="/repair-requests", tags=["repair-requests"],)
