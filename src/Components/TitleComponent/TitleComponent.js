import "./TitleComponent.css";

function TitleComponent({titleContent}){
  return (<div className="title"><div className="title-container">
    <div className="title-text">
      {titleContent}
    </div>
  </div></div>)
}

export default TitleComponent;
