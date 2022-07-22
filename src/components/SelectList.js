import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

export default function SelectList({ title, url, handleChange }) {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status} : ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }
  let id = `select-${title}`;
  let options = data.response[title];
  console.log(options);

  return (
    <>
      <label htmlFor={id}>{title}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">elije un {title}</option>
        {data &&
          options.map((el) => {
            <options value={el}> {el}</options>;
          })}
      </select>
    </>
  );
}
