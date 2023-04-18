import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
        <h1>Ruta no encontrada</h1>
        <Link to="/">Ir al inicio</Link>
    </div>
  )
}
