import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
 
const Login =()=> {
  return (
    <div className="grid grid-cols-2 mt-5">  
      <div className="lg:ml-[100px]">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-communicating-with-friends-online-illustration-download-in-svg-png-gif-file-formats--using-laptop-working-on-chatting-pack-professionals-illustrations-3821962.png" alt=""/>
        </div>

         <Card color="transparent" className="lg:mt-10 lg:ml-2" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login Your Account 
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your detail to login !
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
  
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
       
        <Button className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
         Don't have account?{" "}
          <NavLink>Signup</NavLink>
        </Typography>
      </form>
    </Card>
    </div>

  );
}

export default Login;