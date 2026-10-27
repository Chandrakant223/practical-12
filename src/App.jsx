import React from "react";
import{BrowserRouter ,Routes,Link,Outlet} from "react-router-domn";

function Order() {
  return (
    <div>
      <h2>order management</h2>
         <Link to="current">current order</Link>
         {""}
         <Link to="history">order history</Link>{""}
         <Link to="cancelled">cancelled order</Link>
         {""}
         <Outlet />
      </div>
  );
}

function App(){
  return(
    <BrowserRouter>
      <h1>E- commerce management</h1>
      <Routes>
        <Route path="/order" element={<Order />}>
          <Route path="current" element={<h3>current order</h3>} />
          <Route path="history" element={<h3>order history</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
