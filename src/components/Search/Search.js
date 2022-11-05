import React from 'react'
import styles from '../Search/Search.module.scss'

const Search = ({setSearch,setPageNumber}) => {
  return (
<>
<form className='d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 gap-4'>
  <input type="text" placeholder=" Search for Charaters" className={`${styles.input}  `}
  onChange={(e)=>{
    setPageNumber(1)
    setSearch(e.target.value)
  }}
  />
    <button  onClick={(e)=>{
      e.preventDefault();
    }} className={`btn  btn-primary fs-5`}>Search</button>
</form>

</>  )
}

export default Search