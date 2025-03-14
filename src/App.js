import './App.css';
import { useEffect, useCallback } from 'react';
import axios from 'axios';


function App() {
  const baseURL = process.env.REACT_APP_BACKEND_URL;

  // Define the API function with useCallback to avoid dependency issues
  const sendAPI = useCallback(async () => {
    try {
      await axios.post(`${baseURL}/user/signin`, {
        email: "vishwanath@gmail.com",
        password: "9019393599$$Vv"
      },
        {
          headers: {
            "Content-Type": "application/json",
          },
        });
    } catch (err) {
      console.error("API Error:", err);
    }
  }, [baseURL]);

  useEffect(() => {
    const interval = setInterval(() => {
      sendAPI();
    }, 10000);

    return () => clearInterval(interval);
  }, [sendAPI]);

  return (
    <div className="App">
      <h1>Welcome to Infinite API</h1>
    </div>
  );
}

export default App;
