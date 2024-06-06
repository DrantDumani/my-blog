export function humanReadable(timestamp) {
  const readable = new Date(timestamp);
  return readable.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
