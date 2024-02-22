import fanLetterAPI from "./fanletter";

export const getFanLetters = async () => {
  const { data } = await fanLetterAPI.get("/fanletter?_sort=createdAt");
  return data;
};

export const addFanLetter = async (newFanLetter) => {
  const { data } = await fanLetterAPI.post("/fanletter", newFanLetter);
  return data;
};
