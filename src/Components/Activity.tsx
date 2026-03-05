export async function fetchPresence() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/594595838563582024",
    { next: { revalidate: 30 } }
  );

  const json = await res.json();
  if (!json.success) return null;

  return json.data;
}

export default async function Activity() {
  const data = await fetchPresence();

  if (!data) return <p>Offline</p>;
  const user = data.discord_user;
  const avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
  const activity = data.activities?.find((a: any) => a.type === 0);

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 w-60 z-50">
    <div className="bg-neutral-800 border border-white backdrop-blur-lg rounded-xl p-4 w-full">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          className="w-12 h-12 rounded-full"
        />

        <div>
          <p className="font-semibold text-white">{user.display_name}</p>
          <p className="text-sm opacity-70 text-white">{data.discord_status}</p>
        </div>
      </div>

      {/* Activity */}
      <div className="mt-3 text-white">
        {activity ? (
          <>
            <p className="font-medium">Playing</p>
            <p className="text-sm">{activity.name}</p>
            <p className="text-xs opacity-70">{activity.state}</p>
          </>
        ) : (
          <p className="text-sm opacity-70">No current activity</p>
        )}
      </div>
        </div>
    </div>
  );
}