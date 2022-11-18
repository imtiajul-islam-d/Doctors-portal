import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    createUserPassword,
    loadingState,
    setLoadingState,
    logOut,
    userUpdate,
  } = useContext(AuthContext);
  // const location = useLocation()
  const navigate = useNavigate();
  // declaring state to store signup error
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // create an user with email and password start
  const handleRegister = (data) => {
    setSignUpError("");
    const email = data.email;
    const password = data.password;
    const info = {
      displayName: data.name,
    };
    createUserPassword(email, password)
      .then((result) => {
        const user = result.user;
        reset();
        userUpdate(info)
        .then(() => {
          saveUser(info.displayName, email)
          logOut();
          navigate("/login");
          toast.success("Registration Successfully completed, Please Login!");
        }).then(() => {})
      })
      .catch((error) => {
        setSignUpError(error.message);
        setLoadingState(false);
      });
  };
  // 
  const saveUser = (name, email) => {
    const user = {name, email};
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
  // create an user with email and password end

  return (
    <section className="min-h-[90vh] flex items-center justify-center container mx-auto px-3 lg:px-0">
      {loadingState && (
        <div>
          <div className="border border-dashed border-black w-16 h-9 rounded-full animate-spin"></div>
        </div>
      )}
      {!loadingState && (
        <div className="shadow p-5 max-w-sm">
          <h2 className="text-center text-3xl">Sign Up</h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <label htmlFor="name">Name</label>
            {errors.name && (
              <p className="text-red-700">{errors.name?.message}</p>
            )}
            <input
              type="text"
              name="name"
              className="input input-bordered w-full mb-3"
              {...register("name", { required: "Please enter a name" })}
            />

            <label htmlFor="email">Email</label>
            {errors.email && (
              <p className="text-red-700">{errors.email?.message}</p>
            )}
            <input
              type="email"
              name="email"
              className="input input-bordered w-full mb-3"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                  /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <label htmlFor="password">Password</label>
            {errors.password && (
              <p className="text-red-700">{errors.password.message}</p>
            )}
            <input
              type="password"
              name="password"
              className="input input-bordered w-full mb-3"
              {...register("password", {
                required: "Please Choose a password",
                //   minLength: {
                //     value: 6,
                //     message: "Password must need to have minimum six characters!",
                //   },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "Password must be strong",
                },
              })}
            />
            {signUpError && <p className="text-red-700">{signUpError}</p>}
            <input
              className="bg-accent text-white w-full p-3 cursor-pointer btn"
              type="submit"
              value="Register"
            />
          </form>
          <p className="text-center my-3">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              login
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

export default Signup;
