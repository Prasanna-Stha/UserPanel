import type { User, UserPayloadType } from "@/@types/user";
import { BASE_URL } from "@/constants/services";
import { errorNotification, successNotification } from "@/utils/notification";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getUserList = () => {
  return axios.get(`${BASE_URL}`);
};

export const useGetUserList = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUserList,
    select: (data) => data?.data,
  });

const getUserById = (id: string) => {
  return axios.get(
    `${BASE_URL}/${id}`
  );
};

export const useGetUserById = (id: string) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    select: (data) => data?.data,
  });

const addUser = (data: UserPayloadType) => {
  return axios.post(
    `${BASE_URL}`,
    data
  );
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      successNotification("User added successfully.");
    },
    onError: () => {
      errorNotification("Error occured while adding user.");
    },
  });
};

const updateUser = (user: User) => {
  return axios.put(
    `${BASE_URL}/${user?.id}`,
    user
  );
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      successNotification("User data updated successfully.");
    },
    onError: () => {
      errorNotification("Error occured while updating data.");
    },
  });
};

const deleteUser = (id: string) => {
  return axios.delete(
    `${BASE_URL}/${id}`
  );
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      successNotification("User deleted successfully.");
    },
    onError: () => {
      errorNotification("Error occured while deleting user.");
    },
  });
};
