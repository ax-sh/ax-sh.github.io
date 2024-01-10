'use client';

import { useQuery } from '@tanstack/react-query';
import { PlaceholderSkeleton } from '@/ui/placeholder-skeleton';

function useData() {
  return useQuery({ queryKey: ['data'], queryFn: () => fetch('/data.json').then((x) => x.json()) });
}

export function ComingSoonSection() {
  const { data, isLoading } = useData();
  if (isLoading)
    return (
      <div>
        <h1 className='text-4xl text-white m-0 p-0'>
          <PlaceholderSkeleton length='Axmin Shrestha | Portfolio' />
        </h1>
        <p>
          <PlaceholderSkeleton length='I Develop Creative Websites. Specialize In Aesthetics, Responsive Design, Simplicity, And Utility.' />
        </p>
      </div>
    );
  return (
    <div>
      <h1 className='text-4xl text-white m-0 p-0'>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
