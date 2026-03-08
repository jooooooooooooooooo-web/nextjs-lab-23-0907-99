"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    document.cookie = "auth-token=mock-token; path=/";
    router.push("/");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Login Page</h1>
      <p>Please log in to continue.</p>
      <button onClick={handleLogin} style={{ margin: "20px 10px", border: '2px double', padding: '10px', backgroundColor: '#555555', color: 'white' }}>
        Login
      </button>
    </div>
  );
}