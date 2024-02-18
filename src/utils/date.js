// 0000년 00월 00일 월요일
export function timeString(date) {
  return new Date(date).toLocaleDateString("ko-kr", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
