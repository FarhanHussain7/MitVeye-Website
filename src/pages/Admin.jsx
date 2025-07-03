// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { adminBg } from '../assets/images';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// const Admin = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [loginData, setLoginData] = useState({ username: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [policies, setPolicies] = useState([
//     {
//       id: 1,
//       name: 'LIC Premium Life Cover',
//       category: 'life',
//       totalUsers: 1250,
//       revenue: '₹3.2 Cr',
//       status: 'active',
//     },
//     {
//       id: 2,
//       name: 'Complete Health Shield',
//       category: 'health',
//       totalUsers: 850,
//       revenue: '₹1.8 Cr',
//       status: 'active',
//     },
//     {
//       id: 3,
//       name: 'Smart Term Plan',
//       category: 'term',
//       totalUsers: 2100,
//       revenue: '₹4.5 Cr',
//       status: 'active',
//     },
//   ]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // In a real application, you would validate credentials against a backend
//     if (loginData.username === 'admin' && loginData.password === 'admin123') {
//       setIsAuthenticated(true);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handlePolicyStatusChange = (id, newStatus) => {
//     setPolicies(policies.map(policy =>
//       policy.id === id ? { ...policy, status: newStatus } : policy
//     ));
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 mb-2">Username</label>
//               <input
//                 type="text"
//                 value={loginData.username}
//                 onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-2">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   value={loginData.password}
//                   onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
//                 </button>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   const DashboardContent = () => (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Policies</h3>
//           <p className="text-3xl font-bold text-blue-600">12</p>
//           <p className="text-sm text-gray-500">Active policies: 8</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h3>
//           <p className="text-3xl font-bold text-blue-600">4,200</p>
//           <p className="text-sm text-gray-500">Active users: 3,850</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Revenue</h3>
//           <p className="text-3xl font-bold text-blue-600">₹9.5 Cr</p>
//           <p className="text-sm text-gray-500">This month: ₹1.2 Cr</p>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
//         <div className="space-y-4">
//           {[
//             { action: 'New policy purchased', user: 'Rahul Sharma', time: '2 hours ago' },
//             { action: 'Claim processed', user: 'Priya Patel', time: '4 hours ago' },
//             { action: 'Policy renewed', user: 'Amit Kumar', time: '6 hours ago' },
//           ].map((activity, index) => (
//             <div key={index} className="flex items-center justify-between py-2 border-b">
//               <div>
//                 <p className="font-medium text-gray-800">{activity.action}</p>
//                 <p className="text-sm text-gray-500">by {activity.user}</p>
//               </div>
//               <span className="text-sm text-gray-500">{activity.time}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   // Manage Policies
//   const PoliciesContent = () => (
//     <div className="bg-white rounded-lg shadow-md">
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-lg font-semibold text-gray-700">Manage Policies</h3>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//             Add New Policy
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Policy Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Category
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Total Users
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Revenue
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {policies.map((policy) => (
//                 <tr key={policy.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">{policy.name}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">{policy.category}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{policy.totalUsers}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{policy.revenue}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       policy.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                     }`}>
//                       {policy.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <button
//                       onClick={() => handlePolicyStatusChange(policy.id, policy.status === 'active' ? 'inactive' : 'active')}
//                       className="text-blue-600 hover:text-blue-900 mr-4"
//                     >
//                       Toggle Status
//                     </button>
//                     <button className="text-red-600 hover:text-red-900">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="bg-white shadow">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//             <button
//               onClick={() => setIsAuthenticated(false)}
//               className="text-gray-600 hover:text-gray-800 border border-gray-300 px-4 py-2 rounded-lg transition-colors hover:bg-yellow-400"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex space-x-4 mb-6">
//           <button
//             onClick={() => setActiveTab('dashboard')}
//             className={`px-4 py-2 rounded-lg ${
//               activeTab === 'dashboard'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             Dashboard
//           </button>
//           <button
//             onClick={() => setActiveTab('policies')}
//             className={`px-4 py-2 rounded-lg ${
//               activeTab === 'policies'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             Policies
//           </button>
//         </div>

//         {activeTab === 'dashboard' ? <DashboardContent /> : <PoliciesContent />}
//       </div>
//     </div>
//   );
// };

// export default Admin; 

import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Life Sure</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              AS
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Insurance Views" value="60.5k" />
          <StatCard title="Lives" value="150" />
          <StatCard title="Comments" value="320" />
          <StatCard title="Published" value="70" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-700 mb-4">Attices</h3>
              <ul className="space-y-3">
                <SidebarItem icon="report" text="Report" />
                <SidebarItem icon="institution" text="Institution" />
                <SidebarItem icon="profile" text="Profile" />
                <SidebarItem icon="settings" text="Settings" />
                <SidebarItem icon="logout" text="Logout" />
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700">Recent Insurance plan</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <TableRow 
                      insurance="Healthy Insurance" 
                      views="2.8k" 
                      comments="210" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Vehicle Insurance" 
                      views="1.9k" 
                      comments="360" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Home Insurance" 
                      views="1.1k" 
                      comments="160" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Term life Insurance" 
                      views="1.2k" 
                      comments="420" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Whole Life Insurance" 
                      views="2.6k" 
                      comments="190" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Money Bank Policy" 
                      views="1.9k" 
                      comments="390" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Children Policy" 
                      views="1.2k" 
                      comments="560" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Money Bank Plans" 
                      views="3.6k" 
                      comments="180" 
                      status="Published" 
                    />
                    <TableRow 
                      insurance="Term Insurance" 
                      views="1.3k" 
                      comments="220" 
                      status="Actualized" 
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text }) => {
  const getIcon = () => {
    switch (icon) {
      case 'report':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'institution':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'profile':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'settings':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'logout':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <li>
      <button className="flex items-center space-x-3 w-full p-2 rounded-md hover:bg-gray-100 text-gray-700">
        {getIcon()}
        <span>{text}</span>
      </button>
    </li>
  );
};

// Table Row Component
const TableRow = ({ insurance, views, comments, status }) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'actualized':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{insurance}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{views}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comments}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor()}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default AdminDashboard;