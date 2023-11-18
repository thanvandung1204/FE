import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
// import { RootState } from "../../../../store/store";
// import { useEffect } from "react";
// import Loading from "../ccction/Loading/Loading";

export default function CustomTabs() {
  // const dispatch = useDispatch();
  // const dataCategorys = useSelector((state: RootState) => state.categorys);
  // const { categorys, isLoading, error, category } = dataCategorys;
  // useEffect(() => {
  //   dispatch(getCategorys() as never);
  // }, [dispatch]);
  // useEffect(() => {

  //   if (categorys && categorys.length > 0) {
  //     const firstCategoryId = categorys[0]._id;
  //     dispatch(getOneCategory(firstCategoryId!) as never);
  //   }
  // }, [categorys, dispatch]);
  // const handleTabChange = (id: string) => {
  //   dispatch(getOneCategory(id) as never);
  // };

  return (
    <Tabs value={"Women"}>
      <TabsHeader className="w-3/5 mx-auto">
        <Tab>
          Cate Name
        </Tab>
        <Tab>
          Cate Name
        </Tab>
        <Tab>
          Cate Name
        </Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 px-4 mt-5">
        </TabPanel>
      </TabsBody>

    </Tabs>
  )
}
