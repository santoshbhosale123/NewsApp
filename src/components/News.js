import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state ={
            articles: [],
            loading:false
        }
       // console.log(this.state.articles);
    }

   async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3dd0f76c4e5542f88b0ed2c86e1b5dca";
        let data =  await fetch(url);
        //console.log(data);
        let parseData = await data.json();
        // console.log(parseData)

        this.setState({articles:parseData.articles})

    }
  render() {
   
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Top</h2>
       
     <div className="row"> 
     {this.state.articles.map((element)=>{
        return  <div className="col-md-4" key={element.url} >
        <NewsItem  title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl ={element.urlToImage} newsUrl ={element.url}></NewsItem>
        </div> 
     })}
    
     </div>
       
        
        
       
        
      </div>
    )
  }
}

export default News