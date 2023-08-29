function LoginPage() {
  return (
    <>
      <div className="container login-cont">
        <h2 className="clr-100 fs-100 fw-100">PAYLOG</h2>
        <p className="clr-100 fs-200 fw-100 margin-block-end">Login</p>
        <form className="form" action="URL">
          <input type="email" placeholder="Email" required="" />
          <input type="password" placeholder="Password" required="" />
          <input type="submit" defaultValue="LOGIN" className="login-btn" />
        </form>
        <a href="/src/components/SignupPage.jsx" className="signin-link">
          <p>{"Don't have an account? Sign up"}</p>
        </a>
      </div>
    </>
  );
}

export default LoginPage;
