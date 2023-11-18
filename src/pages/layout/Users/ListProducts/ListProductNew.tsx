import Item from "@/components/item/item";

const ListProductNew = () => {
    return (
        <div className="list-new-products hot-sale-scroll p-2 overflow-x-auto  ">
        <div className="content-list-new-products w-max flex gap-5  ">
            <div className="content-list-new-products   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 "> 
                <div className="w-full pb-10"> <Item /> </div>
                <div className="w-full pb-10"> <Item /> </div>
                <div className="w-full pb-10"> <Item /> </div>
                <div className="w-full pb-10"> <Item /> </div>
                <div className="w-full pb-10"> <Item /> </div>
                <div className="w-full pb-10"> <Item /> </div>
                <div className="w-full pb-10"> <Item /> </div>
            </div>
        </div>
    </div>
    );
};

export default ListProductNew;
