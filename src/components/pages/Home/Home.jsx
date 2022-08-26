import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-center text-2xl py-20">Home page</h1>
      <Link className="p-3 bg-green-400" to="/login">Login page</Link>
      <br />
      <br />
      <br />
      <Link className="p-3 bg-green-400" to="/signup">Signup page</Link>
    </div>
  );
}
