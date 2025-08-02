import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    // Your authentication logic would go here
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logoContainer}>
          <FcGoogle size={48} />
        </div>
        <h1>Sign in</h1>
        <p>to continue to Gmail</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email or phone</label>
          </div>

          <p className={styles.forgotEmail}>Forgot email?</p>

          <p className={styles.notYourComputer}>
            Not your computer? Use a private Browse window to sign in.
            <br />
            <a href="#">Learn more</a>
          </p>

          <div className={styles.buttonGroup}>
            <button type="button" className={styles.createAccountButton}>
              Create account
            </button>
            <button type="submit" className={styles.nextButton}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
