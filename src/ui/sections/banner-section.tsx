'use client';

import { PlaceholderSkeleton } from '@/ui/placeholder-skeleton';

import { useQuery } from '@tanstack/react-query';

function useData() {
  return useQuery({ queryKey: ['data'], queryFn: () => fetch('/data.json').then((x) => x.json()) });
}

export function BannerSection() {
  const { data, isLoading } = useData();
  if (isLoading)
    return (
      <div className='prose prose-xl prose-stone text-white prose-headings:text-white/30'>
        <h1>
          <PlaceholderSkeleton length='Axmin Shrestha | Portfolio' />
        </h1>
        <p>
          <PlaceholderSkeleton length='I Develop Creative Websites. Specialize In Aesthetics, Responsive Design, Simplicity, And Utility.' />
        </p>
      </div>
    );
  return (
    <div className='prose prose-xl prose-stone text-white prose-headings:text-white/30'>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
