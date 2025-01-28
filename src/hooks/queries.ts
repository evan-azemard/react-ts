import { fetchItems } from "@api/itemsApi";
import { useQuery } from "@tanstack/react-query";

export function useTodos() {
    return useQuery({
        queryKey: ["items"],
        queryFn: fetchItems,
    })
}
