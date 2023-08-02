function Youtube(props){
    return(
    <div id={props.youdomid} className="position-relative youtubebox w-100">  
        <iframe 
        width="100%"
            src={`https://www.youtube.com/embed/${props.youid}?start=${props.start}`} 
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            style={{borderRadius : `15px`}}>
        </iframe>       
    </div>  
    )
}

export default Youtube;