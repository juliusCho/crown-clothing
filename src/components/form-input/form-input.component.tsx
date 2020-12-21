import React from 'react'
import './form-input.styles.scss'

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  name: string
  type: string
  value: string
  required: boolean
}

export default function FormInput({
  handleChange,
  label,
  name,
  type,
  value,
  required,
}: Props) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        name={name}
        type={type}
        value={value}
        required={required}
      />
      {label && (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  )
}
