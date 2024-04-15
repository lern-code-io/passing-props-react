import { useState, useEffect } from "react";
import "./App.css";
import { Avatar } from "./Avatar";

function App() {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos/1"
        );
        const data = await res.json();
        setPhoto(data);
      } catch (e) {
        console.log(e);
      }
    };

    getPhoto();
  }, []);

  return (
    <>
    {/* pass props to this component */}
    <Avatar />
    </>
  );
}

export default App;
