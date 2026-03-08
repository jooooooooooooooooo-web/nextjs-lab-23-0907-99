export default function Loading() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} style={{
          margin: "15px auto",
          width: "60%",
          backgroundColor: "#e0e0e0",
          borderRadius: "8px",
          padding: "15px",
          animation: "pulse 1.5s infinite"
        }}>
          <div style={{
            height: "20px",
            backgroundColor: "#c0c0c0",
            borderRadius: "4px",
            marginBottom: "10px"
          }}/>
          <div style={{
            height: "14px",
            backgroundColor: "#d0d0d0",
            borderRadius: "4px"
          }}/>
        </div>
      ))}
    </div>
  );
}