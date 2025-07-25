import { useRef, useState } from "react";
import avatar from "../../../assets/images/avatar.png";

type ImagePlaceholderProps = {
  setSelected: (file: File | null) => void;
};

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ setSelected }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelected(file);
    setPreviewImage(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div
      className="bg-gray-2/20 rounded-full flex items-center justify-center w-[100px] h-[100px] flex-col border-1 border-black-1/50 cursor-pointer overflow-hidden"
      onClick={handleFileClick}
    >
      {previewImage ? (
        <img
          src={previewImage}
          alt="avatar"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center flex-col">
          <div>
            <img src={avatar} alt="Upload photo" />
          </div>
          <p className="text-[10px] text-blue-5 font-medium">Upload Photo</p>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ImagePlaceholder;
