import React, { useEffect, useState } from "react";

const Admin = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        const message = data.message; // Получаем текст из ключа "message" в объекте "data"
        setMessage(message); // Устанавливаем значение в стейт "message"
        console.log("Data received");
      });
  }, []);

  return <div>{message}</div>;
};

export default Admin;
