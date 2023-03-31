import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'  ;
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { News } from '../https/axios';
import { setNews } from '../redux/actions/newsActions';
import Spinner from './Spinner';
import Pagination  from "https://cdn.skypack.dev/rc-pagination@3.1.15";

const Home = () => {

    const   news   = useSelector((state) => state.allNews.news)
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        async function NewsInfo(){
            const news = await News()
            console.log("news",news.data.articles)
            setLoading(false);
            dispatch(setNews(news.data.articles))
        }
        NewsInfo();
    }, [])
    

    // function handlePageClick({ selected: selectedPage }){
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //         setCurrentPage(selectedPage);
    //     }, 1000);
    //     // dispatch(setNews());
    // }


    // const offset = currentPage * PER_PAGE;


    // const pagecount = Math.ceil(news.length / PER_PAGE);

    const [perPage, setPerPage] = useState(5);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const PerPageChange = (value) => {
        setSize(value);
            const newPerPage = Math.ceil(news.length / value);
            if (current > newPerPage) {
                setCurrent(newPerPage);
            }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        return news.slice((current - 1) * pageSize, current * pageSize);
    };

    const PaginationChange = (page, pageSize) => {
        setLoading(true);
        setTimeout(() => {
            setSize(pageSize)
            setLoading(false);
            setCurrent(page);
        }, 1000);
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><i className="fa fa-angle-double-left"></i></button>;
        }
        if (type === 'next') {
            return <button><i className="fa fa-angle-double-right"></i></button>;
        }
        return originalElement;
    }

    
    return (
        <>
          <div className="container">&nbsp;
              <div className="row">
                  <>
                      {
                          loading ? <Spinner />
                              :
                              <>
                                  {
                                    getData(current, size).map((data) => {
                                          return (
                                              <>
                                                <div className="col-md-4">&nbsp;
                                                  <div className="card" >
                                                          <div style={{
                                                              display: 'flex',
                                                              justifyContent: 'flex-end',
                                                              position: 'absolute',
                                                              right: '0'
                                                          }} 
                                                          >
                                                            <span className="badge bg-danger"> {data.source.name} </span>
                                                          </div>
                                                         <img src={!data.urlToImage ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : data.urlToImage} className="card-img-top" alt="News" />
                                                          <div className="card-body">
                                                              <h5 className="card-title">{data.title}</h5>
                                                              <p className="card-text">{data.description}</p>
                                                              <p className="card-text"><small className="text-muted">By {!data.author ? "Unknown" : data.author} on  {new Date(data.publishedAt).toGMTString()}</small></p>
                                                              <a rel="noreferrer" href={data.url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                                                          </div>
                                                  </div>
                                                </div>
                                              </>
                                          )
                                      }
                                      )
                                  }
                              </>
                      }
                  </>
              </div>
          </div>
              <div className="container d-flex justify-content-center mt-5">
                {/* <ReactPaginate
                    // pageCount={pagecount}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeClassName="active"
                    pageLinkClassName="page-link"
                    breakLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    pageClassName="page-item"
                    breakClassName="page-item"
                    nextClassName="page-item"
                    previousClassName="page-item"
                    previousLabel={<>&laquo;</>}
                    nextLabel={<>&raquo;</>}
                />  */}
                <Pagination
                    className="pagination-data"
                    // showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                    onChange={PaginationChange}
                    total={news.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChange}
                />
            </div>  
      </>
  )
}

export default Home