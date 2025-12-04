// import React from 'react'

// function ProgressSteps({ steps, currentStep }) {

//   return (
//     <div className="flex justify-between items-center mb-8">
//       {steps.map((step, index) => {
//         const Icon = step.icon;
//         const isActive = index <= currentIndex;
//         const isCurrent = step.id === currentStep;

//         return (
//           <React.Fragment key={step.id}>
//             <div className="flex flex-col items-center">
//               <div
//                 className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                   isCurrent
//                     ? "bg-blue-600 text-white"
//                     : isActive
//                     ? "bg-green-600 text-white"
//                     : "bg-gray-300 text-gray-600"
//                 }`}
//               >
//                 <Icon size={24} />
//               </div>
//               <span className="text-xs mt-2 hidden sm:block">{step.name}</span>
//             </div>
//             {index < steps.length - 1 && (
//               <div
//                 className={`flex-1 h-1 mx-2 ${
//                   index < currentIndex ? "bg-green-600" : "bg-gray-300"
//                 }`}
//               />
//             )}
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// }

// export default ProgressSteps


