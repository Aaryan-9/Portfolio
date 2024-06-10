import React from "react";
import Qissaa from "../assets/Qissaa.png";
import Badge from "../assets/Badge.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <>
      <div className="flex max-sm:m-8 text-7xl hover:transition-colors  hover:text-gray-500 text-white righteous-regular justify-center  items-center">
        Projects
      </div>
      <div className="flex flex-col justify-center items-center max-sm:m-4  ">
        <div className="w-full mt-24">
          <div className="bg-yellow-500   rounded-lg  flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2">
            <div className=" flex items-center justify-center p-6">
              <img
                src={Qissaa}
                alt="Image"
                width="200"
                height="200"
                className="rounded-full"
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold text-indigo-600">
                Qissa - A New Way For Equality
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
                Qissa is a social media platform that aims to empower LGBTQ+
                individuals worldwide by providing them with a dedicated space
                to celebrate their identities, express their opinions, and
                access relevant info.
              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                  React, Tailwind, Express, Node, MongoDB
                </div>
                <div className="flex justify-end mt-4">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      className="mr-2 inline-flex items-center  justify-center"
                    />
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full mt-16">
          <div className="bg-green-500   rounded-lg  flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2">
            <div className="flex items-center justify-center p-6">
              <img
                src={Badge}
                alt="Image"
                width="200"
                height="200"
                style={{ aspectRatio: "200 / 200", objectFit: "contain" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold  text-indigo-600">
                IIIT Kota Alumni Connect Portal
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
                This application connects IIIT Kota alumni with their peers and
                juniors, fostering a vibrant community. Registered alumni can
                stay updated on institute events and activities.
              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                  React, Tailwind, Node, Express, MongoDB, Material UI
                </div>
                <div className="flex justify-end mt-4">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      className="mr-2 inline-flex items-center  justify-center"
                    />
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-16">
          <div className="bg-red-500   rounded-lg  flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2">
            <div className=" flex items-center justify-center p-6">
              <img
                src={Badge}
                alt="Image"
                width="200"
                height="200"
                style={{ aspectRatio: "200 / 200", objectFit: "contain" }}
              />
            </div>
            <div className="w-full mt-1 md:w-[80%] p-8">
              <div className=" text-3xl cursor-default font-bold  text-indigo-600">
                IIIT Kota Alumni Connect Portal
              </div>
              <p className="text-black cursor-default text-lg mt-4 mb-4">
                This application connects IIIT Kota alumni with their peers and
                juniors, fostering a vibrant community. Registered alumni can
                stay updated on institute events and activities.
              </p>
              <div>
                <div className="flex cursor-default justify-start font-semibold text-md">
                  React, Tailwind, Node, Express, MongoDB, Material UI
                </div>
                <div className="flex justify-end mt-4">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-950 text-white hover:bg-blue-900 h-10 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      className="mr-2 inline-flex items-center  justify-center"
                    />
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
