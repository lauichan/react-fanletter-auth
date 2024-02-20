import { useState } from "react";
import EditProfile from "../components/profile/EditProfile";
import Profile from "../components/profile/Profile";
import { useSelector } from "react-redux";

function MyPage() {
  const [editMode, setEditMode] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const toggleMode = () => {
    setEditMode(!editMode);
  };

  if (editMode) return <EditProfile user={user} toggleMode={toggleMode} />;
  return <Profile user={user} toggleMode={toggleMode} />;
}

export default MyPage;
