'use client'
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Products from '@/components/dashboard/Products'
import CategoriesManager from "@/components/dashboard/Caregories";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [route, setRoute] = useState('products')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    document.querySelector('nav').style.display = 'none'
    document.querySelector('footer').style.display = 'none'

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Login failed");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-6 border-[1px] border-black rounded-3xl">
          <h2 className="text-xl mb-4 text-black text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded text-black placeholder:text-black outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input
              type="password"
              placeholder="Password"
              className="border px-4 py-2 rounded text-black outline-none placeholder:text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded">
              Login
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center w-full justify-between border-2 px-[20px] py-[5px] ">
        <h1 className="text-2xl text-black">Welcome, {user.email}</h1>
        <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded translate-y-[-7px]">
          Logout
        </button>
      </div>

      <div className="tabs flex gap-2 p-2">
        <button onClick={() => setRoute('products')} className="bg-red-500 text-white p-2 rounded-md" >Məhsullar</button>
        <button onClick={() => setRoute('categories')} className="bg-red-500 text-white p-2 rounded-md" >Kateqoriya</button>
      </div>

      <div className="p-2">
        <DashScreen route={route} />
      </div>
    </div>
  );
}


const DashScreen = ({route}) => {
  switch (route) {
    case 'products':
      return <Products />
    case 'categories':
      return <CategoriesManager/>
  }
}