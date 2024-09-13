import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">

     

      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-6">Chat Seamlessly, Anywhere</h2>
            <p className="mb-6 text-lg">
              Stay connected with your team and friends with real-time messaging.
              Our platform offers secure, fast, and reliable chat from anywhere, anytime.
            </p>
            <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
              Get Started
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://d1pfint8izqszg.cloudfront.net/web7/images/features-hero.png"
              alt="Chat illustration"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="  py-16 bg-white">
        <div className="container  text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Why Choose ChatMaster?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h8m-8 4h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Real-time Messaging</h3>
              <p className="text-gray-700">
                Enjoy lightning-fast messaging with your team or friends wherever you are.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secure Conversations</h3>
              <p className="text-gray-700">
                Our chat platform offers end-to-end encryption to keep your conversations safe.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 text-white p-4 rounded-full inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h12M9 16h6m-3 4v-4m0-12V4m0 8V8m-8-4v4m0 4v4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Customizable Channels</h3>
              <p className="text-gray-700">
                Create and organize chat channels to keep your conversations efficient and organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=" bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Chat?</h2>
          <p className="mb-6 text-lg">
            Start chatting now and connect with your team or friends in seconds.
          </p>
          <a href="/signup" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
            Join Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ChatMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
