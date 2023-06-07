"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserDataStore } from "@/store/user_store";

import ImagesList from "@/components/ImagesList";

import "../../app/globals.scss";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

const UserPage = () => {
  const router = useRouter();
  const { userid } = router.query;
  const { userData, fetchUserData, images, fetchImages } = useUserDataStore();

  const followState = useUserDataStore((state) => state.followState);
  const toggleFollowState = useUserDataStore(
    (state) => state.toggleFollowState
  );

  useEffect(() => {
    if (userid) {
      fetchUserData(userid);
    }
    fetchImages();
  }, [userid, fetchUserData, fetchImages]);

  if (!userid) {
    return <p>Loading...</p>;
  }

  const handleFollow = () => {
    toggleFollowState();
  };

  return (
    <>
      <Navbar />
      <main>
        <Profile
          userData={userData}
          followState={followState}
          handleFollow={handleFollow}
        />
        <ImagesList images={images} />
      </main>
    </>
  );
};

export default UserPage;
