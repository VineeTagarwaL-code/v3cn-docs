import { codeToHtml } from "shiki";
import { InstallationTabs } from "@/components/demo-ui/discord/installation-tabs";

const installationCode = `
"use client";

import React, { use, useEffect, useState } from "react";
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
}: TDiscord) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activityImage, setActivityImage] = useState<TActivityImage>({
    largeActivityImage: "",
    smallActivityImage: "",
    isActivity: true,
    isSpotifyPlaying: false,
  });
  const [activityDetais, setActivityDetails] = useState<TActivityDetail>({
    detail: "",
    description: "",
  });

  const [progress, setProgress] = useState<number>(0);
  function musicProgress(spotify: Pick<TSpotifyData, "timestamps">) {
    let totalTime = spotify.timestamps.end - spotify.timestamps.start;
    let progress =
      100 - (100 * (spotify.timestamps.end - new Date().getTime())) / totalTime;
    setProgress(progress);
  }
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
            <AcitvityInfo
              activityDetais={activityDetais}
              activityDescriptionClass={activityDescriptionClass}
              activityDetailClass={activityDetailClass}
            />
            {activityImage.isSpotifyPlaying ? (
              <Progress
                value={progress}
                className=" w-[100px] md:w-[200px] h-[3px] text-red-500 "
                progressBarClassName={progressBarClassName}
              />
            ) : null}
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

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { progressBarClassName?: string; value?: number; }
>(({ className, progressBarClassName, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 bg-purple-400 transition-all", progressBarClassName)}
      style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = "Progress";

export default Progress;

export { Discord };
`;

export async function DiscordInstallationCode() {
  const html = await codeToHtml(installationCode, {
    lang: "bash",
    theme: "min-dark",
  });

  return (
    <InstallationTabs
      codeHtml={html}
      layoutIdPrefix="discord-presence"
      cliCommand="v3cn add discord"
      importCode="import { Discord  } from '@/components/discord';"
    />
  );
}
