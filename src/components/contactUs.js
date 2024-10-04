import Image from "next/image";
import whatsapp from "@/img/whatsapp.png";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { translations } = useLanguage();
  return (
    <a href="https://api.whatsapp.com/send?phone=554888759299&app_absent=1" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 flex items-center bg-[#28a619] py-1 pl-2 pr-6 rounded-full z-10 sm:hidden">
        <Image src={whatsapp} alt="WhatsApp" width={42} height={42} className="max-sm:w-8" />
        <span className="text-white text-lg max-sm:text-sm font-bold ml-1 leading-none max-sm:mt-1">{translations.contato.contact_us}</span>
    </a>
  )
}