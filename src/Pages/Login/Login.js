import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <section className="flex justify-center items-center min-h-[90vh] px-3 lg:px-0">
      <div className="shadow-md p-5">
        <h2 className="text-center text-3xl mb-3">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="email"
              {...register("email", { required: true})}
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {required: true})}
            />
            <Link className="mb-2">Forgot Password?</Link>
          </div>
          <p>{data}</p>
          <input className="btn btn-accent w-full my-3" type="submit" />
        </form>
          <p className="text-center my-3">New to Doctors Portal? <Link to="/signup" className="text-primary">Create new account</Link></p>
          <div className="divider">OR</div>
          <Link className="btn border w-full bg-white text-black my-2 hover:bg-accent hover:text-white">Continue With Google</Link>
      </div>
    </section>
  );
};

export default Login;
