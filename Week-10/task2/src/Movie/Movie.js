import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { movies } from "./Mv";
import Pagination from "react-bootstrap/Pagination";
import axios from 'axios';
import "./Abc.css";
export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      api: "",
      post: "",
      hover: "",
      parr: [1,2,3],
      currPage:1,
      movies:[]
    }; 
  }
  async  componentDidMount() {

    const res =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
    
 let data = res.data;
    
    this.setState({
      api: [...data.results]
    });
  }
  hoverEle(e) {
    e.target.style.background = "green";
 
   
  }

  changeMovies=async()=>{
    console.log("changemovies called");
    console.log(this.state.currPage);
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
    let data = res.data
    // console.log(data);
    this.setState({
        movies:[...data.results]
    })
}

handleRight=()=>{
  let temparr =[]
  for(let i=1;i<=this.state.parr.length+1;i++){
      temparr.push(i);
  }
  this.setState({
      parr:[...temparr],
      currPage:this.state.currPage+1
  },this.changeMovies)
}
handleLeft=()=>{
  if(this.state.currPage!=1){
      this.setState({
          currPage:this.state.currPage-1
      },this.changeMovies)
  }
} 
 handleRight=()=>{
        let temparr =[]
        for(let i=1;i<=this.state.parr.length+1;i++){
            temparr.push(i);
        }
        this.setState({
            parr:[...temparr],
            currPage:this.state.currPage+1
        },this.changeMovies)
    }
    handleLeft=()=>{
        if(this.state.currPage!=1){
            this.setState({
                currPage:this.state.currPage-1
            },this.changeMovies)
        }
    }
  render() {
    return (
      <div>
        {this.state.api.length < 0 ? (
          <>
            <Spinner animation="border" />
          </>
        ) : (
          <>
            <Card>
              {movies.results.map((e) => {
                let ss = e.poster_path;
                let nn = ss.slice(1, ss.length);
                // console.log(ss,nn,e)
                return (
                  <Card.Body>
                    <div id="one" onMouseEnter={this.hoverEle}>
                      Okkkkk
                    </div>
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                    />
                    <Card.Title>{e.overview}</Card.Title>
                  </Card.Body>
                );
              })}
            </Card>
          </>
        )}

        <Pagination>
          <Pagination.Prev />
          {
            this.state.parr.map((val)=>{
              return(
                <Pagination.Item>{val}</Pagination.Item>
              )
  })
          }
           <Pagination.Next onClick={this.handleRight}/>
          {/* <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last /> */}
        </Pagination>
      </div>
    );
  }
}
