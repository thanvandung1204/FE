import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useGetCategorysQuery } from '../../../../api/category';
import { ICategory } from '../../../../interfaces/category';
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CustomTabs() {
  const { data: categoryData } = useGetCategorysQuery();
  // console.log(categoryData)

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Tabs value={"Women"}>
      <TabsHeader className="w-3/5 mx-auto">
        {categoryData?.data?.map((category: ICategory) => (
          <Tab key={category._id}>
            <Link to={`/category/${category._id}`}>
              <img alt="" src={category.image} className="w-[400px] h-[200px]" />
            </Link>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-5">
          <SlickSlider {...slickSettings}>
            {categoryData?.data?.map((category: ICategory) => (
              <div key={category._id}>
                <img alt="" src={category.image} className="w-full h-auto" />
              </div>
            ))}
          </SlickSlider>
        </TabPanel>
      </TabsBody>
    </Tabs>
  )
}
