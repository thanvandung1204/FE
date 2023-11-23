import  CustomTabs  from "../../Users/Tabs/Taps";
import ListProductNew  from "../../Users/ListProducts/ListProductNew"
import "./List.css"
const ListProducts = () => {
  return (
    <>
      <h1 className="text-2xl text-[#222] text-center font-bold tracking-wider my-5">DANH MỤC SẢN PHẨM</h1>
      <CustomTabs />
      <h1 className="text-2xl text-[#222] text-center font-bold tracking-wider my-5">DANH SÁCH SẢN PHẨM</h1>
      <ListProductNew />
    </>
  );
};

export default ListProducts;
