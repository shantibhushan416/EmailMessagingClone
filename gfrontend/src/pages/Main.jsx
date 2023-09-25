import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SuspenseLoader from "../components/common/SuspenseLoader";

export default function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <Header clicked={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet context={{openDrawer}} />
      </Suspense>
    </div>
  );
}
