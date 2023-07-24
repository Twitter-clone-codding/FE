import { getProfile } from "@/api/get";
import ProfileCenterList from "@/components/layout/maincenter/ProfileCenterList";
import { useState, useEffect } from "react";
const Profile = () => {
  const [profileData, setProfileData] = useState<Profile>();

  useEffect(() => {
    const fetch = async () => {
      const response = await getProfile();
      // setProfileData(response);
    };
    // fetch();
  }, []);

  return <ProfileCenterList />;
};
export default Profile;
