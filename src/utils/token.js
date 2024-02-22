import authAPI from "../apis/auth";

export const isValidToken = async () => {
  try {
    await authAPI.get("/user");
  } catch (err) {
    console.error(err);
    localStorage.clear();
    alert("토큰이 만료되었습니다. 다시 로그인 해주세요");
    return false;
  }
  return true;
};
