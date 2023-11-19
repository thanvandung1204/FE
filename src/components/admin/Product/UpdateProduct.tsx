import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, notification, Select, Row,Col,
Space, InputNumber } from 'antd';
import { useGetSizesQuery } from '@/api/sizes';
import { useGetProductByIdQuery, useUpdateProductMutation } from '@/api/product';
import { useGetCategorysQuery } from '@/api/category';
import { ICategory } from '@/interfaces/category';
import { ISize } from '@/interfaces/size';
import { IColor } from '@/interfaces/color';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ISale } from '@/types';
import { useGetColorsQuery } from '@/api/color';
import UpLoand from '../../Image/UploadImageTintuc';
import { useGetAllSalesQuery } from '@/api/sale/sale.api';

const { Option } = Select;
const UpdateSize = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [UpdateProduct] = useUpdateProductMutation();
    const { data, isLoading,refetch } = useGetProductByIdQuery(String(id));
    const { data: size } = useGetSizesQuery();
    const {data: sale} = useGetAllSalesQuery();
    const {data: color} = useGetColorsQuery();
    const {data : category} = useGetCategorysQuery()
    console.log(data);
    const [form] = Form.useForm();
    const [ setEditedImg] = useState<any>([]);
const [img, setImg] = useState<any>([]);
const resetEditedImg = () => {
  setEditedImg([]);
};
const handleImage = (url: string) => {
  setImg([...img, url]);
};
const handleImageRemove = (url: string) => {
    setImg((prevImg: any) => prevImg.filter((imageUrl: string) => imageUrl !== url));
  };
    useEffect(() => {
        form.setFieldsValue({
            _id: data?._id,
            name: data?.name,
            price: data?.price,
            image: data?.image,
            sale: data?.sale,
            colorSizes: 
                data?.colorSizes.map((colorSize: any) => ({
                    color: colorSize.color,
                    size: colorSize.sizes.map((size: any) => size.size)
                })),
            category: data?.categoryId,
            quanlity: data?.quanlity,
            description: data?.description,
            trang_thai: data?.trang_thai,
        });
        return () => {
            resetEditedImg();
        };

     
    }, [data, form]);
    const { TextArea } = Input;
    const onFinish = async (values: any) => {
        try {
            const UpdateProducts = await UpdateProduct({  ...values ,_id:id}).unwrap();
            if (Array.isArray(values.categoryId)) {
                values.categoryId = values.categoryId.join(',');
            }
            if (Array.isArray(values.sizeItem)) {
                values.sizeItem = values.sizeItem.join(',');

            }
            
            refetch();
            
           

            navigate('/admin/product');
            notification.success({
                message: 'Cập nhật thành công',
                description: `The Size ${UpdateProducts.name} has been updated.`,
                duration: 2,
            });
            refetch();
        } catch (error) {
            console.error('Error updating Size:', error);
            notification.error({
                message: 'Cập nhập thất bại',
                description: 'Đã xảy ra lỗi khi cập nhật Kích thước.',
                duration: 2,
            });
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
             <div>
             <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Row gutter={20}>
                <Col span={12}>
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Name Product!' }, { min: 5, message: 'Product Name must be at least 5 characters.' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your Price Product!' }, { validator: (_, value) => (!value || !isNaN(Number(value))) ? Promise.resolve() : Promise.reject('Price must be a number') }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Trạng thái" name="trang_thai">
                    <Select>
                        <Select.Option value="active">active</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="category"
                    name="categoryId"
                >
                    <Select placeholder="Select a size">
                        {category?.data?.map((categoryId: ICategory) => (
                            <Option key={categoryId._id} value={categoryId._id}>
                                {categoryId.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="sale"
                    name="sale"
                    rules={[{ required: true, message: 'Please select a sale!' }]}
                >
                    <Select placeholder="Select a sale">
                        {sale?.data?.map((sale: ISale) => (
                            <Option key={sale._id} value={sale._id}>
                                {sale.sale}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.List name="colorSizes">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'color']}
                                        rules={[{ required: true, message: 'Missing color' }]}
                                    >
                                        <Select placeholder="Color" style={{width: 120}}>
                                            {color?.color?.map((color: IColor) => (
                                                <Option key={color._id} value={color._id}>
                                                    {color.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'size']}
                                        rules={[{ required: true, message: 'Missing size' }]}
                                    >
                                        <Select mode='multiple' placeholder="Size" style={{width: 80}}>
                                            {size?.map((size: ISize) => (
                                                <Option key={size._id} value={size._id}>
                                                    {size.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add ColorSize
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item label="Quanlity" name="quantity">
                    <InputNumber />
                </Form.Item>
               
                </Col>
                <Col span={12}>
                <Form.Item
                    label="Image"
                    name="image"
                    // rules={[{ required: true, message: 'Please input your Image Product!' }]}
                >
                  <UpLoand onImageUpLoad={handleImage} onImageRemove={handleImageRemove} />
                </Form.Item>
                
                    <Form.Item label="Description" name="description">
                        <TextArea rows={4} />
                    </Form.Item>
                    
                </Col>
                </Row>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
        </div>
    );
};

export default UpdateSize;
