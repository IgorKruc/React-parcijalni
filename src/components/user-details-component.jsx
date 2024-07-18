const UserDetails = ({ user }) => {
  if (!user) {
    return <p>Nema podataka.</p>;
  }

  return (
    <>
      <h2>Korisnički detalji</h2>
      <p>
        <b>Id:</b> {user.id}
      </p>
      <p>
        <b>Ime:</b> {user.name}
      </p>
      <p>
        <b>Opis:</b> {user.bio}
      </p>
    </>
  );
};

export default UserDetails;
