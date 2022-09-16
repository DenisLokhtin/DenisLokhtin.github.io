const key = "index";

export const SetIndex = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const GetIndex = () => {
  const data = localStorage.getItem(key);
  if (data !== undefined) {
    return JSON.parse(data);
  }
  return null;
};
