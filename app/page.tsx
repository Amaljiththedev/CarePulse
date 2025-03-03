import PatientForm from "@/components/forms/PatientForm";
import { Link } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* //// */}
      <section className="remove-scrollbar container my-auto">
        <div className="subb-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg" // Remove "public" from the path
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
          © 2024 Carepluse</p>
          <Link href="/?admin=true" className="text-green-500">
          </Link>
          </div>
        </div>
      </section>
      <Image
      src="/assets/images/onboarding-img.png"
      height={1000} 
      width={1000}
      alt="patient"
      className="side-img max-w-[50%]"
      />
    </div>
  );
}
