import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ category, setCategory }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Nav>
      <Left>
        <Logo to="/">🛒 Shop</Logo>
        {user && <NavItem to="/orders">Orders</NavItem>}
        {user && <NavItem to="/cart">Cart</NavItem>}

        <CategorySelect
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Fashion</option>
        </CategorySelect>
      </Left>

      <Right>
        {user ? (
          <>
            <UserInfo>{user.username || user.email}</UserInfo>
            <LogoutBtn onClick={logout}>Logout</LogoutBtn>
          </>
        ) : (
          <>
            <NavItem to="/login">Login</NavItem>
            <NavItem to="/register">Register</NavItem>
          </>
        )}
      </Right>
    </Nav>
  );
}

/* ---------- Styles ---------- */

const Nav = styled.nav`
  height: 64px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
    align-items: stretch;
    gap: 0.8rem;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.1rem;
  font-weight: 800;
  color: #23B1CE;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavItem = styled(NavLink)`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  color: #374151;
  transition: all 0.2s ease;

  &.active {
    background: linear-gradient(135deg, #0ea5a4, #38bdf8);
    color: white;
  }

  &:hover:not(.active) {
    background: #f3f4f6;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`;

const CategorySelect = styled.select`
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserInfo = styled.span`
  font-size: 0.9rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(135deg, #0ea5a4, #38bdf8);
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoutBtn = styled.button`
  background: #ef4444;
  font-size: 0.9rem;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`;

export default Navbar;