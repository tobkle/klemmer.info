import React, { useState } from "react"
import { gql, useQuery, useMutation } from "@apollo/client"
import { isLoggedInVar } from "lib/cache"

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`

export const LOGIN_USER = gql`
    mutation Login($email: String!) {
        login(email: $email) {
            id
            token
        }
    }
`

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {
        data: { isLoggedIn },
    } = useQuery(IS_LOGGED_IN)

    const [login, { loading, error }] = useMutation(LOGIN_USER, {
        onCompleted({ login }) {
            if (login && process.browser) {
                localStorage.setItem("userId", login.id)
                localStorage.setItem("token", login.token)
                isLoggedInVar(true)
            }
        },
    })

    if (loading) return <p>Loading... </p>
    if (error) return <p>An error occurred</p>

    const onSubmit = (e) => {
        e.preventDefault()
        login({
            variables: { email },
        })
    }

    const onLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("userId")
        localStorage.removeItem("token")
        localStorage.removeItem("apollo-cache-persist")
        console.log("isLoggedInVar", isLoggedInVar)
        isLoggedInVar(false)
    }

    if (isLoggedIn)
        return (
            <>
                You are logged in
                <form onSubmit={onLogout}>
                    <button
                        className="bg-indigo-600 text-blue-50 m-4 mx-10 px-6 py-1 rounded-lg shadow-lg cursor-pointer hover:bg-indigo-400"
                        type="submit"
                    >
                        Logout
                    </button>
                </form>
            </>
        )

    return (
        <div className="mx-auto max-w-xl bg-gradient-to-b from-indigo-600 to-fuchsia-900 p-8 tracking-widest mt-4 rounded-3xl shadow-2xl">
            <h1 className="ml-10 mt-8 text-2xl text-gray-50 font-bold uppercase ">
                Login
            </h1>

            <form onSubmit={onSubmit}>
                <label className="block text-gray-50 m-4 px-6 " htmlFor="email">
                    Email:
                    <input
                        className="block bg-gray-50 text-gray-600 px-6 mt-4 py-2 border-2 border-gray-200 rounded-lg"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                </label>

                <label
                    className="block text-gray-50 m-4 px-6 "
                    htmlFor="password"
                >
                    Password:
                    <input
                        className="block bg-gray-50 text-gray-600 px-6 mt-4 py-2 border-2 border-gray-200 rounded-lg"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                </label>

                <button
                    className="bg-indigo-600 text-blue-50 m-4 mx-10 px-6 py-1 rounded-lg shadow-lg cursor-pointer hover:bg-indigo-400"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
