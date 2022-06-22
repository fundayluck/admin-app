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
      navigate("/");
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
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="text"
                    id="user"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    id="pass"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                    className="appearance-none mb-3 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
