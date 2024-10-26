"use client";

import React, { use, useCallback, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import * as ProgressPrimitive from "@radix-ui/react-progress";

type TDiscord = {
  userId: string;
  userName: string;
  activityDetailClass?: string;
  activityDescriptionClass?: string;
  activityImageClassName?: string;
  progressBarClassName?: string;
  localTimeClass?: string;
};
type TActivityImage = {
  largeActivityImage: string;
  smallActivityImage: string;
  isActivity: boolean;
  isSpotifyPlaying: boolean;
};
/**
 * visual studio code activity
 */
type TActivity = {
  application_id: string;
  assets: {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
  };
  details: string;
  id: string;
  name: string;
  state: string;
};
type TDiscordUser = {
  details: string;
  discord_status: string;
  username: string;
  avatar: string;
  id: string;
};
type TSpotifyData = {
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
  timestamps: {
    start: number;
    end: number;
  };
  track_id: string;
};

type TActivityDetail = {
  detail: string;
  description: string;
};
const Discord: React.FC<TDiscord> = ({
  userId,
  userName,
  activityDescriptionClass,
  activityImageClassName,
  activityDetailClass,
  progressBarClassName,
  localTimeClass,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activityImage, setActivityImage] = useState<TActivityImage>({
    largeActivityImage: "",
    smallActivityImage: "",
    isActivity: true,
    isSpotifyPlaying: false,
  });
  const [activityDetails, setActivityDetails] = useState<TActivityDetail>({
    detail: "",
    description: "",
  });
  const [progress, setProgress] = useState<number>(0);

  const musicProgress = useCallback(
    (spotify: Pick<TSpotifyData, "timestamps">) => {
      const totalTime = spotify.timestamps.end - spotify.timestamps.start;
      const currentProgress =
        100 - (100 * (spotify.timestamps.end - Date.now())) / totalTime;
      setProgress(currentProgress);
    },
    []
  );

  const data = useDiscord({
    userId,
    setIsLoading,
    setActivityImage,
    musicProgress,
    setActivityDetails,
  });

  return (
    <div className="my-6">
      {isLoading ? (
        <DiscordSkeleton />
      ) : (
        <div className="flex gap-2">
          <ImageCont
            activityImage={activityImage}
            activityImageClassName={activityImageClassName}
          />
          <div className="flex flex-col justify-center items-start gap-2">
            <ActivityInfo
              activityDetails={activityDetails}
              activityDescriptionClass={activityDescriptionClass}
              activityDetailClass={activityDetailClass}
            />
            {activityImage.isSpotifyPlaying && (
              <Progress
                value={progress}
                className="w-[100px] md:w-[200px] h-[3px]"
                progressBarClassName={progressBarClassName}
              />
            )}
            <div className="flex flex-row flex-nowrap gap-2">
              <span className="capitalize">{userName}</span> •{" "}
              <LocalTime localTimeClass={localTimeClass} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ActivityInfo = ({
  activityDetails,
  activityDetailClass,
  activityDescriptionClass,
}: {
  activityDetails: TActivityDetail;
  activityDetailClass?: string;
  activityDescriptionClass?: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className={cn("text-base font-semibold mb-1", activityDetailClass)}>
        {activityDetails.detail}
      </span>
      <span className={cn("text-sm", activityDescriptionClass)}>
        {activityDetails.description}
      </span>
    </div>
  );
};

type TUseDiscord = {
  userId: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setActivityImage: React.Dispatch<React.SetStateAction<TActivityImage>>;
  musicProgress: (spotify: Pick<TSpotifyData, "timestamps">) => void;
  setActivityDetails: React.Dispatch<React.SetStateAction<TActivityDetail>>;
};

const useDiscord = ({
  userId,
  setIsLoading,
  setActivityImage,
  musicProgress,
  setActivityDetails,
}: TUseDiscord) => {
  useEffect(() => {
    let lanyard: WebSocket | null = null;

    const connect = () => {
      lanyard = new WebSocket(`wss://api.lanyard.rest/socket`);
      lanyard.onopen = () => {
        lanyard?.send(
          JSON.stringify({
            op: 2,
            d: { subscribe_to_id: userId },
          })
        );
      };

      lanyard.onmessage = (event) => handleWebSocketMessage(event);

      const handleWebSocketMessage = (event: MessageEvent) => {
        const json = JSON.parse(event.data);
        const { op, d } = json;
        if (op === 1) setupHeartbeat(d?.heartbeat_interval);
        if (op === 0) handleActivityData(d);
      };

      const setupHeartbeat = (interval: number) => {
        setInterval(() => {
          lanyard?.send(JSON.stringify({ op: 3 }));
        }, interval);
      };

      const handleActivityData = (data: any) => {
        if (data.listening_to_spotify) {
          updateSpotifyData(data.spotify);
        } else if (data.activities && data.activities[0]) {
          updateActivityData(data.activities[0]);
        } else {
          updateUserStatus(data.discord_user, data.discord_status);
        }
      };

      const updateSpotifyData = (spotify: TSpotifyData) => {
        setActivityImage({
          largeActivityImage: spotify.album_art_url,
          smallActivityImage: spotify.album_art_url,
          isActivity: true,
          isSpotifyPlaying: true,
        });
        musicProgress(spotify);
        setActivityDetails({
          detail: spotify.artist,
          description: spotify.song,
        });
        setIsLoading(false);
      };

      const updateActivityData = (activity: TActivity) => {
        const largeImage = formatActivityImageUrl(activity.assets.large_image);
        const smallImage = formatActivityImageUrl(activity.assets.small_image);
        setActivityImage({
          largeActivityImage: largeImage,
          smallActivityImage: smallImage,
          isActivity: true,
          isSpotifyPlaying: false,
        });
        setActivityDetails({
          detail: activity.details,
          description: activity.state,
        });
        setIsLoading(false);
      };

      const updateUserStatus = (user: TDiscordUser, status: string) => {
        const largeImage = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`;
        const formattedStatus = formatStatus(status);
        setActivityImage({
          largeActivityImage: largeImage,
          smallActivityImage: largeImage,
          isActivity: false,
          isSpotifyPlaying: false,
        });
        setActivityDetails({
          detail: user.username,
          description: formattedStatus,
        });
        setIsLoading(false);
      };

      const formatActivityImageUrl = (url: string) => {
        return url.includes("http")
          ? `https://${url.replace(/^mp:external\/[^\/]+\/https\//, "")}`
          : `https://cdn.discordapp.com/app-assets/${url}`;
      };

      const formatStatus = (status: string) => {
        let formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);
        return formattedStatus === "Dnd" ? "Do Not Disturb" : formattedStatus;
      };
    };

    connect();

    return () => lanyard?.close();
  }, [
    userId,
    setIsLoading,
    setActivityImage,
    musicProgress,
    setActivityDetails,
  ]);
};
type TImageCont = {
  activityImageClassName?: string;
  activityImage: TActivityImage;
};
const ImageCont: React.FC<TImageCont> = ({
  activityImageClassName,
  activityImage,
}: TImageCont) => {
  return (
    <div
      className={cn(
        "relative mt-1  max-w-[100px] h-[100px] ",
        activityImageClassName
      )}
    >
      {activityImage.largeActivityImage == "" ? (
        <div className="animate-pulse bg-gray-500 w-[100px] h-[100px] rounded-2xl"></div>
      ) : (
        <img
          src={activityImage.largeActivityImage}
          className={cn(
            "rounded-2xl relative select-none",
            `${
              activityImage.isSpotifyPlaying &&
              "animate-[spin_40s_linear_infinite] rounded-full"
            }`
          )}
          alt="Activity Image"
        />
      )}

      {!activityImage.isSpotifyPlaying && activityImage.isActivity && (
        <img
          src={activityImage.smallActivityImage}
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
  );
};

type TLocalTime = {
  localTimeClass?: string;
};
const LocalTime: React.FC<TLocalTime> = ({ localTimeClass }) => {
  const [localTime, setLocalTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  const setLocalTimeState = useCallback(() => {
    setLocalTime(new Date().toLocaleTimeString());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const intervalId = setInterval(setLocalTimeState, 1000);
    return () => clearInterval(intervalId);
  }, [setLocalTimeState]);

  return <span className={localTimeClass}>{localTime}</span>;
};

type progressProps = {
  progressBarClassName?: string;
  value?: number;
};
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & progressProps
>(({ className, progressBarClassName, value, ...props }, ref) => (
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
        "h-full w-full flex-1 bg-purple-400 transition-all ",
        progressBarClassName
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

/**
 *
 * @description Clean skeleton component for discordPresence
 */
const DiscordSkeleton: React.FC = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="w-24  h-24 bg-gray-700 animate-pulse rounded-2xl"></div>
      <div className="flex flex-col  gap-3 items-start">
        <div className="w-32  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
        <div className="w-36  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
        <div className="flex justify-start items-center gap-3">
          <div className="w-16  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
          <div className="w-16  h-5 bg-gray-700 animate-pulse rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export { Discord };
