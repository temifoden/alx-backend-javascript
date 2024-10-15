#!/usr/bin/env python3
"""
This module contains asynchronous functions for handling concurrent tasks,
specifically spawning tasks that simulate delays using asyncio.
"""
import asyncio
from typing import List


# Dynamically import wait_random using __import__()
# for the module with the number
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with a maximum delay of max_delay seconds for each task.
    
    Args:
        n (int): The number of times to spawn the wait_random coroutine.
        max_delay (int): The maximum number of seconds to wait for each task.
    
    Returns:
        List[float]: A list of delay times (in seconds) returned by the wait_random coroutines.
    """
    delays = []
    # Create asyncio tasks for each wait_randon coroutine
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # Gather completed tasks and store the delays
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
