import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { RouterForm } from "../../components/RouterForm/RouterForm";
import { Button } from "../../components/Button/Button";
import { useActionData } from "react-router-dom";
import styles from "./Login.module.css";

export function Login() {
  const error = useActionData();

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.title}>Log In</h1>
      <RouterForm method="POST">
        <InputWrapper label="Email:" type="email" name="email" />
        <InputWrapper label="Password:" type="password" name="password" />
        <Button>Log In</Button>
      </RouterForm>
      {error && <p className={styles.err}>{error}</p>}
    </div>
  );
}
