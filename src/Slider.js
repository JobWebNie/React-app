import React,{ Component } from  'react';
import {getData} from './api/fetch';
import './Slider.css'

function setSection(props,index){
    if(!props){
        return;
    }
    const {isActive,location,section} = props;
    const {items,title} = section;
    const {pathname} = location;
    const pathItemId = pathname.lastIndexOf('/');  
    const activePath = pathname.slice(pathItemId+1,-5)
    let sectionItem = [];
    items.forEach((item)=>{
        if(item.id === activePath){
            sectionItem.push(<li className="sectionItem" key={item.id}>
            <a className="itemLink" href={item.id} style={{fontWeight: isActive ? 700 :'normal'}}>
                {item.title}
                <span  className="itemText"></span>
            </a>
        </li>);
        }else{
            sectionItem.push(<li className="sectionItem" key={item.id}>
            <a className="itemLink" href={item.id}>
                {item.title}
            </a>
        </li>);
        }
        
    });
    return(
        <div className="section" key={index}>
            <button className="sectionTitle" >
                <div className="titleText">
                    {title}
                </div>
            </button>
            <ul className="sectionBody">
                {sectionItem}
            </ul>
        </div>
    )
}

function getSlider(value){
    let slider = [];
    const props = value;
    props.forEach((item,index)=>{
        let section = setSection(item,index)
        slider.push(section)
    })
    return slider;
}
class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:null,
            children:[
                // {
                //     isActive:true,
                //     location:{
                //         pathname:"/docs/hello-world.html"
                //     },
                //     section:{
                //         items:[
                //             {
                //                 id:"hello-world",
                //                 title:"Hello World"
                //             },
                //             {
                //                 id:"introducing-jsx",
                //                 title:"Introducing JSX"
                //             },
                //             {
                //                 id:"rendering-elements",
                //                 title:"Rendering Elements"
                //             }
                //         ],
                //         title:"Main Concepts",
                //     }
                // }   
            ]
            
        }
    }
    componentDidMount(){
        console.log(this)
        getData('http://localhost:3001/course',{
            params:{
                pathName:'document',
            }
           
        }).then((response)=>{
            const items = response.data
            this.setState({
                loading:false,
                children:items
            })
        })
    }
    render(){
        const data = this.state.children;
        return (
            <div className="asider-container">
                <div className="asider">
                    <nav className="asider-nav">
                    {getSlider(data)}
                        {/* <div className="section">
                            <button className="sectionTitle">
                                <div className="titleText">
                                installAtion
                                </div>
                            </button>
                            <ul className="sectionBody">
                                <li className="sectionItem">
                                    <a className="itemLink" href="#install-antd">
                                    add antd to React
                                    </a>
                                </li><li className="sectionItem">
                                    <a className="itemLink">
                                    Create a New React App
                                    </a>
                                </li>
                                <li className="sectionItem">
                                    <a className="itemLink">
                                    CDN links
                                    </a>
                                </li>
                                <li className="sectionItem">
                                    <a className="itemLink" style={{fontWeight: 700}}>
                                    Getting Start
                                    <span className="itemText"></span>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </nav>
                </div>
            </div>
        )
    }
}

export default Slider;