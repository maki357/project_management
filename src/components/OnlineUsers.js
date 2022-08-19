import { useCollection } from "../hooks/useCollection";

// components
import Avatar from "./Avatar";

// styles
import "./OnlineUsers.css";

export default function OnlineUsers() {
  const { isPending, error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2>Svi Korisnici</h2>
      {isPending && <div>Ucitavanje korisnika...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
