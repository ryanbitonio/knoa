import welcomeImage from "../../assets/welcome-img.jpg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// const Welcome = () => {
//   return (
//     <div className="grid grid-cols-3 gap-0">
//       <img
//         className=" col-span-2 w-full h-screen object-cover"
//         src={welcomeImage}
//       />
//       <div className="">
//         <div>
//           <p className="leading-7 [&:not(:first-child)]:mt-6">
//             Ryan & Mary invite you to the dedication of their son
//           </p>
//           <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
//             ZEKKE KNOA A. BITONIO
//           </h1>
//           <Button variant="outline">RSVP</Button>
//         </div>
//         <div>
//           <p className="leading-7 [&:not(:first-child)]:mt-6">View Details</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Welcome = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-0 h-screen">
      <div className="bg-slate-500 md:col-span-2">Image</div>
      <div className="bg-orange-300">Details</div>
    </div>
  );
};

export default Welcome;
