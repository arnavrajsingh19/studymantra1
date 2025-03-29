import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";

// Components & Pages
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPasssword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import Error from "./pages/Error";

function App() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<Contactus/>} />

        {/* Authentication Routes (OpenRoute) */}
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />

        {/* Private Dashboard Routes */}
        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="settings" element={<Settings />} />

          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="cart" element={<Cart />} />
              <Route path="enrolled-courses" element={<EnrolledCourses />} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="instructor" element={<Instructor />} />
              <Route path="add-course" element={<AddCourse />} />
              <Route path="my-courses" element={<MyCourses />} />
              <Route path="edit-course/:courseId" element={<EditCourse />} />
            </>
          )}
        </Route>

        {/* Private View Course Routes */}
        <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId" 
               element={<PrivateRoute><VideoDetails /></PrivateRoute>} />

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
