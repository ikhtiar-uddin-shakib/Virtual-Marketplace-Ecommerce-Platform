import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import UseAxios from "./UseAxios";

const UseCart = () => {
  const axiosSecure = UseAxios();
  const queryClient = useQueryClient();

  const { data: collection = [], refetch } = useQuery({
    queryKey: ['collection'], // Unique query key
    queryFn: async () => {
      const res = await axiosSecure.get('/collection');
      return res.data;
    },
  });

  const deleteItem = useMutation({
    mutationFn: async (id) => {
      await axiosSecure.delete(`/collection/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('collection');
    },
  });

  const updateItem = useMutation({
    mutationFn: async ({ id, updatedItem }) => {
      await axiosSecure.put(`/collection/${id}`, updatedItem);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('collection');
    },
  });

  return { collection, refetch, deleteItem, updateItem };
};

export default UseCart;
