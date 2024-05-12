# NarinGames-Consent-Screen

NarinGames Consent Screen (SSO - Login &amp; Sign-up user)

## How to use

Add the package to the project using the command below

```
npm i naringames-consent-screen
```

Then you can import the package as your desired file and use it

The login method can only contain parameters: `otp` or `userpass`

If you do not need a special method, skip sending this parameter

```
import { useNGCS, LoginByNGCS } from "naringames-consent-screen";
function App() {
  const { code, userId, loginMethod, OTPCode } = useNGCS();
  console.log(code);
  console.log(userId);
  console.log(loginMethod);
  console.log(OTPCode);
  return (
    <>
      <LoginByNGCS clientId={3} label={"login"} loginMethod={"otp"} />
    </>
  );
}

export default App;

```

## Custom styling

You can use the default `.ngcs-button` class or set your own class in this way:

```
<LoginByNGCS clientId={3} className={"my-class"} />
```
