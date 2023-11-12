import { useGetCustomerByIdQuery, useUpdateCustomerMutation } from "../../../api/customer";
import { IUpdateCustomer } from "../../../interfaces/customer";
import { Form, Button, Input, notification } from "antd";
import LoadingOutlined from "@ant-design/icons"
import { useNavigate, useParams } from "react-router-dom";

type FieldType = {
    id: string;
    name: string;
    fullname: string;
    ngaysinh: Date;
    // email: string;
    // password: string;
    confirmPassword: string;
};

const AdminCustomerEdit = () => {
    const { id } = useParams<{ id: string}>();
    const { data: customerData, isLoading, isError, refetch } = useGetCustomerByIdQuery(String(id));
    const [updateCustomer, { isLoading: isUpdateLoading }] = useUpdateCustomerMutation();
    const navigate = useNavigate();
    const [form] = Form.useForm();
console.log(id);

    const onFinish = (values: IUpdateCustomer) => {
        updateCustomer({ ...values, id: id})
            .unwrap()
            .then(() => navigate("/admin/customer"));
            
    };
    
    //     const onFinish = async (values: any) => {
    //     try {
    //         const updatedCustomer = await updateCustomer({  ...values ,id}).unwrap();
    //         navigate('/admin/customer');
    //         notification.success({
    //             message: 'Cập nhật thành công',
    //             description: `The Customer ${updatedCustomer.name} has been updated.`,
    //             duration: 2,
    //         });
    //         refetch();
    //     } catch (error) {
    //         console.error('Error updating Customer:', error);
    //         notification.error({
    //             message: 'Cập nhập thất bại',
    //             description: 'Đã xảy ra lỗi khi cập nhật Kích thước.',
    //             duration: 2,
    //         });
    //     }
    // };


    if (isLoading || isError) {
        return <div>Loading...</div>;
    }

    const initialValues: IUpdateCustomer = {
        name: customerData?.name,
        fullname: customerData?.fullname,
        ngaysinh: customerData?.ngaysinh,
        confirmPassword: "",
    };
   
    return (
        <div>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Chỉnh sửa Khách hàng</h2>
            </header>
            <Form
            form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                autoComplete="off"
                initialValues={initialValues}
            >
                <Form.Item<FieldType>
                    label="Tên khách hàng"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên !" },
                        { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Họ và tên" name="fullname">
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Ngày sinh" name="ngaysinh">
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Confirm Password" name="confirmPassword">
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isUpdateLoading ? (
                            <LoadingOutlined className="animate-spin" />
                        ) : (
                            "Cập nhật"
                        )}
                    </Button>
                    <Button
                        type="primary"
                        danger
                        className="ml-2"
                        onClick={() => navigate("/admin/customer")}
                    >
                        Quay lại
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminCustomerEdit;



// import React, { useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button, Form, Input, notification, InputNumber } from 'antd';
// import { useGetCustomerByIdQuery, useUpdateCustomerMutation } from '../../../api/customer';
// type FieldType = {
//     id: string | number;
//     name: string;
//     fullname: string;
//     ngaysinh: Date;
//     confirmPassword: string;
// };
// const AdminCustomerEdit = () => {
//     const { id } = useParams<{ id: string}>();
//     console.log(id);
    

//     const navigate = useNavigate();
//     const [updateCustomer] = useUpdateCustomerMutation();
//     const { data, isLoading, refetch } = useGetCustomerByIdQuery(id);

//     const [form] = Form.useForm();

//     useEffect(() => {
//         form.setFieldsValue({
//             id: data?._id,
//             name: data?.name,
//             fullname: data?.fullname,
//             ngaysinh: data?.ngaysinh,
//             confirmPassword: data?.password,
//         });
//     }, [data, form]);


//     const onFinish = async (values: any) => {
//         try {
//             const updatedCustomer = await updateCustomer({  ...values ,id}).unwrap();
//             navigate('/admin/customer');
//             notification.success({
//                 message: 'Cập nhật thành công',
//                 description: `The Customer ${updatedCustomer.name} has been updated.`,
//                 duration: 2,
//             });
//             refetch();
//         } catch (error) {
//             console.error('Error updating Customer:', error);
//             notification.error({
//                 message: 'Cập nhập thất bại',
//                 description: 'Đã xảy ra lỗi khi cập nhật Kích thước.',
//                 duration: 2,
//             });
//         }
//     };

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <Form
//                 form={form}
//                 labelCol={{ span: 8 }}
//                 wrapperCol={{ span: 16 }}
//                 style={{ maxWidth: 500, margin: '0 auto' }}
//                 onFinish={onFinish}
//             >     
//                 <Form.Item label="Tên" name="name" rules={[
//                     { required: true, message: 'Please input your Name!' },
//                     { min: 5, message: 'Name must be at least 5 characters.' },
//                 ]}>
//                     <Input />
//                 </Form.Item>

//                 <Form.Item<FieldType> label="Confirm Password" name="confirmPassword">
//                      <Input />
//                  </Form.Item>

//                  <Form.Item<FieldType> label="Họ và tên" name="fullname">
//                    <Input />
//                  </Form.Item>

//                  <Form.Item<FieldType> label="Ngày sinh" name="ngaysinh">
//                      <Input />
//                  </Form.Item>

//                 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                     <Button  htmlType="submit">
//                         Update Customer
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     );
// };

// export default AdminCustomerEdit;