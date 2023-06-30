import Header from "../Layout/header/Header"
import OrderItems from "../Layout/orderItems/OrderItems"
import SideBar from "../Layout/sidebar/SideBar"

const Main3 = (props) => {
    return (
        <div>
            <Header />
            <SideBar />
            <OrderItems isStatus='complete' />
        </div>
    )
}

export default Main3