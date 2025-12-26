import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-sky-300 hover:bg-sky-600 text-black px-4 py-1 rounded-lg flex gap-2 items-center w-fit"
    >
      <BsArrowLeft />
      Back
    </button>
  );
}
