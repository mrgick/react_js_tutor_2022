import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const [nav, SetNav] = useState([
    { name: "Главная", path: "/" },
    { name: "Todo List", path: "/todo" },
    { name: "Пользователи", path: "/users" },
    { name: "Аккаунт", path: "/account" },
  ]);
  return (
    <>
      <Menu mode="horizontal">
        {nav.map(({ name, path }, index) => {
          return (
            <Menu.Item key={index}>
              <Link to={path}>{name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
      {props.children}
    </>
  );
};
