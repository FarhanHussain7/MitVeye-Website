// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const officeLocations = [
//     {
//       city: 'Mumbai',
//       address: '123 Business Park, Andheri East',
//       phone: '+91 22 1234 5678',
//       email: 'mumbai@licinsurance.com',
//       timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
//     },
//     {
//       city: 'Delhi',
//       address: '456 Corporate Tower, Connaught Place',
//       phone: '+91 11 8765 4321',
//       email: 'delhi@licinsurance.com',
//       timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
//     },
//     {
//       city: 'Bangalore',
//       address: '789 Tech Park, Whitefield',
//       phone: '+91 80 2468 1357',
//       email: 'bangalore@licinsurance.com',
//       timing: 'Mon-Sat: 9:00 AM - 6:00 PM',
//     },
//   ];

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (formData.phone && !phoneRegex.test(formData.phone)) {
//       newErrors.phone = 'Invalid phone number format';
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = 'Subject is required';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 1500));
//         setSubmitSuccess(true);
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           subject: '',
//           message: '',
//         });
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       } catch (error) {
//         setErrors({ submit: 'Failed to send message. Please try again.' });
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-b from-slate-900 to-slate-700 text-white py-24 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
//         </div>
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <div className="max-w-4xl mx-auto">
//             {/* <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm">
//               Get In Touch
//             </span> */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Contact Our <br className="hidden md:block" />Insurance Experts
//             </h1>
//             <p className="text-lg md:text-xl opacity-90 mb-8">
//               Have questions about your policy or need assistance? Our team is ready to provide personalized support and guidance.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16 -mt-16 relative z-20">
//         {/* Office Locations */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {officeLocations.map((office, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
//             >
//               <div className="h-3 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
//                   <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                   {office.city} Office
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     <span className="text-slate-600">{office.address}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                     <a href={`tel:${office.phone.replace(/ /g, '')}`} className="text-slate-600 hover:text-blue-600 transition-colors">
//                       {office.phone}
//                     </a>
//                   </div>
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     <a href={`mailto:${office.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">
//                       {office.email}
//                     </a>
//                   </div>
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span className="text-slate-600">{office.timing}</span>
//                   </div>
//                 </div>
//                 <button className="mt-6 w-full bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium">
//                   Get Directions
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form Section */}
//         <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="md:flex">
//             {/* Form Side */}
//             <div className="md:w-2/3 p-8">
//               <h2 className="text-2xl font-bold text-slate-800 mb-2">Get In Touch</h2>
//               {/* <p className="text-slate-500 mb-6">We typically respond within 1 business day</p> */}
              
//               {submitSuccess && (
//                 <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500 text-green-700">
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     Your message has been sent successfully! We'll get back to you soon.
//                   </div>
//                 </div>
//               )}

//               {errors.submit && (
//                 <div className="mb-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-500 text-red-700">
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                     </svg>
//                     {errors.submit}
//                   </div>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                         errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'
//                       }`}
//                       placeholder="Full Name "
//                     />
//                     {errors.name && (
//                       <p className="mt-2 text-sm text-red-600 flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         {errors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                         errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
//                       }`}
//                       placeholder="your@email.com"
//                     />
//                     {errors.email && (
//                       <p className="mt-2 text-sm text-red-600 flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                         errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'
//                       }`}
//                       placeholder="+91 9876543***"
//                     />
//                     {errors.phone && (
//                       <p className="mt-2 text-sm text-red-600 flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         {errors.phone}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">
//                       Subject <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                         errors.subject ? 'border-red-500 bg-red-50' : 'border-slate-300'
//                       }`}
//                       placeholder="How can we help?"
//                     />
//                     {errors.subject && (
//                       <p className="mt-2 text-sm text-red-600 flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                         </svg>
//                         {errors.subject}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 mb-2">
//                     Your Message <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="5"
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                       errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300'
//                     }`}
//                     placeholder="Tell us about your insurance needs..."
//                   ></textarea>
//                   {errors.message && (
//                     <p className="mt-2 text-sm text-red-600 flex items-center">
//                       <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                       </svg>
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md ${
//                     isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center justify-center">
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </span>
//                   ) : (
//                     <span className="flex items-center justify-center">
//                       <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                       Send Message
//                     </span>
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Info Side */}
//             <div className="md:w-1/3 bg-gradient-to-r from-gray-500 to-indigo-900 text-white p-8">
//               <div className="h-full flex flex-col justify-center">
//                 <h3 className="text-xl font-bold mb-6">Other Ways to Connect</h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="bg-white/10 p-3 rounded-lg mr-4">
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">Call Us</h4>
//                       <p className="text-blue-100">+1 (800) 123-4567</p>
//                       <p className="text-sm text-blue-200 mt-1">24/7 Customer Support</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-white/10 p-3 rounded-lg mr-4">
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">Email Us</h4>
//                       <p className="text-blue-100">support@licinsurance.com</p>
//                       <p className="text-sm text-blue-200 mt-1">Typically respond within 24 hours</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-white/10 p-3 rounded-lg mr-4">
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold mb-1">Live Chat</h4>
//                       <p className="text-blue-100">Available 9AM-6PM IST</p>
//                       <button className="mt-2 text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition-colors">
//                         Start Chat
//                       </button>
//                     </div>
//                   </div>

//                   <div className="pt-6 mt-6 border-t border-blue-600">
//                     <h4 className="font-semibold mb-3">Follow Us</h4>
//                     <div className="flex space-x-4">
//                       <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                         </svg>
//                       </a>
//                       <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="py-16 bg-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Grow Your Online Business With Us!</h1>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Ready to elevate your social media presence? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="premium">Premium Package</option>
                    <option value="standard">Standard Package</option>
                    <option value="basic">Basic Package</option>
                    <option value="graphics">Graphic Design</option>
                    <option value="video">Video Editing</option>
                    <option value="campaign">Marketing Campaign</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-indigo-800 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p>+91 95890 46658</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-800 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p>contact@mediaiteye.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-800 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Address</h3>
                    <p>Delhi, India 110008</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((platform) => (
                    <a 
                      key={platform}
                      href={`https://${platform}.com/media_iteye`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-800 hover:bg-indigo-900 p-3 rounded-full transition duration-300"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;