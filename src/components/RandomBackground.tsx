// "use client";
// import React, { useMemo } from "react";
// import seedrandom from "seedrandom";

// interface RandomElement {
//   top: string;
//   left: string;
//   width: string;
//   height: string;
//   opacity: number;
//   animationDuration: string;
//   animationDelay: string;
//   animationTime: string;
// }

// const RandomBackground = () => {
//   // Use useMemo so that the values are computed once
//   const elements = useMemo<RandomElement[]>(() => {
//     // Create a seeded random number generator with a fixed seed
//     const rng = seedrandom("my-fixed-seed");
//     return [...Array(20)].map(() => ({
//       top: `${rng() * 100}%`,
//       left: `${rng() * 100}%`,
//       width: `${rng() * 5 + 2}px`,
//       height: `${rng() * 5 + 2}px`,
//       opacity: rng() * 0.5 + 0.3,
//       animationDuration: `${rng() * 50 + 10}s`,
//       animationDelay: `${rng() * 5}s`,
//       animationTime: `${rng() * 10 + 10}s`
//     }));
//   }, []);

//   return (
//     <div
//       className="absolute inset-0 overflow-hidden opacity-20"
//       suppressHydrationWarning
//     >
//       {elements.map((e, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full bg-white"
//           style={{
//             top: e.top,
//             left: e.left,
//             width: e.width,
//             height: e.height,
//             opacity: e.opacity,
//             animationDuration: e.animationDuration,
//             animationDelay: e.animationDelay,
//             animation: `float ${e.animationTime} linear infinite`
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RandomBackground;