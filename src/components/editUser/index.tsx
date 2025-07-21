import { yupResolver } from "@hookform/resolvers/yup";
import Dialog from "../dialog";
import { useGetUserById, useUpdateUser } from "@/services/users";
import type { UserPayloadType } from "@/@types/user";
import { Button, HStack, Stack } from "@chakra-ui/react";
import TextInput from "../input/TextInput";
import RadioField from "../input/RadioField";
import { schema } from "@/schema/AddUser";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

const UpdateUser = ({
  isOpen,
  onClose,
  dataIdentifier,
}: {
  isOpen: boolean;
  onClose: () => void;
  dataIdentifier: string;
}) => {
  const { data: user } = useGetUserById(dataIdentifier);

  const methods = useForm<UserPayloadType>({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (user) {
      reset({
        userName: user.userName,
        age: user.age,
        gender: user.gender,
        email: user.email,
        contact: user.contact,
      });
    }
  }, [reset, user]);

  const { mutate: updateUser, isPending } = useUpdateUser();

  const handleUpdate = (data: UserPayloadType) => {
    updateUser(
      {
        ...data,
        id: user?.id,
        isActive: false
      },
      { onSuccess: () => onClose() }
    );
  };
  return (
    <Dialog
      open={isOpen}
      title="Update User"
      primaryBtnText="Update"
      hasFooter={false}
      onClose={onClose}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <Stack gap={4}>
            <TextInput
              placeholder="Enter username"
              name="userName"
              label="Enter user name:"
              control={control}
              errors={errors.userName}
            />
            <TextInput
              placeholder="Enter age"
              name="age"
              label="Enter age:"
              type="number"
              control={control}
              errors={errors.age}
            />
            <RadioField
              label="Enter gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Others", value: "others" },
              ]}
              variant="outline"
              name="gender"
              errors={errors.gender}
              control={control}
            />
            <TextInput
              placeholder="Enter email"
              name="email"
              label="Enter email"
              type="email"
              control={control}
              errors={errors.email}
            />
            <TextInput
              placeholder="Enter contact"
              name="contact"
              label="Enter contact"
              control={control}
              errors={errors.contact}
            />
            <HStack justifyContent={"flex-end"}>
              <Button onClick={() => reset(user)} w={"fit"} variant={"outline"}>
                Restore existing info
              </Button>
              <Button
                type="submit"
                w="fit"
                colorPalette="cyan"
                loading={isPending}
                loadingText="Updating User"
              >
                Update User
              </Button>
            </HStack>
          </Stack>
        </form>
      </FormProvider>
    </Dialog>
  );
};

export default UpdateUser;
