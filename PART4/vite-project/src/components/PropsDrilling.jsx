function Parent(){
    const userName = 'John'
    return <Child name={userName} />
}

function Child({name}){
  return <GrandChild name={name} />
}

function GrandChild({name}){
    return <h3>My name is {name}</h3>
}

const PropsDrilling = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default PropsDrilling
