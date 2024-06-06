import { RouterForm } from "../../components/RouterForm/RouterForm";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { Button } from "../../components/Button/Button";
import { useActionData } from "react-router-dom";

export function SignUp() {
  const errs = useActionData();
  return (
    <RouterForm method="POST">
      <InputWrapper
        label="Username:"
        placeholder="Edgar Allen Poe"
        name="username"
      />
      {errs && errs.username && <p>{errs.username.msg}</p>}

      <InputWrapper
        label="Email:"
        type="email"
        placeholder="nevermore@raven.com"
        name="email"
      />
      {errs && errs.email && <p>{errs.email.msg}</p>}

      <InputWrapper
        label="Password:"
        type="password"
        placeholder="********"
        name="password"
      />
      {errs && errs.password && <p>{errs.password.msg}</p>}

      <InputWrapper
        label="Confirm Password:"
        type="password"
        placeholder="********"
        name="confirmPw"
      />
      {errs && errs.confirmPw && <p>{errs.confirmPw.msg}</p>}
      <Button>Sign Up</Button>
    </RouterForm>
  );
}
