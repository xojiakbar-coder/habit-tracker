import { Space } from "@mantine/core";
import * as Fields from "@/containers/Fields";

const Form = () => {
  return (
    <>
      <Fields.Text label="Name" withAsterisk name="name" placeholder="John" />

      <Space h="md" />

      <Fields.Select
        withAsterisk
        name="gender"
        label="Gender"
        placeholder="Male"
        data={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
      />

      <Space h="xl" />
    </>
  );
};

export default Form;
