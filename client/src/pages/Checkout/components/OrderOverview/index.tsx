import ItemList from "./ItemList";
import OrderSummary from "./OrderSummary";
import CouponInput from "./CouponInput";


function OrderOverview() {
    return (
        <>
            <ItemList />
            <CouponInput />
            <OrderSummary />
        </>
    );
}

export default OrderOverview