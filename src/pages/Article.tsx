import { useLikeItem } from "@hooks/mutations";
import { useTodos } from "@hooks/queries";
import { Skeleton, Typography, Box, Button } from "@mui/material";


export const Article = () => {
    const { data, isLoading, isError, error, refetch } = useTodos();
    const likeItemMutation = useLikeItem();


    if(isError) return <p>Une erreur est survenue ! { String(error)} </p>

    return (
        <Box>
        <Typography variant="h2">Liste des tâches</Typography>
        <Button variant="contained" onClick={() => refetch()}>
          Rafraîchir
        </Button>
        <Box component="ul">
          {isLoading ? (
            Array.from(new Array(5)).map((_, index) => (
              <Box key={index} component="li" sx={{ mb: 2 }}>
                <Skeleton variant="text" width={500} height={50} animation="wave" />
                <Skeleton variant="rectangular" animation="wave" width={300} height={50} />
              </Box>
            ))
          ) : (
            data.map((item: any) => (
              <Box key={item.id} component="li" sx={{ mb: 2 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => likeItemMutation.mutate(item.id)}
                >
                  Like
                </Button>
              </Box>
            ))
          )}
        </Box>
      </Box>
    )
}