import { useState } from "react";
import EditProfile from "../components/profile/EditProfile";
import Profile from "../components/profile/Profile";

function MyPage() {
  const [editMode, setEditMode] = useState(false);

  const toggleMode = () => {
    setEditMode(!editMode);
  };

  if (editMode) return <EditProfile toggleMode={toggleMode} />;
  return <Profile toggleMode={toggleMode} />;
}

export default MyPage;
