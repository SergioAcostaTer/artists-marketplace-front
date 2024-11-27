import { UserPortfolio } from "@/@types/Portfolio";
import Image from "next/image";

interface EditFormProps {
  user: UserPortfolio;
}

const TextInput = ({
  label,
  value,
  placeholder = label.charAt(0).toUpperCase() + label.slice(1),
}: {
  label: string;
  value: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col relative">
      <label
        htmlFor={label}
        className="text-gray-300 absolute top-[5px] left-3 text-sm transition-all duration-500"
      >
        {placeholder}
      </label>
      <input
        type="text"
        name={label}
        id={label}
        value={value}
        className="p-2 pl-3 rounded-[15px] border border-[#ffffff65] bg-transparent text-white pt-5 outline-none focus:border-[#ffffffa2] transition-all duration-[150ms]"
      />
    </div>
  );
};

const EditForm: React.FC<EditFormProps> = ({ user }) => {
  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center text-white mt-10">
      <div className="flex items-center justify-center flex-col gap-2">
        <Image
          src={user.avatar || "/images/default_avatar.webp"}
          alt="Avatar"
          width={75}
          height={75}
          className="rounded-full"
        />
        <p>Edit picture</p>
      </div>

      <div className="flex flex-col mt-2 w-full p-1 gap-4">
        <div className="flex flex-col mt-2 w-full p-4 gap-2">
          <TextInput label="name" value={user.name} />
          <TextInput label="username" value={user.username} />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
