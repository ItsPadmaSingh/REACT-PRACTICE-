import '../App.css';
import styles from './Test.module.css'

const Test = () => {
  const name = "React" 
//   Inline Css in React  
  const headingStyle = {
    color : 'black',
    textAlign : 'center',
    backgroundColor: 'aqua',
    // fontSize: '50px' 
    fontSize: 50
  }

  return (
    <div>
      <h2>Learning {name}</h2>
      <h3 style={headingStyle}>Hello World!</h3>
      {/* Inline css */}
      <h3 style={{color:'red', textAlign: 'center'}}>Kya hal chal</h3>
      <h2 className='test'> Using External Css</h2>
      <h3 className={styles.test}>Kuch bhi</h3>
    </div>
  )
}

export default Test
