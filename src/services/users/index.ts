import type { User, UserPayloadType } from "@/@types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getUserList = () => {
  return axios.get("https://684ecd98f0c9c9848d2924f8.mockapi.io/test/v1/users");
};

export const useGetUserList = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUserList,
    select: (data) => data?.data,
  });

const getUserById = (id: string) => {
  return axios.get(
    `https://684ecd98f0c9c9848d2924f8.mockapi.io/test/v1/users/${id}`
  );
};

export const useGetUserById = (id: string) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: ()=> getUserById(id),
    select: (data)=>data?.data,
  });

const addUser = (data: UserPayloadType) => {
  return axios.post(
    "https://684ecd98f0c9c9848d2924f8.mockapi.io/test/v1/users",
    data
  );
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["users"],
      }),
  });
};

const updateUser = (user: User) => {
  return axios.put(
    `https://684ecd98f0c9c9848d2924f8.mockapi.io/test/v1/users/${user?.id}`,
    user
  );
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["users"],
      }),
  });
};

const deleteUser = (id: string) => {
  return axios.delete(
    `https://684ecd98f0c9c9848d2924f8.mockapi.io/test/v1/users/${id}`
  );
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["users"],
      }),
  });
};
