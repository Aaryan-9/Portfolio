import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <>
      <div className="flex max-sm:m-8 text-7xl hover:transition-colors hover:text-gray-500 text-white righteous-regular justify-center items-center">
        Projects
      </div>
      <div className="flex flex-col justify-center items-center max-sm:m-4">
        <div className="w-full mt-24">
          <div className="bg-indigo-950 rounded-lg flex flex-col md:flex-row hover:transition hover:ease-in-out hover:translate-x-2 hover:translate-y-2 border border-indigo-800">
            {/* Removed Image section as no image was provided for AI Career Hub yet, keeping it text focused for now or could use a placeholder if needed. 
                If user wants an image, we can add one later. For now, full width text. 
            */}
            <div className="w-full p-8">
              <div className="text-3xl cursor-default font-bold text-blue-400">
                AI-Career Hub
              </div>
              <p className="text-gray-300 cursor-default text-lg mt-4 mb-4">
                A full-stack AI-powered career guidance platform with skill assessments, resume analysis, and personalized career recommendations.
              </p>
              <ul className="list-disc list-outside ml-5 text-gray-400 mb-6 space-y-2">
                <li>Developed a full-stack AI-powered career guidance platform with skill assessments, resume analysis, and personalized career recommendations using <strong>Next.js</strong>, <strong>MongoDB</strong>, and <strong>Gemini AI</strong>.</li>
                <li>Directed the comprehensive development of both frontend and backend for a full-stack application, integrating <strong>NextAuth</strong> to establish Google authentication which improved user login convenience by <strong>70%</strong> and increased retention.</li>
                <li>AI-driven skill assessment proctoring using <strong>Python</strong>, enhancing credibility while integrating intelligent career insights.</li>
              </ul>
              
              <div>
                <div className="flex flex-wrap gap-2 cursor-default justify-start font-semibold text-md mb-6">
                   {["Next.js", "Tailwind CSS", "Python", "Gemini AI", "MongoDB"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm">
                        {tech}
                      </span>
                   ))}
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <a
                    href="https://github.com/Arjun-v1-ai/AI-Career-Hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        className="mr-2"
                      />
                      GitHub
                    </button>
                  </a>
                  <a
                    href="https://ai-career-hub-v1.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 h-10 px-4 py-2">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        size="lg"
                        className="mr-2"
                      />
                      Live Demo
                    </button>
                  </a>
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
