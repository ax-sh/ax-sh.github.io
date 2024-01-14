"use client";

import { PlaceholderSkeleton } from "@/ui/placeholder-skeleton";

import { useQuery } from "@tanstack/react-query";

function useData() {
  return useQuery({ queryKey: ["data"], queryFn: () => fetch("/data.json").then((x) => x.json()) });
}

export function BannerSection({
  className = "prose prose-xl prose-stone text-white prose-headings:text-green-500",
}: { className?: string }) {
  const { data, isLoading } = useData();
  if (isLoading)
    return (
      <div className={className}>
        <h1>
          <PlaceholderSkeleton length="Axmin Shrestha | Portfolio" />
        </h1>
        <p>
          <PlaceholderSkeleton length="I Develop Creative Websites. Specialize In Aesthetics, Responsive Design, Simplicity, And Utility." />
        </p>
      </div>
    );
  return (
    <div className={className}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
