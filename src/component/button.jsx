import React from "react"

function Button({ children, variant = "ghost", onClick }) {
  const base = "px-4 py-2 rounded-md font-medium"
  const styles = variant === "primary" ? "bg-teal-400 text-black" : "bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800"
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  )
}

export default Button
