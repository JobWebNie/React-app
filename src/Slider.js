import React,{ Component } from  'react';
import './Slider.css'

class Section extends Component{
    render(){
        const {title,activePath,items} = this.props.sectionItem;
        return(
            
            <div className="section">
                <button className="sectionTitle" >
                    <div className="titleText">
                        {title}
                    </div>
                </button>
                <ul className="sectionBody">
                    {items.map((item,index)=>{
                       return <Items key={index} id={item.id} title={item.title} activePath={activePath} />
                    })}
                    
                </ul>
            </div>
        )
    }
}

class Items extends Component{
    render(){
        const {id,title,activePath} = this.props;
        const isActive = (activePath===id) ? true : false;
        return(
            isActive?
            <li className="sectionItem">
                <a className="itemLink" href={id} style={{fontWeight: 700}}>
                    {title}
                    <span  className="itemText"></span>
                </a>
            </li>
            :
            <li className="sectionItem">
                <a className="itemLink" href={id}>
                    {title}
                </a>
            </li>
        )
    }
}
class Slider extends Component{
    render(){
        return (
            <div className="asider-container">
                <div className="asider">
                    <nav className="asider-nav">
                    {
                         this.props.sections.map((section,index)=>{
                             if(index===0){
                                section.activePath = section.items[index].id
                             }
                             return  <Section  key={index} sectionItem={section}/>
                    })
                    }
                    </nav>
                </div>
            </div>
        )
    }
}

export default Slider;