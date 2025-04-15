import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <Logo className="h-20 w-auto" /> {/* Adjusted logo size */}
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <ul className="flex space-x-8 mx-auto">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-5 py-2 rounded-lg text-gray-300 transition duration-300 hover:text-white hover:bg-blue-600"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
          </ul>

          {/* Right: Logout Button (Only if Logged In) */}
          <div className="ml-auto">
            {authStatus && <LogoutBtn />}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
