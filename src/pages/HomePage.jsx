
import Card from '../components/Card'
import { useSelector } from 'react-redux'


const HomePage = () => {
 const data=useSelector((state)=>state.cart.item)
  return (
    <Card data={data}/>
  )
}

export default HomePage