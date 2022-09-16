const key = "SavedEvents";

export const SetEvents = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const GetEvents = () => {
  const data = localStorage.getItem(key);
  if (data !== undefined) {
    return JSON.parse(data);
  }
  return null;
};
