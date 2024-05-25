import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  //yönlendirme yapmak için kullanılan hook
  const navigate = useNavigate();
  // set etmek için kullanılan useState
  const [count, setCount] = useState(5);
  //count degiştiginde calısacak useEffect
  useEffect(() => {
    if (count === 0) {
      navigate("/");
      return;
    }
    const time = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count, navigate]);
  return (
    <div>
      <h2>Oopps...</h2>
      <p>You will be redirected in 5 second to home page</p>
      <h3>{count}</h3>
    </div>
  );
};

export default NotFoundPage;
