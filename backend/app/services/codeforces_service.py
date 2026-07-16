from fastapi import HTTPException
import httpx
from collections import Counter

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

async def get_problem_tags(handle: str):

    url = f"{BASE_URL}/user.status?handle={handle}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)

    data = response.json()

    if data["status"] != "OK":
        return {
            "error" : "Unable to fetch submissions"
        }
    
    solved = set()
    tag_counter = Counter()

    for submission in data["result"]:

        # only accepted submissions
        if submission.get("verdict") != "OK":
            continue

        problem = submission["problem"]

        # Unique problem identifier
        problem_id = problem.get("name"),
        
        # Skip duplicate accepted solutions
        if problem_id in solved:
            continue

        solved.add(problem_id)

        # Count tags
        for tag in problem.get("tags", []):
            tag_counter[tag] += 1
    
    return dict(tag_counter)