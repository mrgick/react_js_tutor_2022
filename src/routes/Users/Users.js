import { Col, List, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useFetchdata } from "../../hooks/useFetchdata";
import { useNavigate } from "react-router-dom";

export const Users = (props) => {
  const navigate = useNavigate();
  const parsedUsersList = useFetchdata("users");
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    parsedUsersList.then((res) => setUsersList(res));
  }, []);

  return (
    <>
      <Col span={8} style={{ margin: "0 auto" }}>
        <h3>Список пользователей</h3>
        <List
          dataSource={usersList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={
                  <a href={"#/todo?user=" + item.username}>
                    {item.username + "'s todo list"}
                  </a>
                }
                description={item.name}
              />
            </List.Item>
          )}
        />
      </Col>
    </>
  );
};
