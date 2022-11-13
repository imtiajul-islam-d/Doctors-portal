import React from "react";
import { Link } from "react-router-dom";
import quote from "../../../assets/icons/quote.svg";

const PatientsReview = () => {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-primary">Testimonial</h2>
            <p className="font-serif text-lg dark:text-gray-400">
              What Our Patients Says
            </p>
          </div>
          <div>
            <img className="w-48" src={quote} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-900 shadow">
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <h3 className="flex-1 py-2 leading-snug">
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </h3>
              <div className="flex flex-wrap pt-3 space-x-2 dark:text-gray-400">
                <div className="mr-5">
                  <img
                    alt=""
                    className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                  />
                </div>
                <div>
                  <div>Name</div>
                  <div>address</div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 shadow">
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <h3 className="flex-1 py-2 leading-snug">
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </h3>
              <div className="flex flex-wrap pt-3 space-x-2 dark:text-gray-400">
                <div className="mr-5">
                  <img
                    alt=""
                    className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                  />
                </div>
                <div>
                  <div>Name</div>
                  <div>address</div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 shadow">
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <h3 className="flex-1 py-2 leading-snug">
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </h3>
              <div className="flex flex-wrap pt-3 space-x-2 dark:text-gray-400">
                <div className="mr-5">
                  <img
                    alt=""
                    className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                  />
                </div>
                <div>
                  <div>Name</div>
                  <div>address</div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 shadow">
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></Link>
              <h3 className="flex-1 py-2 leading-snug">
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </h3>
              <div className="flex flex-wrap pt-3 space-x-2 dark:text-gray-400">
                <div className="mr-5">
                  <img
                    alt=""
                    className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                  />
                </div>
                <div>
                  <div>Name</div>
                  <div>address</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PatientsReview;
