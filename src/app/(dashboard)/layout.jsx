import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />
      <div className="flex flex-1 mt-5 md:ml-6">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-orange-500 text-white">
          <Link href="/" className="flex items-center justify-center gap-2 p-4">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="hidden lg:block">Restaurant</span>
          </Link>
          <Menu />
        </div>

        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}