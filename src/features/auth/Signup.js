import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
 
const Signup =()=> {
  return (
    <div className=" grid grid-cols-2 mt-5">
     
     <Card color="transparent" className="lg:mt-10 lg:ml-[300px]" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome please fill your detail to Signup !
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
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
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <NavLink>Login</NavLink>
        </Typography>
      </form>
    </Card>
    <div>

        <img src="https://static.vecteezy.com/system/resources/previews/004/161/230/original/chat-concept-woman-chatting-with-friends-online-social-networking-chat-video-news-messages-search-friends-illustration-flat-vector.jpg" alt=""/>
      </div>
    </div>
  );
}

export default Signup;