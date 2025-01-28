import { likeItem } from "@api/itemsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLikeItem() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: likeItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['items'] })
        }
    })
}
