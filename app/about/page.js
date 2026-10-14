 
// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6 py-10">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//           <div>
//             <h1 className="text-4xl font-bold">
//               Creator Dashboard 👋
//             </h1>
//             <p className="text-gray-400 mt-2">
//               Manage your profile, supporters and earnings.
//             </p>
//           </div>

//           <button className="mt-5 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
//             Edit Profile
//           </button>
//         </div>

//         {/* Stats */}

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

//           <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
//             <p className="text-gray-400">Total Supporters</p>
//             <h2 className="text-4xl font-bold mt-3">248</h2>
//           </div>

//           <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
//             <p className="text-gray-400">Total Raised</p>
//             <h2 className="text-4xl font-bold mt-3">₹24,580</h2>
//           </div>

//           <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
//             <p className="text-gray-400">Monthly Income</p>
//             <h2 className="text-4xl font-bold mt-3">₹8,900</h2>
//           </div>

//           <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
//             <p className="text-gray-400">Profile Views</p>
//             <h2 className="text-4xl font-bold mt-3">3,482</h2>
//           </div>

//         </div>

//         {/* Two Column */}

//         <div className="grid lg:grid-cols-3 gap-8 mt-10">

//           {/* Left */}

//           <div className="lg:col-span-2 bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

//             <h2 className="text-2xl font-semibold mb-6">
//               Recent Supporters
//             </h2>

//             <div className="space-y-5">

//               {[
//                 {
//                   name: "Rahul",
//                   amount: 200,
//                   message: "Keep building 🔥"
//                 },
//                 {
//                   name: "Aman",
//                   amount: 500,
//                   message: "Love your work ❤️"
//                 },
//                 {
//                   name: "Priya",
//                   amount: 100,
//                   message: "All the best!"
//                 },
//               ].map((item, index) => (

//                 <div
//                   key={index}
//                   className="flex justify-between items-center bg-zinc-800 p-4 rounded-xl"
//                 >
//                   <div>
//                     <h3 className="font-semibold">
//                       {item.name}
//                     </h3>

//                     <p className="text-gray-400 text-sm">
//                       {item.message}
//                     </p>
//                   </div>

//                   <div className="text-green-400 font-bold">
//                     ₹{item.amount}
//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//           {/* Right */}

//           <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

//             <h2 className="text-2xl font-semibold mb-6">
//               Quick Actions
//             </h2>

//             <div className="space-y-4">

//               <button className="w-full bg-purple-600 py-3 rounded-xl hover:bg-purple-700">
//                 Update Profile
//               </button>

//               <button className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700">
//                 Change Cover Image
//               </button>

//               <button className="w-full bg-green-600 py-3 rounded-xl hover:bg-green-700">
//                 Withdraw Earnings
//               </button>

//               <button className="w-full bg-zinc-800 py-3 rounded-xl hover:bg-zinc-700">
//                 Share Profile
//               </button>

//             </div>

//           </div>

//         </div>

//         {/* Analytics */}

//         <div className="mt-10 bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

//           <h2 className="text-2xl font-semibold mb-6">
//             Analytics
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6">

//             <div className="bg-zinc-800 rounded-xl p-6">
//               <p className="text-gray-400">
//                 Highest Donation
//               </p>

//               <h2 className="text-3xl font-bold mt-2">
//                 ₹500
//               </h2>
//             </div>

//             <div className="bg-zinc-800 rounded-xl p-6">
//               <p className="text-gray-400">
//                 Average Donation
//               </p>

//               <h2 className="text-3xl font-bold mt-2">
//                 ₹175
//               </h2>
//             </div>

//             <div className="bg-zinc-800 rounded-xl p-6">
//               <p className="text-gray-400">
//                 Returning Supporters
//               </p>

//               <h2 className="text-3xl font-bold mt-2">
//                 46
//               </h2>
//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Dashboard;
 
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-8 md:px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">About Get Me a Chai</h1>
            <p className="text-lg mb-6">
                Get Me a Chai is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It&apos;s a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="/group.gif" alt="Fans Want to Collaborate" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Fans Want to Collaborate</h3>
                        <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="/coin.gif" alt="Support Through Chai" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Support Through Chai</h3>
                        <p>Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
                    </div>
                </div>
                {/* Add more steps as needed */}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Creators</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Direct financial support from your fanbase</li>
                <li className="mb-2">Engage with your fans on a more personal level</li>
                <li className="mb-2">Access to a platform tailored for creative projects</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Fans</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Directly contribute to the success of your favorite creators</li>
                <li className="mb-2">Exclusive rewards and perks for supporting creators</li>
                <li className="mb-2">Be part of the creative process and connect with creators</li>
                {/* Add more benefits */}
            </ul>

            {/* Additional sections */}
            <h2 className="text-2xl font-semibold mb-4">Benefits of Collaboration</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Unlock new opportunities through collaboration with fellow creators</li>
                <li className="mb-2">Expand your network and reach a wider audience</li>
                <li className="mb-2">Combine skills and resources to create innovative projects</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Interact with a supportive community of like-minded individuals</li>
                <li className="mb-2">Receive valuable feedback and encouragement from peers</li>
                <li className="mb-2">Participate in discussions and events centered around your interests</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Access to Resources</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Gain access to resources such as tutorials, templates, and tools</li>
                <li className="mb-2">Receive guidance and mentorship from experienced creators</li>
                <li className="mb-2">Stay updated on industry trends and best practices</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Recognition and Exposure</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Showcase your work to a global audience and gain recognition</li>
                <li className="mb-2">Feature in promotional materials and campaigns</li>
                <li className="mb-2">Build your portfolio and increase your credibility as a creator</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Supportive Community</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Join a community that values creativity, diversity, and inclusivity</li>
                <li className="mb-2">Find encouragement and inspiration from fellow members</li>
                <li className="mb-2">Collaborate on projects and share resources for mutual growth</li>
                {/* Add more benefits */}
            </ul>

        </div>
    );
}

export default About;

export const metadata = {
    title: "About - Get Me A Chai",
  }
   