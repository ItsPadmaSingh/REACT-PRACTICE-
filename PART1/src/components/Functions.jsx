// import React from 'react'

// const Functions = () => {
//     function getName(){
//         return "Padma";
//     }
//   return (
//     <div>
//       <h1>Hello {getName()}</h1>
//     </div>
//   )
// }

// export default Functions



const Functions = () => {
    const getName = (yourname) =>{
        return yourname;
    }

    function handleClick(){
        alert('Button Clicked')
    }

    const handleInput = (event) => {
    //  console.clear();
     console.log('Value : ', event.target.value)
    }

    const handleMouseOver = () => {
        console.log('Mouse is over the text!');
    }

    const handleDobleClick = () =>{
        console.log('Text Double Clicked')
    }
    const name = 'Padma';
    const name2 = 'Kitty';
  return (
    <div>
      <h1>Hello {getName(name)}</h1>
      <h1>Bye {getName(name2)}</h1>

      <p onMouseOver={handleMouseOver} onDoubleClick={handleDobleClick}>Lorem ipsum dolor sit.</p>

      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert('Hii Babe!')}>Say Hello</button>
      <br />
      <input type="text" onChange={handleInput} placeholder="type something here..."/>
    </div>
  )
}

export default Functions
