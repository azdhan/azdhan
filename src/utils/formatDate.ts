export function formatDate(date: unknown, includeRelative = false) {
  const currentDate = new Date();

  let targetDate: Date;

  // Case 1: already a valid Date
  if (date instanceof Date && !isNaN(date.getTime())) {
    targetDate = date;
  }

  // Case 2: string → try parsing
  else if (typeof date === "string") {
    const normalized = date.includes("T") ? date : `${date}T00:00:00`;
    targetDate = new Date(normalized);
  }

  // Case 3: fallback (invalid / undefined / weird type)
  else {
    targetDate = new Date();
  }

  // If parsing failed → fallback
  if (isNaN(targetDate.getTime())) {
    targetDate = new Date();
  }

  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));

  let formattedDate = "";

  if (daysAgo >= 365) {
    formattedDate = `${Math.floor(daysAgo / 365)}y ago`;
  } else if (daysAgo >= 30) {
    formattedDate = `${Math.floor(daysAgo / 30)}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else if (hoursAgo > 0) {
    formattedDate = `${hoursAgo}h ago`;
  } else if (minutesAgo > 0) {
    formattedDate = `${minutesAgo}m ago`;
  } else {
    formattedDate = "just now";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}