import { useState } from "react"

const AdvanceForm = () => {
   const [formData, setFormData] = useState({
                                         gender: '',
                                         country: 'India',
                                         agree: false
                                        })
                                         
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
    }

    const handleChange = (e) => {
      const {name,type, value, checked} = e.target;
      setFormData((prev) =>({
       ...prev,
       [name] : type === 'checkbox'? checked : value
      }))
  }                                    
  return (
    <form onSubmit={handleSubmit}>
        <h2>Form with Checkbox, Radio & Select</h2>

        <label>
            <input 
            type="radio"
            name="gender" 
            value='Male'
            checked= {formData.gender === "Male"} 
            onChange={handleChange}
            />
            Male
        </label>

        <label>
            <input 
            type="radio"
            name="gender" 
            value='Female' 
            checked= {formData.gender === "Female"} 
            onChange={handleChange}
            />
            Female
        </label>
        <br />

        <label>
            Country :
            <select name="country" value={formData.country} onChange={handleChange}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">Uk</option>
            </select>
        </label>
        <br />

        <label>
            <input type="checkbox" checked={formData.agree} onChange={handleChange} name="agree" />
            I agree to terms and condition
        </label>
        <br/>

        <button type="submit">Submit</button>
    </form>
  )
}

export default AdvanceForm
