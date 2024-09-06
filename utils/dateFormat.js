export function formatMonthYear(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  return `Tháng ${month + 1} Năm ${year}`;
}
