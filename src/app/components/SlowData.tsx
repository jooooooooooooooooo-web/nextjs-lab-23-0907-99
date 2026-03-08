const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function SlowData() {
    await delay(4000);
    return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <p>4 Seconds to Load</p>
    </div>
  );
}

