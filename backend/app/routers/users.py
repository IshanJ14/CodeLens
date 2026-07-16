from fastapi import APIRouter
from app.services.codeforces_service import (
    get_user_info,
    get_rating_history,
    get_problem_tags,
)

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.get("/{handle}")
async def get_user(handle: str):
    return await get_user_info(handle)

@router.get("/{handle}/rating")
async def rating_history(handle: str):
    return await get_rating_history(handle)

@router.get("/{handle}/tags")
async def problem_tags(handle: str):
    return await get_problem_tags(handle)