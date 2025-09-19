const getSessionStorage = (key: string, initialValue: any) => {
  const saved = sessionStorage.getItem(key);

  if (saved) {
    return JSON.parse(saved);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  sessionStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
};

const setSessionStorage = (key: string, value:any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string, initialValue: any) => {
  const saved = localStorage.getItem(key);

  if (saved) {
    return JSON.parse(saved);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  localStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
};

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getSessionStorage, setSessionStorage, setLocalStorage, getLocalStorage };
