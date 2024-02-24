import React, { useState,useEffect} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
import hardcodedArticles from '../hardcodedArticles.json'

const News = (props) => {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [totalResults,setTotalResults] = useState(0);
  const [page,setPage] = useState(1);
  const [pageSize,setPageSize] = useState(10);

  const capitalize = (a) => {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  const updateNews = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
    // setLoading(true);
    // let data = await fetch(url);
    // let parsedData = await data.json();
    let parsedData = hardcodedArticles;
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(page);
    document.title = `${capitalize(props.category)}-NewsNonStop`;
  };
  const handlePrevClick = async () => {
    setPage(page-1);
    updateNews();
  };
  
  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  };
  
  useEffect( () => {
    updateNews();
  },[])
  // const fetchMoreData = async() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}`;
  //   setPage(page+1);
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   setArticles(articles.concat(parsedData.articles));
  //   setTotalResults(parsedData.totalResults);
  //   console.log(page);
  // } 
    return (
      <div className="container my-3">
        <h2 className="text-center my-4">
          {`NewsNonStop - Top ${capitalize(props.category)} Headlines`}
        </h2>
        {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore = {articles.length !== totalResults}
        loader = {<Spinner/>}
        > */}
        {loading && <Spinner />}
        <div className="row" style={{width : '100%'}}>
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem title={element.title} description={element.descrition} imageUrl={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                </div>
              );
            })}
        </div>
        {/* </InfiniteScroll> */}
      </div>
    );
}

News.defaultProps = {
  category: "general",
};
News.propTypes = {
  category: PropTypes.string,
};

export default News;