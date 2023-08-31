import "./App.css";
import { useContext, useEffect, useState } from "react";
import { Login } from "./Pages/Login/Login";
import { LoginContext } from "./Context/loginContext";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Eror } from "./Pages/Eror/Eror";
import { SinglePage } from "./Pages/SinglePage/SinglePage";

function App() {
  let { login } = useContext(LoginContext);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoad(true)
      });
  }, []);
  return (
    <>
      {login ? (
        <Routes>
          <Route path="/" element={<Home data={data} load={load} setLoad={setLoad} />} />
          <Route path="/buy/:id" element={<SinglePage data={data} />} />
          <Route path="*" element={<Eror />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Eror />} />
        </Routes>
      )}
    </>
  );
}
<Login />;

export default App;
