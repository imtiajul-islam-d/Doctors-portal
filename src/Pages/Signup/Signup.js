import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
    const {createUserPassword} = useContext(AuthContext)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

    // create an user with email and password start
    const handleRegister = (data, e) => {
        console.log(e);
        const email = data.email;
        const password = data.password;
        createUserPassword(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
          reset()
        })
        .catch(error => console.log(error.message))
      };
    // create an user with email and password end



  return (
    <section className="min-h-[90vh] flex items-center justify-center container mx-auto px-3 lg:px-0">
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
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
    </section>
  );
};

export default Signup;
