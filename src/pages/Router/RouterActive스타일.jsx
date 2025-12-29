import { NavLink, Outlet } from "react-router-dom";
const activeLink = ({ isActive }) => ({
  color: isActive ? "red" : "#fff",
  fontWeight: isActive ? "600" : "400",
});
function RouterActive스타일() {
  return (
    <>
      <h2>Active스타일</h2>
      <nav>
        <NavLink style={activeLink} to="test1">
          Router테스트1
        </NavLink>
        <NavLink style={activeLink} to="test2">
          Router테스트2
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default RouterActive스타일;
