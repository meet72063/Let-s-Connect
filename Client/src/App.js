import { Route, Routes } from "react-router-dom";
import ShareLayout from "./Pages/HomeShareLayout/ShareLayout";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import UserWelcome from "./Pages/welcome/UserWelcome";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardShareLayout from "./Pages/Dashboard/DashboardShareLayout";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import UserAllPosts from "./Pages/UserAllPosts/UserAllPosts/UserAllPosts";
import EditPost from "./Pages/EditPost/EditPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login">
            <Route index element={<Login />} />
            <Route path="userwelcome">
              <Route index element={<UserWelcome />} />
            </Route>
          </Route>
        </Route>
        <Route path="Dashboard" element={<DashboardShareLayout/>} >
          <Route index element={<Dashboard />}/>
          <Route path="profile" element={<Profile/>} />
          <Route path="editProfile" element={<EditProfile/>} />
          <Route path="allPosts" element={<UserAllPosts/>}/>
        </Route>
        <Route path="edit">
        <Route  path=":id" element={<EditPost/>} />
        </Route>

        
      </Routes>
    </>
  );
}

export default App;
