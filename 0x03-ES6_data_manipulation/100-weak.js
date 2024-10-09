// Export a WeakMap instance
export const weakMap = new WeakMap();

// Export the queryAPI function
export const queryAPI = (endpoint) => {
  // Check if the endpoint is already in the WeakMap
  if (weakMap.has(endpoint)) {
    // Get the current count of queries for this endpoint
    const count = weakMap.get(endpoint);

    // If the count is 5 or more, throw an error
    if (count >= 5) {
      throw new Error("Endpoint load is high");
    }

    // Increment the count for this endpoint
    weakMap.set(endpoint, count + 1);
  } else {
    // If the endpoint is not in the WeakMap, initialize with count 1
    weakMap.set(endpoint, 1);
  }
};
