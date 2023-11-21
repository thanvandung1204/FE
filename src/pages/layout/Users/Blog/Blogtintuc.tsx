import { Link, useParams } from "react-router-dom"
import Loading from '../../../../components/action/Loading/Loading'
import ImagePriview from '../../../../components/Image/ImagePriview'
import { useGetTintucByIdQuery } from '@/api/tintuc'
const Blogtintuc = () => {
    const { id } = useParams<{ id: string }>();
    const { data: Tintuc, isLoading, error } = useGetTintucByIdQuery(id || "")
    console.log(Tintuc);

    return (<>
        {isLoading ? (
            <Loading />
        ) : error ? (
            "Error"
        ) : (
            <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
              {Tintuc?.length ? (
                Tintuc.map((tintuc, index) => (
                  <header key={index}>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      {tintuc.tieude}
                    </h2>
                    <p className="max-w-md mt-4 text-gray-500">
                      {tintuc.noidung}
                    </p>
                    <p className="text-xs lg:text-base md:text-xl">
                      <ImagePriview width={100} listImage={tintuc.image} />
                    </p>
                  </header>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No tintuc found.</td>
                </tr>
              )}
            </div>
          </section>
          
        )}
    </>



    )
}

export default Blogtintuc