import { FaRegPaperPlane } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Icomment } from "@/interfaces/comment";
import Message from "../../action/Message/Message";
const Comment_Rely = () => {
  // const dispatch = useDispatch();
  // const { handleSubmit, register, formState: { errors }, watch } = useForm<Icomment>()
  // const onSubmit: SubmitHandler<Icomment> = async (inputAdd: Icomment) => {
  //   try {
  //     console.log(inputAdd);
  //     await dispatch(addComment(inputAdd) as never)
  //     Message("success", "Thêm comment thành công")
  //   } catch (error) {
  //     Message("error", "Thêm comment thất bại")
  //   }
  // }
  return (
    <>
      <div className="inp-comments ml-2 md:ml-10 mt-3 flex  " >
        <textarea className="inp-comment w-full text-sm rounded-lg min-h-[120px] max-h-72 px-2 pt-2 outline-none" name="" id="" placeholder="Xin mời để lại bình luận, đánh giá "></textarea>
        <button className="flex items-center gap-1 ml-2 px-3 bg-red-700 text-white font-medium max-h-10 min-h-0 rounded-lg">
          <i className="text-lg"><FaRegPaperPlane /></i>
          Gửi
        </button>
      </div>
    </>
  )
}

export default Comment_Rely