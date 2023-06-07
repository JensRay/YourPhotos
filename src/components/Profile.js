import Image from "next/image";

import styles from "./Profile.module.scss";

import "../app/globals.scss";

const Profile = ({ userData, followState, handleFollow }) => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.image_container}>
        {userData.avatar && (
          <Image
            src={userData.avatar}
            alt="User Avatar"
            width={200}
            height={200}
            priority
          />
        )}
      </div>
      <div className={styles.data_container}>
        <h1>{userData.name}</h1>
        <button onClick={() => handleFollow()} className={styles.follow_button}>
          {followState ? "Unfollow" : "Follow"}
        </button>
        <div className={styles.website}>
          <a
            href={
              `https://www.${userData.website}` ||
              `http://www.${userData.website}` ||
              "#"
            }
            target="_blank"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profile;
