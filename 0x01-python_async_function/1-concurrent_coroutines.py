import asyncio
from typing import List

async def wait_n (n, max_delay: int)-> List[float]:
    """Spawn wait_random n times, and return the list of all delays in ascending order"""
    delays = []
    # Create asyncio tasks for each wait_randon coroutine
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # Gather completed tasks and store the delays
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
