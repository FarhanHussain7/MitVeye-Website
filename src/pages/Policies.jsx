import React, { useState } from 'react';

const Policies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories data
  const categories = [
    { id: 'all', name: 'All Policies' },
    { id: 'life', name: 'Life Insurance' },
    { id: 'health', name: 'Health Insurance' },
    { id: 'term', name: 'Term Insurance' },
    { id: 'pension', name: 'Pension Plans' },
  ];

  // Color themes for each category
  const categoryThemes = {
    all: {
      bg: 'bg-slate-50',
      text: 'text-slate-800',
      border: 'border-slate-200',
      accent: 'bg-slate-700'
    },
    life: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-200',
      accent: 'bg-blue-600'
    },
    health: {
      bg: 'bg-teal-50',
      text: 'text-teal-800',
      border: 'border-teal-200',
      accent: 'bg-teal-600'
    },
    term: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-800',
      border: 'border-indigo-200',
      accent: 'bg-indigo-600'
    },
    pension: {
      bg: 'bg-amber-50',
      text: 'text-amber-800',
      border: 'border-amber-200',
      accent: 'bg-amber-600'
    }
  };

  // Policies data
  const policies = [
    {
      id: 1,
      name: 'LIC Premium Life Cover',
      category: 'life',
      coverage: '₹1 Crore',
      premium: '₹2,500/month',
      features: [
        'Comprehensive life coverage',
        'Tax benefits under Section 80C',
        'Flexible payment options',
        'Loan facility available',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Complete Health Shield',
      category: 'health',
      coverage: '₹50 Lakhs',
      premium: '₹1,800/month',
      features: [
        'Cashless hospitalization',
        'No claim bonus up to 50%',
        'Pre & post hospitalization coverage',
        'Free annual health check-up',
      ],
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=600&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Smart Term Plan',
      category: 'term',
      coverage: '₹2 Crore',
      premium: '₹1,200/month',
      features: [
        'High coverage at low premium',
        'Critical illness coverage',
        'Accidental death benefit',
        'Terminal illness benefit',
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Retirement Advantage',
      category: 'pension',
      coverage: 'Lifetime',
      premium: '₹5,000/month',
      features: [
        'Guaranteed pension for life',
        'Return of premium option',
        'Flexible vesting age',
        'Tax-free corpus',
      ],
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=600&h=400&fit=crop',
    },
  ];

  const filteredPolicies = selectedCategory === 'all' 
    ? policies 
    : policies.filter(policy => policy.category === selectedCategory);

  const currentTheme = categoryThemes[selectedCategory];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br from-slate-900 to-slate-700 text-white py-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm">
              Insurance Solutions
            </span> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Secure Your Future <br className="hidden md:block"/> With Confidence
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Comprehensive protection plans tailored to your unique needs. 
              Our award-winning policies offer peace of mind with exceptional coverage.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Find Your Perfect Policy</h2>
            <div className='mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full'></div>

            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Browse our specialized insurance categories to find coverage that matches your needs
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              const theme = categoryThemes[category.id];
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-lg transition-all font-medium text-sm tracking-wide ${
                    isActive
                      ? `${theme.accent} text-white shadow-md`
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                  aria-label={`Filter by ${category.name}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className=" bg-slate-500">
        <div className="container mx-auto px-4">
          <div className="text-center py-2">
            <h2 className="text-3xl font-bold text-slate-800">
              {selectedCategory === 'all' ? 'Our Comprehensive Policies' : 
               `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {selectedCategory === 'all' 
                ? 'Explore our full range of insurance solutions' 
                : `Specialized ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} options`}
            </p>
          </div>
          
          {filteredPolicies.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <p className="text-slate-400">No policies found in this category</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mr-10">
              {filteredPolicies.map((policy) => {
                const theme = categoryThemes[policy.category];
                return (
                  <div 
                    key={policy.id} 
                    className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 border-t-4 ${theme.border}`}
                  >
                    <div className="relative h-24">
                      <img
                        src={policy.image}
                        alt={`${policy.name} insurance policy`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className={`absolute bottom-4 left-4 ${theme.accent} text-white px-3 py-1 rounded text-xs font-semibold tracking-wide shadow-sm`}>
                        {policy.coverage} Coverage
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className={`text-xl font-bold ${theme.text}`}>{policy.name}</h3>
                        <span className="text-slate-900 font-semibold">{policy.premium}</span>
                      </div>
                      <div className="space-y-3 mb-6">
                        {policy.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <svg
                              className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${theme.text}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button 
                          className={`flex-1 ${theme.text} border ${theme.border} py-2.5 rounded-lg hover:bg-white/50 transition-all text-sm font-medium`}
                        >
                          Learn More
                        </button>
                        <button 
                          className={`flex-1 bg-white ${theme.text} border ${theme.border} py-2.5 rounded-lg hover:${theme.accent} hover:text-white transition-all text-sm font-medium`}
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>


      {/* Why Choose Us */}
      {/* <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-slate-100 text-slate-600">
              Our Advantages
            </span>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">Why Clients Trust Us</h2>
            <div className='mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full'></div>

            <p className="text-slate-500 max-w-2xl mx-auto mt-3">
              We combine industry expertise with personalized service to deliver exceptional value
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Competitive Pricing",
                description: "We negotiate with top providers to secure you the best rates without compromising coverage quality."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Claims Excellence",
                description: "Our 98% claim approval rate and average 3-day processing time set us apart in the industry."
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                title: "Dedicated Support",
                description: "24/7 access to licensed professionals who know your policy inside and out."
              }
            ].map((item, index) => (
              <div key={index} className="group p-6 rounded-xl hover:bg-slate-50 transition-all">
                <div className="w-14 h-14 mb-4 rounded-lg bg-white group-hover:bg-white shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white/10">
              Client Stories
            </span> */}
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <div className='mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full'></div>

            {/* <p className="text-slate-300 max-w-2xl mx-auto mt-3">
              Don't just take our word for it - hear from those we've protected
            </p> */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "When I needed to make a claim after my accident, they handled everything seamlessly. The support was exceptional.",
                author: "Rahul Sharma",
                role: "Life Policyholder"
              },
              {
                quote: "Switching to their health insurance saved me 30% on premiums while getting better coverage. Highly recommend!",
                author: "Priya Patel",
                role: "Health Policyholder"
              },
              {
                quote: "Their retirement planning advice helped me secure my future while maximizing tax benefits. Professional service throughout.",
                author: "Arjun Mehta",
                role: "Pension Client"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6">
                <svg className="w-8 h-8 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-200 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-200 text-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect What Matters?</h2>
            <div className='mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full'></div>

            <p className="text-lg opacity-90 mb-8 leading-relaxed mt-3">
              Get a personalized consultation with one of our insurance experts today. 
              We'll help you find the perfect coverage at the right price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-white text-blue-700 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg">
                Get Your Free Quote
              </button>
              <button className="px-8 py-3.5 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                Call Us: +1 (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;



