import authAPI from "../apis/auth";

export const isValidToken = async () => {
  try {
    const response = await authAPI.get("/user");
    console.log("토큰 살아있음", response);
  } catch (err) {
    console.log(err);
    localStorage.clear();
    return false;
  }
  return true;
};
