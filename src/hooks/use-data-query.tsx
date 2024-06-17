import { useQuery } from "@tanstack/react-query";

export function useDataQuery() {
  return useQuery({ queryKey: ["data"], queryFn: () => fetch("/data.json").then((x) => x.json()) });
}
