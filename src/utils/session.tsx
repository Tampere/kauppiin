export const setStore = (key: string, value: any) => {
    let data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
  }
  
  export const getStore = (key: string) => {
    let data = sessionStorage.getItem(key);
    if(data === null) return null;
    else return JSON.parse(data);
  }
  
  export const clearStore = () => {
    sessionStorage.clear();
  }