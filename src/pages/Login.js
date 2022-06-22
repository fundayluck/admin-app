import { useRef, useState, useEffect } from "react";
import useAuth from "../ahooks/useAuth";
import { useNavigate } from "react-router-dom";
import Api from "../api/Api";
const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errReff = useRef();

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errMess, setErrMess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMess("");
  }, [user, pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Api.post(LOGIN_URL, {
        email: "akun12@mig.id",
        password: "BA8A9E03",
      });

      console.log(JSON.stringify(response?.data));
      const access_token = response?.data?.access_token;
      setAuth({ user, pass, access_token });
      setUser("");
      setPass("");
      navigate("/home");
    } catch (err) {
      if (!err.response) {
        setErrMess("Network Error");
      } else if (err.response.status === 400) {
        setErrMess("Missing username or Password");
      } else if (err.response.status === 401) {
        setErrMess("unauthorized");
      } else {
        setErrMess("login failed");
      }
    }
  };

  return (
    <>
      <section>
        <p
          ref={errReff}
          className={errReff ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMess}
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
          <button>Sign In</button>
        </form>
      </section>
    </>
  );
};

export default Login;
