import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import cameraPhoto from '../assets/images/camera.jpg'

export function EcommerceCard() {
  return (
    <Card className="w-48 shadow-xl hover:shadow-xl transition-shadow duration-300">
      <CardHeader shadow={false} floated={false} className="h-40">
        <img
          src={cameraPhoto}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className=" text-sm">
            Apple AirPods
          </Typography>
          {/* <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography> */}
        </div>
      </CardBody>
    </Card>
  );
}
