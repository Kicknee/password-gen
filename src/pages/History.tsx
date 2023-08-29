import { useState, useEffect } from "react";
import { loadFromLocalStorage } from "../utilities/loadFromLocalStorage";

export const History = () => {
  const [passwordsHistory, setPasswordsHistory] = useState([""]);

  useEffect(() => {
    setPasswordsHistory(loadFromLocalStorage());
    console.log("ff");
  }, []);

  return (
    <ul className="passwords-list">
      {passwordsHistory.map((el, indx) => (
        <li key={indx}>{el}</li>
      ))}
    </ul>
  );
};
