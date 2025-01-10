import {
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Typography,
   Tooltip,
} from "@material-tailwind/react";
import profilePic from "../assets/images/ei_1663268459705-removebg-preview.jpg";
import { StickyNavbar } from "../layouts/Navbar";

export function ProfileCard() {
   return (
      <div className="">
         <StickyNavbar />
         <Card className="w-60">
            <CardHeader
               floated={false}
               className="h-40"
            >
               <img
                  src={profilePic}
                  alt="profile-picture"
                  style={{ objectFit: "contain" }}
               />
            </CardHeader>
            <CardBody className="text-center">
               <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2"
               >
                  Peter Sambo
               </Typography>
               <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
               >
                  CEO / Co-Founder
               </Typography>
            </CardBody>
         </Card>
         <h2>Welcome to your Dashboard</h2>
      </div>
   );
}
