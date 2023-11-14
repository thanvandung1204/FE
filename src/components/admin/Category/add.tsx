import { useAddCategoryMutation } from "../../../api/category"
import { ICategory } from '../../../interfaces/category';
import { Form, Button, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import LoadingOutlined from "@ant-design/icons"

type FieldType = {
    name: string;
    desciption: string;
};
const CategoryAdd = () => {
    const [addCategory, { isLoading }] = useAddCategoryMutation();
    const navigate = useNavigate();
    const onFinish = async (values: ICategory) => {
        console.log("Form Values:", values);

        await addCategory(values)
            .unwrap()
            .then(() => navigate("/admin/category"))
            .catch((error) => {
                console.error("Lỗi thêm danh mục:", error);

            });
    };

    return (
        <div>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm danh mục</h2>
            </header>
            <Form
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
                        { required: true, message: "Vui lòng nhập tên danh mục !" },
                        { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Mô tả" name="desciption"
                    rules={[
                        { required: true, message: "Vui lòng nhập mô tả !" },
                        { min: 10, message: "Sản phẩm ít nhất 10 ký tự" },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item<FieldType> label="Trạng thái" name="status">
                    <Select
                        defaultValue="Trạng thái"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: 'active', label: 'Active' },
                            { value: 'deactive', label: 'Deactive' },
                        ]}
                    />
                </Form.Item> */}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isLoading ? (
                            <LoadingOutlined className="animate-spin" />
                        ) : (
                            "Thêm"
                        )}
                    </Button>
                    <Button
                        type="primary"
                        danger
                        className="ml-2"
                        onClick={() => navigate("/admin/category")}
                    >
                        Quay lại
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CategoryAdd;