import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from "../../../api/category"
import { ICategory } from '../../../interfaces/category';
import { Button, Form, Input, Skeleton } from "antd";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
type FieldType = {
    name: string;
    desciption: string;
};
const CategoryEdit = () => {
    const { idCategory } = useParams<{ idCategory: string }>();
    const { data: categorytData, isLoading } = useGetCategoryByIdQuery(idCategory || "");
    const [updateCategory] = useUpdateCategoryMutation();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            name: categorytData?.data.name,
            desciption: categorytData?.data.desciption
        });
    }, [categorytData]);
    const onFinish = (values: ICategory) => {
        updateCategory({ ...values, _id: idCategory })
            .unwrap()
            .then(() => navigate("/admin/category"));
    };
    return (
        <div>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Sửa danh mục : {categorytData?.data.name}</h2>
            </header>
            {isLoading ? (
                <Skeleton />
            ) : (
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên danh mục"
                        name="name"
                        rules={[
                            { required: true, message: "Vui lòng nhập tên danh mục!" },
                            { min: 3, message: "Danh mục ít nhất 3 ký tự" },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả" name="desciption"
                        rules={[
                            { required: true, message: "Vui lòng nhập tên danh mục!" },
                            { min: 10, message: "Danh mục ít nhất 10 ký tự" },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit" className="mx-4">
                            {isLoading ? (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            ) : (
                                "Sửa"
                            )}
                        </Button>
                        <Button

                            className="ml-2 text-blue-500"
                            onClick={() => navigate("/admin/category")}
                        >
                            Quay lại
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    );
};

export default CategoryEdit;