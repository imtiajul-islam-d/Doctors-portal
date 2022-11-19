import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const [doctorError, setDoctorError] = useState("");
  const navigate = useNavigate()
  // upload image
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
      const data = await res.json();
      return data;
    },
  });
  // console.log(specialty)
  const handleAddDoctor = (data) => {
    setDoctorError("");
    console.log('first')
    // upload image to image bb
    const image = data.photo[0]
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        const imageURL = imgData.data.url;
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image:imageURL
        }
        // fetch post the doctor
        fetch(`http://localhost:5000/doctors`,{
          method: "POST",
          headers: {
            'content-type':'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(result => {
          toast.success(`${data.name} is added successfully`)
          reset()
          navigate('/dashboard/managedoctors')
        })
      }
    })
    console.log(image);
  };
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="shadow p-5 max-w-sm">
        <h2 className="text-center text-3xl">Add Doctor</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
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
          <label htmlFor="password">Specialty</label>
          {errors.specialty && (
            <p className="text-red-700">{errors.specialty.message}</p>
          )}
          <select
            className="select select-primary w-full mb-3"
            {...register("specialty", {
              required: "Please Select one",
            })}
          >
            {specialties?.map((specialItem) => {
              return <option key={specialItem._id}>{specialItem.name}</option>;
            })}
          </select>
          {doctorError && <p className="text-red-700">{doctorError}</p>}
          <label htmlFor="photo">Photo</label>
          {errors.name && (
            <p className="text-red-700">{errors.photo?.message}</p>
          )}
          <input
            type="file"
            name="photo"
            className="input input-bordered w-full mb-3"
            {...register("photo", { required: "Photo is required" })}
          />
          <input
            className="bg-accent text-white w-full p-3 cursor-pointer btn"
            type="submit"
            value="Add Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
