const UserDetails = ({ user }) => {
  if (!user) {
    return <p>Nema podataka.</p>;
  }

  return (
    <>
      <h2>Korisnički detalji</h2>
      <img src={user.avatar_url}></img>
      <p>
        <b>Ime:</b> {user.name}
      </p>
      <p>
        <b>Opis:</b> {user.bio}
      </p>

      <p>
        <b>Lokacija:</b> {user.location}
      </p>
    </>
  );
};

export default UserDetails;
