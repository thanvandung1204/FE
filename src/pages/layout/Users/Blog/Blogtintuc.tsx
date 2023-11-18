import { Link, useParams } from "react-router-dom"
import Loading from '../../../../components/action/Loading/Loading'
import ImagePriview from '../../../../components/Image/ImagePriview'
import { useGetTintucQuery } from '@/api/tintuc'
import { useGetImagetintucByIdQuery } from "@/api/imagetintuc";
const Blogtintuc = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useGetImagetintucByIdQuery(id || "")
    console.log(data);

    return (<>
        {isLoading ? (
            <Loading />
        ) : error ? (
            "Error"
        ) : (
            <section>
                {data?.length ? (
                    data.map((imagetintuc, index) => (

                        <div key={index}className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    Thông Tin
                                </h2>
                                <p className="max-w-md mt-4 text-gray-500">
                                    Trang web của chúng tôi cung cấp một bộ sưu tập đa dạng và phong phú về quần áo thời trang cho cả nam và nữ. Bạn có thể dễ dàng tìm thấy những bộ trang phục từ những thương hiệu nổi tiếng đến những thiết kế độc quyền của chúng tôi.
                                </p>
                                <p className="text-xs lg:text-base md:text-xl  ">
                                                   <ImagePriview width={100} listImage={imagetintuc.image} />
                                                </p>
                            </header>
                        </div>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2}>No tintuc found.</td>
                    </tr>
                )}

            </section>
        )}
    </>



    )
}

export default Blogtintuc