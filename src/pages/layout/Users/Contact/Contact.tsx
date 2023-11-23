import { Button, Form, Input, message } from "antd";
import { useAddContactMutation } from "../../../../api/contact";
import { IContact } from "../../../../interfaces/contact";
import { useNavigate } from "react-router-dom";
import LoadingOutlined from "@ant-design/icons";

type FieldType = {
    firstName: string,
    email: string,
    phone: number,
    content: string,
};
const Contact = () => {
    const [addContact] = useAddContactMutation();
    const navigate = useNavigate();

    const onFinish = async (values: IContact) => {
        console.log("Form Values:", values);

        try {
            await addContact(values).unwrap();
            navigate("/admin/contact");
        } catch (error) {
            console.error(error);
        }
    };

    return (<>
    <div className="mt-10">
    <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            className="mt-30"

        >
            <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-10">
            <div className="flex justify-center items-center h-screen">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639811788194!2d105.74421217512949!3d21.03812778061352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1684317500211!5m2!1svi!2s"
                    ></iframe>
                </div>
            </div>

            <div className="container  mx-100 ">
                <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Liên hệ
                    </h2>

                    {/* Form.Item cho trường Tên */}
                    <Form.Item<FieldType>
                        label="Tên"
                        name="firstName"
                        rules={[
                            { required: true, message: "Vui lòng nhập tên !" },
                        ]}
                        hasFeedback
                        className="relative left-[29px]"
                    >
                        <Input className="relative top-[30px] left-[-43px] w-[250px] mb-4"/>
                    </Form.Item>

                    {/* Form.Item cho trường Email */}
                    <Form.Item<FieldType> label="Email" name="email"
                        rules={[
                            { required: true, message: "Vui lòng nhập email !" },
                            { type: "email", message: "email không đúng định dạng" }
                        ]}
                        hasFeedback
                        className="relative left-[34px]"
                    >
                        <Input className="relative top-[30px] left-[-55px] w-[250px] mb-4"/>
                    </Form.Item>

                    {/* Form.Item cho trường Số điện thoại*/}
                    <Form.Item<FieldType>
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            { required: true, message: "Vui lòng nhập số điện thoại !" },
                            { min: 10, message: "Sản phẩm ít nhất 10 ký tự" },

                        ]}
                        hasFeedback
                        className="relative left-[57px]"
                    >
                        <Input className="relative top-[30px] left-[-103px] w-[250px] mb-4"/>
                    </Form.Item>

                    {/* Form.Item cho trường Nội dung */}
                    <Form.Item
                        label="Nội dung"
                        name="content"
                        rules={[
                            { required: true, message: "Vui lòng nhập nội dung" },
                        ]}
                        hasFeedback
                        className="relative left-[46px]"
                    >
                        <Input.TextArea 
                            className="relative top-[30px] left-[-79px] w-[250px] mb-4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </Form.Item>

                    {/* Nút Gửi */}
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="text-white bg-indigo-500 border-0 pb-8 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2"
                    >
                        Gửi
                    </Button>
                </div>
            </div>
            </div>
            
        </Form>
    </div>
    </>
       
    );
};

export default Contact;
