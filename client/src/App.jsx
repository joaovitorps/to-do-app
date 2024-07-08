import { useEffect } from "react";
import api from "./api";

const App = () => {
  const getData = () => {
    api
      .get("/")
      .then((body) => {
        console.log(body);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
        - - {process.env.API_URL} - -
      </small>
      <h1>Hey there</h1>
    </>
  );
};

export default App;
