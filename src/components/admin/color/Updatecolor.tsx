import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, notification, InputNumber } from "antd";
import { useGetSizeByIdQuery, useUpdateSizeMutation } from "@/api/color";

const UpdateSize = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [updateSize] = useUpdateSizeMutation();
  const { data, isLoading, refetch } = useGetSizeByIdQuery(String(id));
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      id: data?.id,
      name: data?.name,
      quantity: data?.quantity,
    });
  }, [data, form]);

  const onFinish = async (values: any) => {
    try {
      const updatedSize = await updateSize({ ...values, id }).unwrap();
      navigate("/admin/color");
      notification.success({
        message: "Cập nhật thành công",
        description: `The color ${updatedSize.name} has been updated.`,
        duration: 2,
      });
      refetch();
    } catch (error) {
      console.error("Error updating color:", error);
      notification.error({
        message: "Cập nhập thất bại",
        description: "Đã xảy ra lỗi khi cập nhật color",
        duration: 2,
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 500, margin: "0 auto" }}
        onFinish={onFinish}
      >
        <Form.Item
          label="color Name"
          name="name"
          rules={[
            { required: true, message: "Please input your Name color!" },
            { min: 5, message: "color Name must be at least 5 characters." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Quantity" name="quantity">
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">Update color</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateSize;
