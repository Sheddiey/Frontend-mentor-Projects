function SignupPage () {
    return (<>
        <div className="container register-cont">
        <h2 className="clr-100 fs-100 fw-100">PAYLOG</h2>
        <p className="clr-100 fs-200 fw-100 margin-block-end">Register</p>
        <form className="form" action="URL">
          <input type="email" placeholder="Email" required=""/>
          <input type="password" placeholder="Password" required=""/>
          <input type="password" placeholder="Confirm password" required=""/>
          <input type="submit" value="REGISTER" className="register-btn"/>
        </form>
        <a href="/src/components/LoginPage.jsx" className="signup-link">Already have an account? Login</a>
      </div>
        </>);
}

export default SignupPage;