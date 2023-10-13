import { useForm } from "react-hook-form";
import { Field } from "../../components/field";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import DashboardHeading from "../../layout/DashboardHeading";
import { Button } from "../../components/button";
import { InputPasswordToggle } from "../../components/input";
import ImageUpload from "../../components/image/ImageUpload";
const AddUser = (props) => {
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      user_name: "",
      email: "",
      password: "",
      image: "",
      full_name: "",
      id_image: "",
      address: "",
    },
  });
  const addHandlerUser = (values) => {
    console.log(values);
  };
  return (
    <>
      <DashboardHeading
        title="Người dùng"
        desc="Thêm người dùng"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(addHandlerUser)}>
        <div className="w-[150px] sm:w-[200px] mx-auto mb-4 sm:mb-10">
          <ImageUpload className="!rounded-full"></ImageUpload>
        </div>
        <div className="grid grid-cols-1 mb-4 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Tên đăng nhập</Label>
            <Input
              control={control}
              placeholder="Nhập tên đăng nhập..."
              name="user_name"
            ></Input>
          </Field>
          <Field>
            <Label>Email</Label>
            <Input
              control={control}
              placeholder="Nhập email..."
              name="email"
              type="email"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-4 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Tên người dùng</Label>
            <Input
              control={control}
              placeholder="Nhập tên người dùng..."
              name="full_name"
            ></Input>
          </Field>
          <Field>
            <Label>Mật khẩu</Label>
            <Input
              control={control}
              placeholder="Nhập mật khẩu"
              name="password"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-1 mb-4 md:mb-5 gap-x-5 gap-y-5">
          <Field>
            <Label>Địa chỉ</Label>
            <Input
              control={control}
              placeholder="Địa chỉ người dùng..."
              name="address"
            ></Input>
          </Field>
          {/* <Field>
            <Label>Mật khẩu</Label>
            <Input
              control={control}
              placeholder="Nhập mật khẩu"
              name="password"
            ></Input>
          </Field> */}
        </div>

        <Button
          type="submit"
          className="mx-auto w-[200px] mt-5 md:mt-14 md:w-[250px]"
          // isLoading={true}
          // disablede={loading}
        >
          Add new post
        </Button>
      </form>
    </>
  );
};

export default AddUser;
