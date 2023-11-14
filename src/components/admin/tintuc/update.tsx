import { useNavigate, useParams } from 'react-router-dom';
import { useGetTintucByIdQuery, useUpdateTintucMutation } from '@/api/tintuc';
import { Button, Form, Input, notification, Select } from 'antd';
import React, { useEffect } from 'react';
const SuaTinTuc = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [updateTintuc] = useUpdateTintucMutation();
  const { data, isLoading, refetch } = useGetTintucByIdQuery(String(id));
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      _id: data?._id,
      tieude: data?.tieude,
      noidung: data?.noidung,
      trang_thai: data?.trang_thai
    });
  }, [data, form]);
  const onFinish = async (values: any) => {
    try {
      const updatetintuc = await updateTintuc({ ...values,id }).unwrap();
      navigate('/admin/tintuc');
      notification.success({
        message: 'Cập nhật thành công',
        description: `Thông tin tin tức ${updatetintuc.tieude}.`,
        duration: 2,
      });
      refetch();
    } catch (error) {
      console.error('Error updating :', error);
      notification.error({
        message: 'Cập nhập thất bại',
        description: 'Đã xảy ra lỗi.',
        duration: 2,
      });
    }
  };
  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 500, margin: '0 auto' }}
        onFinish={onFinish}
      >
        <Form.Item label="Tiêu đề" name="tieude" rules={[
          { required: true, message: 'Vui lòng nhập tên tiêu đề!' },
          { min: 5, message: 'Tiêu đề tối thiểu 5 ký tự.' },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Nội dung" name="noidung" rules={[
          { required: true, message: 'Vui lòng nhập nội dung!' },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Trạng Thái" name="trang_thai" rules={[
        ]}>
          <Select>
            <Select.Option value="active">active</Select.Option>
            <Select.Option value="deactive">deactive</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">
            Update Tin Tức
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SuaTinTuc;