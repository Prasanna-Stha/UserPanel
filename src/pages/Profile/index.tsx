import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId, userName } = useParams();
  return <h1>{`Hello ${userName}. Your userId is ${userId}`}</h1>;
};

export default Profile;
