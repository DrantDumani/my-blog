import { RouterForm } from "../../components/RouterForm/RouterForm";
import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { Button } from "../../components/Button/Button";
import { useActionData } from "react-router-dom";
import styles from "./SignUp.module.css";

export function SignUp() {
  const errs = useActionData();
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Sign Up</h1>
      <RouterForm method="POST" action="/signup">
        <div className={styles.inputErrWrap}>
          <InputWrapper
            label="Username:"
            placeholder="Edgar Allen Poe"
            name="username"
          />
          {errs && errs.username && (
            <p className={styles.err}>{errs.username.msg}</p>
          )}
        </div>

        <div className={styles.inputErrWrap}>
          <InputWrapper
            label="Email:"
            type="email"
            placeholder="nevermore@raven.com"
            name="email"
          />
          {errs && errs.email && <p className={styles.err}>{errs.email.msg}</p>}
        </div>

        <div className={styles.inputErrWrap}>
          <InputWrapper
            label="Password:"
            type="password"
            placeholder="********"
            name="password"
          />
          {errs && errs.password && (
            <p className={styles.err}>{errs.password.msg}</p>
          )}
        </div>

        <div className={styles.inputErrWrap}>
          <InputWrapper
            label="Confirm Password:"
            type="password"
            placeholder="********"
            name="confirmPw"
          />
          {errs && errs.confirmPw && (
            <p className={styles.err}>{errs.confirmPw.msg}</p>
          )}
        </div>
        <Button>Sign Up</Button>
      </RouterForm>
    </div>
  );
}
