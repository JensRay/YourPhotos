"use client";
import React, { useRef } from "react";

import logo from "../assets/yourphotos-logo-black.svg";

import Image from "next/image";

import styles from "./Navbar.module.scss";
import { useUserDataStore } from "@/store/user_store";
const Navbar = () => {
  const avatarRef = useRef(null);
  const avatar = useUserDataStore((state) => state.userData.avatar);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="YourPhotos logo" />
      </div>
      <div className={styles.avatar}>
        {avatar && <Image ref={avatarRef} src={avatar} alt="User Avatar" />}
      </div>
    </nav>
  );
};

export default Navbar;
