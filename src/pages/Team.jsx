// src/pages/Team.jsx
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Er. Vikas Singh",
      position: "Founder",
      quote: "At Media ITeye, creativity is our currency, innovation is our fuel, and collaboration is our strength."
    },
    {
      name: "Jyoti Verma",
      position: "COO"
    },
    {
      name: "Dipti Singh",
      position: "Regional Head"
    },
    {
      name: "Shabana Farooqui",
      position: "Social Media Community Manager"
    }
  ];

  return (
    <div className="py-16 bg-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Team</h1>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Together, we transform ideas into impactful digital experiences, one post at a time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-12xl mx-auto">
          {teamMembers.map((member, index) => {
            // Define a set of gradient backgrounds
            const gradients = [
  'bg-gradient-to-br from-pink-500 via-white to-yellow-300',
  'bg-gradient-to-br from-indigo-500 via-white to-blue-300',
  'bg-gradient-to-br from-green-500 via-white to-teal-300',
  'bg-gradient-to-br from-yellow-400 via-white to-pink-400'
];
            const cardBg = gradients[index % gradients.length];
            return (
              // <div key={index} className={`${cardBg} rounded-xl shadow-md overflow-hidden`}>
                <div
  key={index}
  className={`${cardBg} rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95`}
>
                <div className="p-6">
                  <div className="bg-gray-200 border-2 border-red-500 border-dashed rounded-xl w-70 h-60 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-center text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 text-center font-medium mb-4">{member.position}</p>
                  {member.quote && (
                    <p className="text-gray-600 italic text-center">"{member.quote}"</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;