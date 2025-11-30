import React from "react";

function Experience() {
  return (
    <>
      <div className="flex max-sm:m-8 text-7xl hover:transition-colors hover:text-gray-500 text-white righteous-regular justify-center items-center mt-20 mb-10">
        Experience
      </div>
      <div className="flex flex-col justify-center items-center max-sm:m-4 gap-10 w-full px-4 md:px-20 lg:px-40">
        {/* Cashfree Payments */}
        <div className="w-full group">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-yellow-500/50">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 h-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-700 pb-4">
                <div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    SDE Intern
                  </h3>
                  <h4 className="text-xl text-gray-200 font-semibold mt-1">
                    Cashfree Payments
                  </h4>
                </div>
                <div className="text-gray-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 border border-gray-700">
                  June 2025 - Present
                </div>
              </div>
              
              <ul className="list-none space-y-4 text-gray-300 text-lg mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">▹</span>
                  <span>
                    Designed and deployed internal <strong className="text-white">MCP servers</strong> and autonomous AI agents, enabling teams to <strong className="text-white">self-serve insights</strong> and reducing data lookup time from hours to <strong className="text-white">under 30 seconds</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">▹</span>
                  <span>
                    Built AI-driven operational automations for service health monitoring with <strong className="text-white">automatic Jira ticket creation</strong>, significantly reducing manual engineering effort.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">▹</span>
                  <span>
                    Created an <strong className="text-white">Agentic Payments demo</strong> showcased at the <strong className="text-white">Global Fintech Fest</strong>, demonstrating future-ready payment workflows.
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {["GoLang", "MCP", "AI Agents", "TypeScript"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 rounded-full text-sm font-medium hover:bg-yellow-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bhejooo */}
        <div className="w-full group">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-green-500/50">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 h-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-700 pb-4">
                <div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                    Technical Intern
                  </h3>
                  <h4 className="text-xl text-gray-200 font-semibold mt-1">
                    Bhejooo (Deliverex)
                  </h4>
                </div>
                <div className="text-gray-400 font-mono text-sm bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 border border-gray-700">
                  June 2024 - September 2024
                </div>
              </div>

              <ul className="list-none space-y-4 text-gray-300 text-lg mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">▹</span>
                  <span>
                    Spearheaded WooCommerce integration with <strong className="text-white">distributed systems</strong> architecture and <strong className="text-white">OAuth 2.0</strong>, enabling seamless operations for sellers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">▹</span>
                  <span>
                    Built real-time logistics dashboards and optimized error handling, reducing downtime by <strong className="text-white">90%</strong> and improving service reliability.
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {["NestJs", "Nodejs", "MySQL", "Typescript", "Git", "Agile"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-500/10 text-green-300 border border-green-500/20 rounded-full text-sm font-medium hover:bg-green-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
