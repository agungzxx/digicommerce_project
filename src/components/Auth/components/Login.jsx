"use client";
import React, { useState } from "react";
import { Template } from "../Templates";
import Link from "next/link";
import { API_URL } from "@/config/apiUrl";

export const Login = () => {
  const [datalogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (event) => {
    const { value, name } = event.target;
    setDataLogin({ ...datalogin, [name]: value });
  };

  const handleButton = async () => {
    const { email, password } = datalogin;
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
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
        <h1>Login</h1>
        <p>please fill with your details</p>
      </section>
      <section className="flex flex-col justify-center space-y-4">
        <input
          name="email"
          type="email"
          placeholder="email@mail.com"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleButton}>login</button>
      </section>
      <p>
        Have no account?{" "}
        <Link href={"/join"}>
          <span className="link"> Join</span>
        </Link>
      </p>
    </Template>
  );
};
