import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const ImageAndInfo = () => {
  return (
    <div className="flex items-stretch gap-3">
      <Avatar className="border w-22 h-22 rounded-full">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="border w-full h-full rounded-full">
          CN
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <p className="font-semibold leading-5">Covenant Adeosun</p>
        <p className="font-medium tsxt-sm">Student</p>
        <div className="flex h-5 items-center gap-4 text-sm text-black">
          <p>
            <span className="text-gray-6">Email: </span> covenantcrackslord01@gmail.com
          </p>
          <Separator orientation="vertical" />
          <p>
            <span className="text-gray-6">Phone: </span>(+234)  9 09 20930920
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageAndInfo;
