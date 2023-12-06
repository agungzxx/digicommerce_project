"use client";
import React, { useState } from "react";
import { Template } from "../Templates";
import Link from "next/link";
import { API_URL } from "@/config/apiUrl";
import slugify from "slugify";

export const Join = () => {
  const [dataJoin, setDataJoin] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = async (event) => {
    const { value, name } = event.target;

    if (name === "username") {
      setDataJoin({
        ...dataJoin,
        [name]: slugify(value, { replacement: "", lower: true }),
      });
      return;
    }
    setDataJoin({
      ...dataJoin,
      [name]: value,
    });
  };

  const handleButton = async () => {
    const { name, username, email, password } = dataJoin;

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify({ name, username, email, password }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Template>
      <section className="flex flex-col justify-center space-y-4">
        <h1>Join</h1>
        <p>please fill with your details</p>
      </section>
      <section className="flex flex-col justify-center space-y-4">
        <input
          name="name"
          type="text"
          placeholder="john doe"
          onChange={handleChange}
          value={dataJoin.name}
        />
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={handleChange}
          value={dataJoin.username}
        />
        <input
          name="email"
          type="email"
          placeholder="email@mail.com"
          onChange={handleChange}
          value={dataJoin.email}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={dataJoin.password}
        />
        <button onClick={handleButton}>Join</button>
      </section>
      <p>
        Have an account?{" "}
        <Link href={"/login"}>
          <span className="link">Login</span>
        </Link>
      </p>
    </Template>
  );
};
