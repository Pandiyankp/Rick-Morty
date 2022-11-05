import React from 'react'

const InputGroup = ({total ,name,setId}) => {
  return (
    <div class="input-group mb-3">
        
    
  <select class="form-select" id={name} onChange={e=>setId(e.target.value)}>
    <option selected value='1'>Choose...</option>
    {[...Array(total).keys()].map((item)=>{
        return    <option  value={item+1}>{name}-{ item + 1 }</option>

    })}
  </select>
</div>

  )
}

export default InputGroup