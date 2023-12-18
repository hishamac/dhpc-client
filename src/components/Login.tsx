"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const HandleLogin = async (data: any) => {};

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className=" flex flex-col items-center justify-center p-7 rounded-3xl min-w-[400px] shadow-3xl z-50 bg-white">
        <div className="bg-secondary rounded-full h-40 w-40 overflow-hidden border-[6px] border-primary">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNJsJVEZFseWebFABB9dtBl3DVNCkEfJgKKbtGIqVmVOoy5etp23rj5TGrNQee9IRYu0Ldz8Q5cqHa_dhywL66dgRX5LiJUD94sEOz08iPVUlUYcgLRSw2ULMlF1gwULAg6iWeAsiAnsfsqcTp93abT7mDbs2W3e6w0biPI-NDZNPCqUMKox8pDOEU/w395-h400/photo_2022-07-28_23-52-43.jpg" alt="" />
        </div>
        <div className="mt-2 w-full">
          <p className="text-left ml-1 text-base">Username</p>
          <input
            type="text"
            placeholder="Username"
            className="border-2 border-primary rounded-xl p-2 w-full h-12"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-2 w-full">
          <p className="text-left ml-1 text-base">Password</p>
          <input
            type="text"
            placeholder="Password"
            className="border-2 border-primary rounded-xl p-2 w-full h-12"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-primary w-full h-12 mt-4 text-white text-xl font-semibold rounded-xl">Submit</button>
      </div>
    </div>
  );
}
