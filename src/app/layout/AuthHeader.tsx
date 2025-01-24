import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import logoBlack from "../../../public/assets/logo-black.svg";

const AuthHeader = () => {
  return (
    <nav
      aria-label="Main Navigation"
      //   ref={divRef}
      className={clsx(
        "z-[100] w-full bg-primary py-6 justify-center flex items-center transition-colors"
      )}
    >
      <Link className={clsx("")} href="/">
        <Image
          src={logoBlack}
          alt="reboot-monkey-logo"
          style={{ width: "182px", height: "auto" }}
        />
      </Link>
    </nav>
  );
};

export default AuthHeader;
