'use client';
import { useQuery } from '@tanstack/react-query';

function useData() {
  return useQuery({ queryKey: ['data'], queryFn: () => fetch('/data.json').then((x) => x.json()) });
}
export function ComingSoonSection() {
  const { data } = useData();
  console.log(data, 'data');
  return <h1 className={'text-4xl text-white m-0 p-0'}>Coming Soon</h1>;
}
