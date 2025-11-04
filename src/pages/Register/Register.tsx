import { toast } from "sonner";
import { Form } from "./components";
import { Modal } from "@mantine/core";
import { Button } from "@/components/Button";
import { Create } from "@/modules/user/forms";

type IProps = {
  opened: boolean;
  close: () => void;
};

const Register = ({ opened, close }: IProps) => {
  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title="Authentication"
      closeOnClickOutside={false}
    >
      <Create
        onSuccess={() => {
          toast.success("Ma'lumotlar muvaffaqiyatli saqlandi.", {
            position: "top-center",
          });
          close();
        }}
      >
        {({ isLoading }) => (
          <>
            <Form />
            <Button
              full
              content="Submit"
              htmlType="submit"
              loading={isLoading}
              disabled={isLoading}
            />
          </>
        )}
      </Create>
    </Modal>
  );
};

export default Register;
