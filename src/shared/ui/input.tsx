import type { FC } from "react"

export interface InputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

export const Input:FC<InputProps> = ({value, onChange, placeholder}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}