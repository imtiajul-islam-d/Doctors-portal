import React from "react";
import teeth from "./../../../assets/images/fluoride.png";
import cavity from "./../../../assets/images/cavity.png";
import whitening from "./../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard/ServiceCard";
import treatment from "./../../../assets/images/treatment.png";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: teeth,
      name: "Fluoride Treatment",
      details: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 2,
      icon: cavity,
      name: "Cavity Filling",
      details: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 3,
      icon: whitening,
      name: "Teeth Whitening",
      details: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ];
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-primary">Our Services</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Services We Provide
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((data) => (
              <ServiceCard key={data.id} data={data}></ServiceCard>
            ))}
          </div>
        </div>
      </section>
      {/*  */}
      <div className="hero max-w-4xl mx-auto">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <img
              src={treatment}
              className="w-full rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="lg:pl-4">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 text-justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
