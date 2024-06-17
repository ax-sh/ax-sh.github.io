"use client";

import { useDataQuery } from "@/hooks/use-data-query";
import { PlaceholderSkeleton } from "@/ui/placeholder-skeleton";

type BannerSectionProps = {
  // eslint-disable-next-line react/require-default-props
  className?: string;
};
export function BannerSection({
  className = "prose prose-xl prose-stone text-white prose-headings:text-green-500"
}: BannerSectionProps) {
  const { data, isLoading } = useDataQuery();
  if (isLoading)
    return (
      <div className={className}>
        <h1>
          <PlaceholderSkeleton length='Axmin Shrestha | Portfolio' />
        </h1>
        <p>
          <PlaceholderSkeleton length='I Develop Creative Websites. Specialize In Aesthetics, Responsive Design, Simplicity, And Utility.' />
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
