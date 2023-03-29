import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state ={
            articles: [],
            loading:false,
            page : 1
        }
       // console.log(this.state.articles);
    }

   async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3dd0f76c4e5542f88b0ed2c86e1b5dca&page=1&pageSize=19";
        let data =  await fetch(url);
        //console.log(data);
        let parseData = await data.json();
        // console.log(parseData)

        this.setState({articles:parseData.articles,totalResults:parseData.totalResults})

    }
    

    handlePreviosClick = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3dd0f76c4e5542f88b0ed2c86e1b5dca&page=${this.state.page - 1}&pageSize=19`;
      let data =  await fetch(url);
      //console.log(data);
      let parseData = await data.json();


      this.setState= {
        page :this.state.page - 1,
        articles:parseData.articles
      }

    }

    handleNextClick =  async () =>{

      console.log('next')
      if(this.state.page + 1 >   Math.ceil(this.state.totalResults/20)){

      }
      else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3dd0f76c4e5542f88b0ed2c86e1b5dca&page=${this.state.page + 1}&pageSize=19`;
      let data =  await fetch(url);
      //console.log(data);
      let parseData = await data.json();


      this.setState= {
        page :this.state.page + 1,
        articles:parseData.articles
      }
    }
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
     <div className='container d-flex justify-content-between'>

     <button disabled={this.state.page >=1} type="button" className="btn btn-dark" onClick={this.handlePreviosClick}>&larr;Previos</button>
     <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>

     </div>

     

       
        
        
       
        
      </div>
    )
  }
}

export default News