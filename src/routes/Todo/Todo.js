import { Checkbox, List, Col, Input, Pagination, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchdata } from "../../hooks/useFetchdata";

export const Todo = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("userId") ? searchParams.get("userId") : "all";
  const initialTodoList = useFetchdata("todo");
  const [todoList, setTodoList] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const endList = curentPage * perPage;
  const beginList = endList - perPage;

  useEffect(() => {
    setTodoList(
      initialTodoList.filter((value) => {
        if (userId === "all") {
          return true;
        }
        else if (value.userId === parseInt(userId)) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [initialTodoList, userId]);

  const handelerTodoChecked = (todoID) => {
    let todo = JSON.parse(JSON.stringify(todoList));

    todo = todo.filter((item) => {
      if (item.id === todoID) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoList(todo);
  };

  const handlerDeleteTodo = (todoID) => {
    let todo = JSON.parse(JSON.stringify(todoList));

    todo = todo.filter((item) => {
      if (item.id !== todoID) return true;
      return false;
    });
    setTodoList(todo);
  };

  const handlerAddToTodo = (e) => {
    let defVariable = [
      { id: Math.random(), title: e.target.value, completed: false },
    ];
    setTodoList([...defVariable, ...todoList]);
  };

  const handlerChangePagination = (page, pageSize) => {
    setCurentPage(page);
    setPerPage(pageSize);
  };

  return (
    <>
      <Col span={8} style={{ margin: "0 auto", minWidth: "18em" }}>
        <h3>{"userId: "+userId}</h3>
        <List>
          <Input
            placeholder="Добавить todo в список"
            onPressEnter={(e) => handlerAddToTodo(e)}
          />
          {todoList.slice(beginList, endList).map((item, index) => {
            return (
              <List.Item
                key={index}
                style={{
                  listStyle: "decimal",
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                <Space>
                  <Checkbox
                    onChange={() => handelerTodoChecked(item.id)}
                    checked={item.completed ? true : false}
                  />
                  <div style={{ minWidth: "6em" }}>{item.title}</div>
                </Space>
                <DeleteOutlined onClick={() => handlerDeleteTodo(item.id)} />
              </List.Item>
            );
          })}
        </List>
        <Pagination
          defaultCurrent={curentPage}
          defaultPageSize={perPage}
          total={todoList.length}
          onChange={(page, pageSize) => handlerChangePagination(page, pageSize)}
        />
      </Col>
    </>
  );
};
