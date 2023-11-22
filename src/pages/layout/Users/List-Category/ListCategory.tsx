import React from 'react'
import { useGetCategorysQuery } from '../../../../api/category';
import { ICategory } from '../../../../interfaces/category';
import { Link } from "react-router-dom";

const ListCategory = () => {
    const { data: categoryData } = useGetCategorysQuery();
    return (
        <div>
            <div className='h-20'></div>
            <div className='flex my-10 grid grid-rows-2 grid-flow-col gap-4 w-3/4 '>
                {
                    categoryData?.data?.map((category: ICategory) => (
                        <div key={category._id}>

                            <Link to={`/category/${category._id}`}>
                                <img alt="" src={category.image} className="w-[300px] h-[180px]" />
                                <div className='text-2xl'>{category.name}</div>
                            </Link>

                        </div>

                    ))}
            </div>
        </div>
    )
}

export default ListCategory