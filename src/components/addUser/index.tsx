import { Button, HStack, Stack } from "@chakra-ui/react";
import Dialog from "../dialog";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../input/TextInput";
import RadioField from "@/components/input/RadioField";
import { useForm } from "react-hook-form";
import { useAddUser } from "@/services/users";
import type { UserPayloadType } from "@/@types/user";
import { schema } from "@/schema/AddUser";

const defaultValues = {
  userName: "",
  age: undefined,
  gender: "",
  email: "",
  contact: "",
};

const AddUser = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  dataIdentifier?: string;
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserPayloadType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { mutate: addUser, isPending } = useAddUser();

  const submitHandler = (data: UserPayloadType) => {
    addUser(data, { onSuccess: () => onClose() });
  };
  return (
    <Dialog
      title="Add User"
      open={isOpen}
      onClose={onClose}
      primaryBtnText="Save"
      size="md"
      hasFooter={false}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
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
            control={control}
            type="number"
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
            control={control}
            errors={errors.gender}
          />
          <TextInput
            placeholder="Enter email"
            name="email"
            label="Enter email"
            control={control}
            type="email"
            errors={errors.email}
          />
          <TextInput
            placeholder="Enter contact"
            name="contact"
            label="Enter contact"
            control={control}
            type="string"
            errors={errors.contact}
          />
          <HStack justifyContent={"flex-end"}>
            <Button
              onClick={() => reset(defaultValues)}
              w={"fit"}
              variant={"outline"}
            >
              Clear
            </Button>
            <Button
              type="submit"
              w="fit"
              colorPalette="cyan"
              loading={isPending}
              loadingText="Adding User..."
            >
              Add User
            </Button>
          </HStack>
        </Stack>
      </form>
    </Dialog>
  );
};

export default AddUser;
