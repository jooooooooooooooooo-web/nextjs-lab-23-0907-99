export default Profile;

interface info {
  name?: string;
  role?: string;
  color?: string;
}

function Profile({ name, role, color }: info) {
    const Dname = name ?? "John Doe";
    const Drole = role ?? "Turkey Stuffer";
    const Dcolor = color ?? "Lavender";
  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <h1>Name: {name}</h1>
        <h2>Role: {role = "Network Administrator"}</h2>
        <h3>Favorite Color: {color = "Red"}</h3>
    </div>
  );
}