"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";

export default function CallButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push(`https://wa.me/${process.env.NEXT_PUBLIC_USER_PHONE_NUMBER}`);
  };
  return (
    <Button
      variant={"outline"}
      size={"lg"}
      onClick={handleClick}
      title="Whatsapp message"
    >
      <PhoneCall />
    </Button>
  );
}
