import Image from "next/image";
import loader from "../../public/images/Loader.gif";

export default function Loading() {
  return (
    <div className="loader_background">
      <div className="loader">
        <Image width={200} height={200} src={loader} alt="Loader" />
      </div>
    </div>
  );
}
