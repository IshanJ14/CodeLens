from fastapi import HTTPException
import httpx

BASE_URL = "https://codeforces.com/api"

async def get_user_info(handle: str):

    url = f"{BASE_URL}/user.info?handles={handle}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
    
    data = response.json()

    if data["status"] != "OK":
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )
    return data["result"][0]

async def get_rating_history(handle: str):

    url = f"{BASE_URL}/user.rating?handle={handle}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)

    data = response.json()

    if data["status"] != "OK":
        raise HTTPException(
            status_code=404,
            detail="Unable to fetch rating history for the user"
        )
    return data["result"]