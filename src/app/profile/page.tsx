import React from "react";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Profile = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">My Profile</h1>

        <div className="mt-5 relative">
          <Image
            src="https://th.bing.com/th/id/OIP.hmLglIuAaL31MXNFuTGBgAHaHa?w=196&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Profile"
            className="rounded-full object-cover"
            width={80}
            height={80}
          />
          <input
            type="file"
            className="absolute top-0 w-[80px] h-[80px] opacity-0 z-10 cursor-pointer"
          />
        </div>

        <div className="mt-5 flex gap-x-5">
          <div className="flex-1">
            <Input label="First Name" placeholder="John" />
          </div>
          <div className="flex-1">
            <Input label="Last Name" placeholder="Doe" />
          </div>
        </div>
        <div className="mt-5">
          <Input label="Other Name" placeholder="Optional" />
        </div>
        <div className="mt-5">
          <Input label="Email" defaultValue="johndoe@gmail.com" disabled />
        </div>

        <div className="mt-5">
          <Button>Update Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
