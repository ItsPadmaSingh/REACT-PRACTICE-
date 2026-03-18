import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'

const App = () => {

  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry'},
  { value: 'vanilla', label: 'Vanilla' },
  ];


  return (
    <div style={{width : '300px'}}>
      <CreatableSelect 
      options={options}  
      onChange={(selected) =>console.log(selected) } 
      isMulti
      placeholder='Select your fruit'
      isClearable
      />
      <br />

      <AsyncSelect loadOptions={(input) => 
        fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
        .then((res) => res.json())
        .then((data) => data.map((user) => ({
            value: user.id, 
            label: user.name 
        })))
      } />
    </div>
  )
}
export default App


// import Select from 'react-select'
// import { useState } from 'react';

// const App = () => {

//   const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' ,isDisabled: true},
//   { value: 'vanilla', label: 'Vanilla' },
//   ];

//   const customStyle = {
//     control: (base) => ({
//       ...base,
//       borderColor : 'red',
//       borderWidth : '4px',
//       padding : '5px'
//     }),
//     option: (base) => ({
//       ...base,
//       color: 'black',
//       backgroundColor : 'pink'
//     }),
//     singleValue : (base) => ({
//       ...base,
//       color: 'red',
//       fontWeight :'bold'
//     })
//   }

//   return (
//     <div style={{width : '300px'}}>
//       <Select  
//       options={options}  
//       onChange={(selected) =>console.log(selected) } 
//       placeholder='Select your fruit'
//       isClearable
//       isDisabled={false}
//       defaultValue={options[1]}
//       isSearchable={false}
//       styles={customStyle}
//       />
//     </div>
//   )
// }
// export default App


// import Select from 'react-select'
// import { useState } from 'react';

// const App = () => {

//   const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//   ];

//   return (
//     <div style={{width : '300px'}}>
//       <Select  
//       options={options}  
//       onChange={(selected) =>console.log(selected) } 
//       isMulti
//       />
//     </div>
//   )
// }
// export default App

// import Select from 'react-select'
// import { useState } from 'react';

// const App = () => {

//   const [fruit,setFruit] = useState(null)

//   const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//   ];

//   return (
//     <div style={{width : '300px'}}>
//       <Select  options={options}  value={fruit} onChange={setFruit}/>
//       <p>{fruit?.label}</p>
//     </div>
//   )
// }

// export default App
