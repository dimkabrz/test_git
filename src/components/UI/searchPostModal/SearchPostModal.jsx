import React, { useState } from "react";
import axios from "axios";
import classes from "./SearchPostModal.modules.css";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";

const SearchPostModal = ({ setState }) => {
  const [search, setSearch] = useState("");

  const fetchSetter = async (searchText) => {
    const response = await axios.get(
      `http://localhost:3001/posts?q=${searchText}`
    );
    setState(response.data);
  };

  const getPosts = async (e) => {
    const searchText = e.target.value;
    setSearch(() => {
      fetchSetter(searchText);
      return searchText;
    });
  };

  return (
    <div className={classes.search_form}>
      <Input
        value={search}
        onChange={(e) => getPosts(e)}
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default SearchPostModal;
