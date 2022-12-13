import Login from "../components/Login";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const RouterConfig = [
  {
    path: "/login",
    element: Login,
    auth: false
  },
  {
    path: "/404",
    element: NotFound,
    auth: false
  },
  {
    path: "/home",
    element: Home,
    auth: true
  },
];

export default RouterConfig;