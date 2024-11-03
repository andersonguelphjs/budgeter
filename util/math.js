export const calculateTotal = (startTime, endTime, hourlyRate) => {
  // Parse the start and end times
  const start = new Date(startTime);
  const end = new Date(endTime);
  console.log("calculateTotal", start, end, hourlyRate);
  // Check if start time is after end time
  if (start > end) {
    return 0;
  }

  // Calculate the difference in milliseconds
  const differenceInMs = end - start;

  // Convert the difference from milliseconds to hours
  const differenceInHours = differenceInMs / (1000 * 60 * 60);

  // Calculate the total cost (rounding the hours if necessary, e.g., you might want to use Math.floor, Math.round, etc.)
  const totalCost = differenceInHours * hourlyRate;

  return totalCost;
};
