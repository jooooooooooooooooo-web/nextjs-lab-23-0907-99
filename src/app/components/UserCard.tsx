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
        <h1 style={{ fontSize: '24px' }}>User Profile</h1>
        <h2>Name: {name || Dname}</h2>
        <h3>Role: {role || Drole}</h3>
        <h4>Favorite Color: {color || Dcolor}</h4>
    </div>
  );
}