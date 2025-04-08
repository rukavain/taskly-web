"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Content(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("session_id")) {
      router.push("/auth/login");
    }
  }, [router]);

  return <div>Welcome to the Dashboard</div>;
}
