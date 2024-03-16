export default async function Home() {
  const revalidatedData: {
    dateTime: string;
    date: string;
    time: string;
  } = await (
    await fetch(
      `https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam`,
      {
        next: { revalidate: 60 },
      }
    )
  ).json();

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-gray-500">
      <div className="shadow-lg w-40 h-40 bg-white p-4 flex flex-col items-center gap-4">
        <span className="font-semibold">
          Current time form API:
          <br /> {revalidatedData.time}
        </span>

        <span className="text-sm">{revalidatedData.dateTime}</span>
      </div>
    </main>
  );
}
