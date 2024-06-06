import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { RouterForm } from "../../components/RouterForm/RouterForm";
import { Button } from "../../components/Button/Button";
import { useActionData } from "react-router-dom";

export function Login() {
  const error = useActionData();

  return (
    <div>
      <RouterForm method="POST">
        <InputWrapper label="Email:" type="email" name="email" />
        <InputWrapper label="Password:" type="password" name="password" />
        <Button>Log In</Button>
      </RouterForm>
      {error && <p>{error}</p>}
    </div>
  );
}
