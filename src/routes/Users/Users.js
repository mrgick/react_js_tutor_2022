import { Col, List } from "antd";
import React, { useEffect, useState } from "react";
import { useFetchdata } from "../../hooks/useFetchdata";

export const Users = (props) => {
  const initialUsersList = useFetchdata("users");
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setUsersList(initialUsersList) 
  }, [initialUsersList]);

  return (
    <>
      <Col span={8} style={{ margin: "0 auto", minWidth: "10em" }}>
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
