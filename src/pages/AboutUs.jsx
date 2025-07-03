import React from "react";
import CountUp from "react-countup";

const AboutUs = () => {
  // const stats = [
  //   { number: 2, text: 'Years of Experience', suffix: '+' },
  //   { number: 90000, text: 'Satisfied Customers', suffix: '+' },
  //   { number: 5000, text: 'Claims Settled', prefix: '₹', suffix: '+' },
  //   { number: 99, text: 'Claim Settlement Ratio', suffix: '%' },
  // ];

  // const teamMembers = [
  //   {
  //     name: 'John Smith',
  //     position: 'Chief Executive Officer',
  //     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&fit=crop',
  //     description: 'With over 20 years of experience in the insurance industry, John leads our company with vision and integrity.'
  //   },
  //   {
  //     name: 'Sarah Johnson',
  //     position: 'Chief Operations Officer',
  //     image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=256&h=256&fit=crop',
  //     description: 'Sarah ensures smooth operations and excellent service delivery across all our branches.'
  //   },
  //   {
  //     name: 'Michael Chen',
  //     position: 'Chief Financial Officer',
  //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&fit=crop',
  //     description: 'Michael oversees our financial strategies and maintains our strong fiscal responsibility.'
  //   }
  // ];

  return (
    <div className="min-h-screen  bg-blue-500 py-4">
      {/* Hero Section */}
      <section className="bg-gray-50 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-blue-900">
              ABOUT US
            </h1>
            <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-700 mx-auto text-center mt-3">
              Securing futures and protecting dreams since 1998. We're committed
              to providing reliable insurance solutions with transparency and
              integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="text-gray-600 relative">
                  {stat.text}
                  <div className="mt-2 w-12 h-1 bg-blue-600 mx-auto rounded-full transform transition-all duration-500 group-hover:scale-110"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl transform -rotate-6 group-hover:rotate-0 transition-all duration-500 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <div className="w-20 h-0.5 bg-blue-600"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide innovative insurance solutions that protect and
                  secure the financial future of our customers. We strive to
                  make insurance accessible, understandable, and reliable for
                  everyone.
                </p>
                <ul className="space-y-4">
                  {/* Customer-centric approach */}
                  <li className="group/item relative transform transition-all duration-300 hover:scale-105">
                    <div
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl shadow-lg hover:shadow-xl 
                      transition-all duration-500 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 
                        group-hover/item:opacity-100 transition-all duration-500 rounded-xl"
                      ></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 
                          rounded-lg flex items-center justify-center transform group-hover/item:rotate-6 transition-all duration-500 shadow-lg"
                        >
                          <svg
                            className="w-6 h-6 text-white transform group-hover/item:scale-110 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 
                            bg-clip-text text-transparent group-hover/item:from-blue-700 group-hover/item:to-indigo-700"
                          >
                            Customer-centric
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            Putting customers at the heart of everything
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Transparent operations */}
                  <li className="group/item relative transform transition-all duration-300 hover:scale-105">
                    <div
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl shadow-lg hover:shadow-xl 
                      transition-all duration-500 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 
                        group-hover/item:opacity-100 transition-all duration-500 rounded-xl"
                      ></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 
                          rounded-lg flex items-center justify-center transform group-hover/item:rotate-6 transition-all duration-500 shadow-lg"
                        >
                          <svg
                            className="w-6 h-6 text-white transform group-hover/item:scale-110 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                            bg-clip-text text-transparent group-hover/item:from-indigo-700 group-hover/item:to-purple-700"
                          >
                            Transparency
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            Clear and honest communication always
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Quick claim settlements */}
                  <li className="group/item relative transform transition-all duration-300 hover:scale-105">
                    <div
                      className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl shadow-lg hover:shadow-xl 
                      transition-all duration-500 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 
                        group-hover/item:opacity-100 transition-all duration-500 rounded-xl"
                      ></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 
                          rounded-lg flex items-center justify-center transform group-hover/item:rotate-6 transition-all duration-500 shadow-lg"
                        >
                          <svg
                            className="w-6 h-6 text-white transform group-hover/item:scale-110 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 
                            bg-clip-text text-transparent group-hover/item:from-purple-700 group-hover:item:to-pink-700"
                          >
                            Fast Claims
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            Swift and efficient settlement process
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl transform rotate-6 group-hover:rotate-0 transition-all duration-500 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <div className="w-20 h-0.5 bg-blue-600"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the most trusted insurance provider in India, known for
                  our commitment to customer satisfaction, innovative solutions,
                  and ethical business practices. We aim to make financial
                  security accessible to all.
                </p>
                <ul className="space-y-4">
                  {/* Digital Transformation */}
                  <li className="group/item relative transform transition-all duration-300 hover:scale-105">
                    <div
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl shadow-lg hover:shadow-xl 
                      transition-all duration-500 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 
                        group-hover/item:opacity-100 transition-all duration-500 rounded-xl"
                      ></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 
                          rounded-lg flex items-center justify-center transform group-hover/item:rotate-6 transition-all duration-500 shadow-lg"
                        >
                          <svg
                            className="w-6 h-6 text-white transform group-hover/item:scale-110 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 
                            bg-clip-text text-transparent group-hover/item:from-blue-700 group-hover/item:to-indigo-700"
                          >
                            Digital Transformation
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            Leading digital innovation in insurance
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Nationwide Presence */}
                  <li className="group/item relative transform transition-all duration-300 hover:scale-105">
                    <div
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl shadow-lg hover:shadow-xl 
                      transition-all duration-500 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 
                        group-hover/item:opacity-100 transition-all duration-500 rounded-xl"
                      ></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 
                          rounded-lg flex items-center justify-center transform group-hover/item:rotate-6 transition-all duration-500 shadow-lg"
                        >
                          <svg
                            className="w-6 h-6 text-white transform group-hover/item:scale-110 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                            bg-clip-text text-transparent group-hover/item:from-indigo-700 group-hover/item:to-purple-700"
                          >
                            Nationwide Presence
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            Serving customers across India
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Innovative Products */}
                  <li className="group/item relative transform transition-all duration-300 hover:scale-105">
                    <div
                      className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl shadow-lg hover:shadow-xl 
                      transition-all duration-500 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 
                        group-hover/item:opacity-100 transition-all duration-500 rounded-xl"
                      ></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 
                          rounded-lg flex items-center justify-center transform group-hover/item:rotate-6 transition-all duration-500 shadow-lg"
                        >
                          <svg
                            className="w-6 h-6 text-white transform group-hover/item:scale-110 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 
                            bg-clip-text text-transparent group-hover/item:from-purple-700 group-hover:item:to-pink-700"
                          >
                            Innovative Products
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            Cutting-edge insurance solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-blue-500 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>

            {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div> */}
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide our journey and define our commitment to
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Trust Card */}
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transform transition-all duration-500 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white mx-auto group-hover:rotate-12 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Trust
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Building lasting relationships through reliability and
                  transparency
                </p>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transform transition-all duration-500 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white mx-auto group-hover:rotate-12 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Innovation
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Continuously evolving to meet changing customer needs
                </p>
              </div>
            </div>

            {/* Customer Focus Card */}
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transform transition-all duration-500 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white mx-auto group-hover:rotate-12 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Customer Focus
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Putting our customers first in everything we do
                </p>
              </div>
            </div>

            {/* Efficiency Card */}
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-xl p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transform transition-all duration-500 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white mx-auto group-hover:rotate-12 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  Efficiency
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Quick and hassle-free service delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
