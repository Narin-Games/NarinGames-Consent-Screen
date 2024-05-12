import React from "react";

const LoginByNGCS = ({ clientId, loginMethod, label, className }) => {
  const handleClick = () => {
    const url = new URL("https://service.naringames.com/login");
    url.searchParams.set("clientId", clientId);
    url.searchParams.set("loginMethod", loginMethod || "");
    window.location.href = url.href;
  };

  return (
    <button className={className || "ngcs-button"} onClick={handleClick}>
      {label || "ورود از طریق نارین گیمز"}
    </button>
  );
};

export default LoginByNGCS;
