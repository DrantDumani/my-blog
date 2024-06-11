export function humanReadable(timestamp) {
  const readable = new Date(timestamp);
  return readable.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const xTimeAgo = (timestamp) => {
  const diff = Date.now() - timestamp;

  if (diff < 1000) return "Now";

  let key = "";
  const stringMap = {
    1000: "second",
    60000: "minute",
    3600000: "hour",
    86400000: "day",
    604800000: "week",
    2628000000: "month",
    31540000000: "year",
  };

  for (let k of Object.keys(stringMap)) {
    key = diff >= k ? k : key;
  }
  const numPassed = Math.floor(diff / key);
  const timeStr = `${numPassed} ${stringMap[key]}${
    numPassed !== 1 ? "s" : ""
  } ago`;
  return timeStr;
};
