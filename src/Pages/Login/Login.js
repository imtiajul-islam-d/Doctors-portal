import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signInEmail, loadingState, setLoadingState } = useContext(AuthContext);
  // setting error at login action start
  const [loginError, setLoginError] = useState("");
  // setting error at login action end
  // set Spinner end
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  // console.log(from)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // sign in user with email and password start

  const handleLogin = (data) => {
    setLoginError("");
    const email = data.email;
    const password = data.password;
    signInEmail(email, password)
      .then((result) => {
        console.log(from)
        reset();
        navigate(from, {replace: true});
      })
      .catch((err) => {
        setLoginError(err.message)
        setLoadingState(false)
      });
  };
  // sing in user with email and password end

  return (
    <section className="flex justify-center items-center min-h-[90vh] px-3 lg:px-0">
      {
        loadingState && <div>
          <div className="border border-dashed border-black w-16 h-9 rounded-full animate-spin"></div>
        </div>
      }
      {!loadingState && (
        <div className="shadow-md p-5">
          <h2 className="text-center text-3xl mb-3">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full"
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-700" role="alert">
                  {errors.email?.message}
                </p>
              )}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum six characters needed",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-700" role="alert">
                  {errors.password?.message}
                </p>
              )}
              <Link className="mb-2">Forgot Password?</Link>
            </div>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {/* <p>{data}</p> */}
            <input className="btn btn-accent w-full my-3" type="submit" />
          </form>
          <p className="text-center my-3">
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-primary">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <Link className="btn border w-full bg-white text-black my-2 hover:bg-accent hover:text-white">
            Continue With Google
          </Link>
        </div>
      )}
    </section>
  );
};

export default Login;
