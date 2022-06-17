import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { fetchUser } from "./utils/fetchUser";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  });

  useEffect(() => {
    const User = fetchUser();

    if (!User) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
};

export default App;
