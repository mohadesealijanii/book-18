"use client"

import { sans } from "@/utils/fonts"
import Image from "next/image"
import React, { useState } from "react"
import logo from "../../../public/pics/logo.png"
import study from "../../../public/pics/study.png"
import Link from "next/link"

function SignupPage() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className={sans.className}>
      <div className="flex min-h-screen justify-center items-center md:mt-10 lg:mt-10">
        <div className="md:flex sm:flex lg:w-auto md:w-auto w-full rounded-3xl shadow-lg custom-size:bg-yellow-500 bg-white ">
          <Image
            src={study}
            alt="study"
            height={450}
            className="rounded-l-3xl hidden md:block sm:block lg:block"
          />
          <div className="p-3 md:w-96 mx-auto">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center ">
                <Image src={logo} alt="logo" className="w-16 h-auto" />
              </div>
              <h3 className="font-bold mt-10 mb-5 text-center">sign up</h3>
              <div className="flex flex-col">
                <input
                  placeholder="phone or email"
                  name=""
                  value={email}
                  className="text-xs w-full text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-xl outline-ocean mb-2"
                />
                <input
                  placeholder="password"
                  name=""
                  value={password}
                  className="text-xs w-full text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-xl outline-ocean mb-2"
                />
                <input
                  placeholder="confirm password"
                  name=""
                  value={password}
                  className="text-xs w-full text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-xl outline-ocean"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
                <div className="flex items-center ml-1">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 accent-sea border-gray-300 rounded focus:outline-none"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-1 block text-sm text-gray-800 pr-1"
                  >
                    remember me
                  </label>
                </div>
              </div>

              <button className="bg-ocean rounded-xl py-2 text-white mt-12 mb-3 text-sm">
                sing up
              </button>
              <div className="flex">
                <p className="text-sm">Do you have an account?</p>
                <Link
                  href={"/signin"}
                  className="text-ocean underline text-sm pl-1"
                >
                  sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
