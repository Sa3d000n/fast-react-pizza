import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
