export const useLocalStorage = (key) => {
  const item = JSON.parse(localStorage.getItem(key));

  const set = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { item, set };
};
