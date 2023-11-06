"use client";

import { type FC } from "react";

import { useCoords } from "@/hooks/useCoords";
import { trpc } from "@/trpc/client";
import { getFormattedWeatherDescription } from "@/utils/getFormattedWeatherDescription";
import { Skeleton } from "@nextui-org/react";

export const WeatherData: FC = () => {
  const coords = useCoords();
  const { data: weatherData, isLoading } = trpc.weather.getWeatherData.useQuery(
    {
      latitude: coords?.latitude ?? 0,
      longitude: coords?.longitude ?? 0,
    },
    {
      enabled: !!coords,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  if (isLoading) {
    return (
      <div>
        <Skeleton className="mt-2 w-[258px] rounded-md">
          <div className="h-4" />
        </Skeleton>
        <Skeleton className="mt-2 w-3/4 rounded-md">
          <div className="h-4" />
        </Skeleton>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <span className="text-tiny text-default-500">
      You can expect a 👆 high of {weatherData.temp_max.toFixed()}º and a 👇 low
      of {weatherData.temp_min.toFixed()}º
      {getFormattedWeatherDescription(weatherData.summary)} for today&apos;s
      weather.
    </span>
  );
};
