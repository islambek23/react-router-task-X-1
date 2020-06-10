import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {
  const [newCategory, setNewCategory] = useState('')

  return (
    <div>
      {props.categoryList.map((el) => (
        <div>
          <Link to={`/${el}`}>{el}</Link>
        </div>
      ))}
      <input type="text" className="bg-gray-300" onChange={(e) => setNewCategory(e.target.value)} />
      <button type="button" onClick={() => props.addCategory(newCategory)}>
        Go
      </button>
    </div>
  )
}

export default Category
