import { FaRegPaperPlane } from "react-icons/fa"
import { SubmitHandler } from 'react-hook-form';
import { Form, Button, Input } from "antd";
import { Icomment } from "@/interfaces/comment";
import { useParams } from "react-router-dom";
import { useAddCommentMutation, useGetCommentQuery } from "../../../api/comment"

type commentType = {
  content: String;
};
const Comment_Rely = () => {
  const { TextArea } = Input;
  const { id } = useParams<{ id: string }>();
  const { data: commentData, refetch } = useGetCommentQuery();
  const userString = localStorage.getItem('user');
  const userObject = JSON.parse(userString);
  const userId = userObject?._id;
  const fullname = userObject?.fullname;
  console.log('UserId from localStorage:', userId);
  console.log('UserId from localStorage:', fullname);
  const [addCustomer,  { isLoading: isAddingComment }] = useAddCommentMutation();
  const [form] = Form.useForm();
  const onFinish: SubmitHandler<Icomment> = (values) => {
    if (userId) {
      values.productId = id;
      values.userId = userId;
      values.fullname = fullname;
      addCustomer(values)
        .unwrap()
        .then((data) => {
          console.log('Bình luận được thêm thành công:', data);
          refetch();
          form.resetFields(['content']);
        })
        .catch((error) => {
          console.error('Lỗi khi thêm bình luận:', error);
        });
    } else {
      console.error('Không tìm thấy User Id.');
    }
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        onFinish={onFinish}
        autoComplete="off"
        className="flex items-start"
      >
        <Form.Item
          label="Thông Tin bình luận "
          name="content"
          rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
          className="flex-grow"
        >
          <Input.TextArea
            className="inp-comment text-sm rounded-lg min-h-[420px] max-h-72"
            placeholder="Xin mời để lại bình luận, đánh giá"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="ml-auto">
          <Button type="primary" danger htmlType="submit" className="flex items-center gap-1 px-3 rounded-lg">
            <i className="text-lg"><FaRegPaperPlane /></i>
            Gửi
          </Button>
        </Form.Item>
      </Form>
      {commentData?.length ? (
        commentData.map((comment, index) => (
          (comment.productId === id) && (
            <div key={index} className="user-image mt-5">
            <div className="comment-text-user relative p-3  rounded-lg min-h-[70px] mt-2 ml-8">
            <span className="font-semibold text-base pb-5">{comment.fullname}</span>
                <p className="text-sm text-gray-800">{comment.content}</p>
            </div>
        </div> 
          )
        ))
      ) : (
        <div>
          <td colSpan={2}>No colors found.</td>
        </div>
      )}
    </>
  )
}

export default Comment_Rely