import axios from "axios"

export const fetchItems = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    return response.data;
}

export const likeItem = async (id: number) => {
    const response = await axios.patch("https://jsonplaceholder.typicode.com/posts/"+id, {
        liked: true
    });
    return response.data;
}