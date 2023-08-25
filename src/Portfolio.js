import { Events } from './component/Events'

const Portfolio = (props) =>{
    return(
      <>
        <Events dbpath={props.dbpath}></Events>       
      </>
    )
}
export default Portfolio;