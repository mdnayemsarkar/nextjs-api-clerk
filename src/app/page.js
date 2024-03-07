import Image from "next/image";
import DataFetcher from "@/component/data";
export default function Home() {
  return (
    <>
      <div>
        <p className="text-center mt-10 text-4xl text-red-400">Home Page</p>
         <DataFetcher/>
      </div>
    </>
  );
}
