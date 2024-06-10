import React from "react";
import Skeleton from "./ui/Suspense";

const Loader = () => {
  return (
    <div className="flex my-32 px-8 items-center justify-around gap-2">
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="w-[30ch] h-[15rem] border rounded-xl" />
          <Skeleton className="w-[45ch] h-[1rem]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-[30ch] h-[1.25rem]" />
          <Skeleton className="w-[45ch] h-[1rem]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-[30ch] h-[1.25rem] " />
          <Skeleton className="w-[45ch] h-[1rem]" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="w-[30ch] h-[15rem] border rounded-xl" />
          <Skeleton className="w-[45ch] h-[1rem]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-[30ch] h-[1.25rem]" />
          <Skeleton className="w-[45ch] h-[1rem]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-[30ch] h-[1.25rem]" />
          <Skeleton className="w-[45ch] h-[1rem]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
