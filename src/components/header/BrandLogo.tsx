import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <div className="flex lg:flex-1">
      <Link href="#" className="ml-0 flex items-center">
        <Image
          alt="Logo"
          src="/logo.png"
          width={80}
          height={80}
          className="-my-10 w-auto max-h-12 object-contain"
        />
      </Link>
    </div>
  );
}
