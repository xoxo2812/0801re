import { Events } from './component/Events'
import { Youtube } from './component/Youtube'

const Portfolio = (props) =>{
    return(
      <>
        <Events dbpath={props.dbpath}></Events>       
      </>
    )
}
export default Portfolio;