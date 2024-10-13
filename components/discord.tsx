"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import * as ProgressPrimitive from "@radix-ui/react-progress";

interface DiscordPresenceProp {
  userId: string;
  username: string;
  progressBar?: string;
  activityClass?: string;
  detailsClass?: string;
  timeClass?: string;
  userClass?: string;
  acitivityContainer?: string;
  acitivityImageContainer?: string;
}

const DiscordPresence: React.FC<DiscordPresenceProp> = ({
  userId,
  username,
  progressBar,
  activityClass,
  userClass,
  detailsClass,
  timeClass,
  acitivityContainer,
  acitivityImageContainer,
}) => {
  const [name, setName] = useState(username);
  const [state, setState] = useState("");
  const [details, setDetails] = useState("Fetching....");
  const [Elapsed, setElapsed] = useState("");
  const [isSpotify, setIsSpotify] = useState(false);
  const [progress, setProgress] = useState(0);
  const [largeImage, setLargeImage] = useState("");
  const [smallImage, setSmallImage] = useState("");
  const [time, setTime] = useState("");
  const [spotifyTotal, setSpotifyTotal] = useState(0);

  const [userName, setUsername] = useState("");

  const localtime = () => {
    setTime(
      new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" })
    );
  };

  const [songLink, setSongLink] = useState("");
  const {
    isListeningToSpotify,
    isActivity,
    activity,
    discordUser,
    isNoActivity,
  } = useDiscord(userId);

  function elapsedTime(timestampStart: number) {
    const elapsedMs = new Date().getTime() - timestampStart;
    let elapsedTimeString = new Date(elapsedMs).toISOString().slice(14, 19);
    setElapsed(elapsedTimeString);
  }

  useEffect(() => {
    if (discordUser) {
      setUsername(discordUser.username);
    }
    if (isListeningToSpotify) {
      const { track_id, artist, song, album_art_url } = activity;

      const details = artist.replace(/;/g, ", ");
      setSongLink(`https://open.spotify.com/track/${track_id}`);
      setName(song);
      setDetails(details);
      setLargeImage(album_art_url);
      musicProgress(activity);
      setIsSpotify(true);
    }
    if (isActivity) {
      const { name, details, assets, timestamps, state, application_id } =
        activity;

      const largeImage = assets?.large_image.includes("http")
        ? "https://" +
          assets.large_image.replace(/^mp:external\/[^\/]+\/https\//, "")
        : `https://cdn.discordapp.com/app-assets/${application_id}/${assets.large_image}.webp?size=512`;
      const smallImage = assets?.small_image.includes("http")
        ? "https://" +
          assets.small_image.replace(/^mp:external\/[^\/]+\/https\//, "")
        : `https://cdn.discordapp.com/app-assets/${application_id}/${assets.small_image}.webp?size=512`;
      setName(name);
      setDetails(details);
      setState(state);

      setLargeImage(largeImage);
      setSmallImage(smallImage);
      elapsedTime(timestamps.start);
      setIsSpotify(false);
    }
    if (isNoActivity) {
      console.log(discordUser);
      let details =
        discordUser?.discord_status.charAt(0).toUpperCase() +
        discordUser?.discord_status.slice(1);
      details = details === "Dnd" ? "Do Not Disturb" : details;
      console.log(details, "detilsd");
      setDetails(details);
      setLargeImage(
        `https://cdn.discordapp.com/avatars/${userId}/${discordUser?.discord_user.avatar}.png?size=512`
      );
      setName(discordUser?.discord_user.username);
      setIsSpotify(false);
    }
  }, [
    isListeningToSpotify,
    activity,
    discordUser,
    isNoActivity,
    isActivity,
    userId,
  ]);

  function musicProgress(spotify: any) {
    let spotifyTotal = spotify?.timestamps?.end - spotify?.timestamps?.start;
    let progress =
      100 -
      (100 * (spotify?.timestamps?.end - new Date().getTime())) / spotifyTotal;

    setSpotifyTotal(spotifyTotal);
    setProgress(progress);
  }

  useEffect(() => {
    localtime();
    const intervalId = setInterval(localtime, 1000); // Update local time every second
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className={cn(
        "bg-black/90 px-4 py-6 rounded-2xl text-white flex justify-start items-center gap-6 min-w-[320px]",
        acitivityContainer
      )}
    >
      <div
        className={cn(
          "relative mt-1  min-w-[100px] h-[100px] ",
          acitivityImageContainer
        )}
      >
        {largeImage == "" ? (
          <div className="animate-pulse bg-gray-500 w-[100px] h-[100px] rounded-2xl"></div>
        ) : (
          <img
            src={largeImage}
            className={cn("rounded-2xl relative select-none", {
              "animate-[spin_40s_linear_infinite] rounded-full": isSpotify,
            })}
            alt="Activity Image"
          />
        )}

        {isActivity && (
          <img
            src={smallImage}
            height={40}
            width={40}
            className={cn(
              "rounded-full bottom-[-10px] right-0 select-none absolute p-2 bg-black/90",
              {}
            )}
            alt="Activity Image"
          />
        )}
      </div>
      <div className="flex  flex-col justify-start items-start w-full">
        <h1
          className={cn(
            "font-grotesk text-lg md:text-2xl cursor-pointer  ",
            activityClass
          )}
        >
          {isSpotify ? (
            <a href={songLink} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            !isActivity && name
          )}
        </h1>
        <h3
          className={cn(
            "md:text-xl text-md mb-2",
            isSpotify && "mb-3",
            isNoActivity && "mb-0",
            detailsClass
          )}
        >
          {isSpotify
            ? details.length > 20
              ? `by ${details.slice(0, 20)}...`
              : `by ${details}`
            : isActivity
            ? details.length > 20
              ? `${details
                  .slice(0, 30)
                  .replace(/In\s+(\w)/, (_, char) => char.toUpperCase())}...`
              : details
            : details}
        </h3>
        <div
          className={cn(
            "w-full mb-2",
            isSpotify && "mb-2",
            isNoActivity && "mb-0"
          )}
        >
          {/* {isSpotify ? (
            <Progress
              value={progress}
              className=" w-[100px] md:w-[200px] h-[3px] text-red-500"
              progressBar={progressBar}
            />
          ) : isActivity ? (
            state
          ) : (
            ""
          )} */}
        </div>
        <div>
          {isActivity ? (
            <span className="mb-2">Elapsed : {Elapsed}</span>
          ) : (
            isNoActivity && (
              <div className="flex flex-row gap-1 justify-start items-center">
                <span>Workspace</span>
                <span className="text-sm md:text-xl hidden sm:inline-block">
                  •
                </span>
                <span>Home</span>
              </div>
            )
          )}
        </div>
        <div className="flex flex-nowrap gap-1  flex-row ">
          {!isNoActivity && (
            <>
              <p className={cn("text-sm md:text-xl", userClass)}>{userName}</p>
              <span className="text-sm md:text-xl hidden sm:inline-block">
                •
              </span>
            </>
          )}
          <p className={cn("text-sm md:text-xl", timeClass)}>{time}</p>
        </div>
      </div>
    </div>
  );
};
const useDiscord = (userId: string) => {
  const [userActivity, setUserActivity] = useState<any>(null);
  const [discordUser, setDiscordUser] = useState<any>({});
  const [isListeningToSpotify, setIsListeningToSpotify] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [isNoActivity, setNoActivity] = useState(false);
  const [activity, setActivity] = useState<any>({});
  console.log(userId);
  useEffect(() => {
    let lanyard: WebSocket | null = null;
    let heartbeatInterval: NodeJS.Timeout | null = null;

    const connect = () => {
      console.log("hi");
      lanyard = new WebSocket("wss://api.lanyard.rest/socket");
      console.log("lanyard is called ");
      lanyard.onmessage = (event) => {
        const jsonData = JSON.parse(event.data);
        const opcode = jsonData.op;
        const data: any = jsonData.d;

        if (!lanyard) {
          return;
        }

        if (opcode === 1) {
          let heartbeatInterval = data.heartbeat_interval;
          lanyard.send(
            JSON.stringify({
              op: 2,
              d: { subscribe_to_id: userId },
            })
          );

          // Set up heartbeat
          if (heartbeatInterval) {
            heartbeatInterval = setInterval(() => {
              lanyard?.send(JSON.stringify({ op: 3 }));
            }, heartbeatInterval);
          }
        } else if (opcode === 0) {
          if (data.listening_to_spotify) {
            const spotify = data.spotify;
            setIsListeningToSpotify(true);
            setActivity(spotify);
            setIsActivity(false);
            setNoActivity(false);
            setDiscordUser(data.discord_user);
          } else if (data.activities && data.activities[0]) {
            setActivity(data.activities[0]);
            setIsActivity(true);
            setNoActivity(false);
            setDiscordUser(data.discord_user);
            setIsListeningToSpotify(false);
          } else {
            setIsActivity(false);
            setIsListeningToSpotify(false);
            setNoActivity(true);
            setDiscordUser(data);
          }
        }
      };

      lanyard.onclose = () => {
        if (heartbeatInterval) {
          clearInterval(heartbeatInterval);
        }
        setTimeout(connect, 2500);
      };
    };

    connect();

    return () => {
      if (lanyard) {
        lanyard.close();
      }
      if (heartbeatInterval) {
        clearInterval(heartbeatInterval);
      }
    };
  }, [userId]);

  return {
    userActivity,
    isListeningToSpotify,
    isActivity,
    isNoActivity,
    activity,
    discordUser,
  };
};
type progressProps = {
  progressBar?: string;
  value?: number;
};
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & progressProps
>(({ className, progressBar, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-white transition-all ",
        progressBar
      )}
      style={{ transform: `translateX(-${100 - 0}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { DiscordPresence };
