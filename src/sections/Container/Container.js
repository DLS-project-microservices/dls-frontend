import './Container.css'

const Container = (props) => {
  return (
    <div className='dls-container container'>
    {props.children}
    </div>
  )
}

export default Container
