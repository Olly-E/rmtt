import { Suspense } from "react";

export const metadata = {
  title: "",
  description: "",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {" "}
      <Suspense fallback={<div></div>}>{children}</Suspense>
    </div>
  );
}
