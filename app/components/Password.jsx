import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Head from "next/head";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // This would come from the previous page's state in a real app
  const userEmail = "user@example.com";

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (password === "") {
      setIsFocused(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password submitted for ${userEmail}: ${password}`);
    // Your authentication logic here
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign in - Google Accounts</title>
      </Head>

      <div className={styles.loginCard}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <FcGoogle size={48} />
          </div>
          <h1>Welcome</h1>
          <div className={styles.userIdentifier}>
            <span className={styles.userEmail}>{userEmail}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            className={`${styles.inputGroup} ${
              isFocused ? styles.inputGroupFocused : ""
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className={styles.inputField}
            />
            <label htmlFor="password" className={styles.inputLabel}>
              Enter your password
            </label>
          </div>

          <div className={styles.showPasswordContainer}>
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show-password">Show password</label>
          </div>

          <div className={styles.linkContainer}>
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>

          <div className={styles.buttonGroup}>
            <a href="#" className={styles.createAccountLink}>
              Back
            </a>
            <button type="submit" className={styles.nextButton}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
