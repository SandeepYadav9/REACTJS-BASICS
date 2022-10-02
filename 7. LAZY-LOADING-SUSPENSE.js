// LAZY-LOADING-
- When an Application become more havve Than your webpage load sloly 
  in this case which page hase les havee make it load first than second than thirld ......


const Customer = React.lazy(() => import("./Customer.js"));
const Admin = React.lazy(() => import("./Admin.js"));
