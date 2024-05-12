const useNGCS = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const code = urlParams.get("code");
  const userId = urlParams.get("userId");
  const loginMethod = urlParams.get("loginMethod");
  const OTPCode = urlParams.get("OTPCode");

  return { code, userId, loginMethod, OTPCode };
};

export default useNGCS;
