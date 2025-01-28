export const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("loginInfo"))?.token}`, 
    'Content-Type': 'application/json' 
  };