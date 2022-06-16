import React, { useState, useEffect } from 'react'
import './AdoptList.scss'
import AdoptListBanner from './adoptlist-banner_300x300.jpg'
import { withRouter, Link } from 'react-router-dom'
//Card
// import AdoptCards from './AdoptCards'
import Axios from 'axios'
import Dash from 'lodash'

function AdoptList() {
  // filter
  const [selectType, setSelectType] = useState('')
  const [selectLocation, setSelectLocation] = useState('')
  const [selectGender, setSelectGender] = useState('')
  //adoptCardData
  const [petList, setPetList] = useState([])
  //paginatePart
  const [paginatedPosts, setPaginatedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    Axios.get('http://localhost:3002/api/getpetlist').then((response) => {
      setPetList(response.data)
      setPaginatedPosts(Dash(response.data).slice(0).take(pageSize).value())
    })
  }, [])
  //filter
  const handleType = (e) => {
    setSelectType(e.target.value)

    // if (selectType !== '') {
    //   const filteredData = paginatedPosts.filter((item) => {
    //     return Object.values(item).join('').includes(selectType)
    //   })
    //   setFilteredResults(filteredData)
    // } else {
    //   setFilteredResults(paginatedPosts)
    // }
  }
  const handleLocation = (e) => {
    setSelectLocation(e.target.value)
  }
  const handleGender = (e) => {
    setSelectGender(e.target.value)
  }
  const filteredData = petList.filter((item) => {
    return Object.values(item)
      .join('')
      .includes(selectType + selectLocation + selectGender)
  })

  console.log('selectType', selectType)
  console.log('filteredData', filteredData)
  console.log('paginatedPosts', paginatedPosts)
  // const [filteredResults, setFilteredResults] = useState([])
  // console.log(paginatedPosts)
  // console.log(petList)
  // console.log(paginatedPosts)
  // console.log(filteredResults)
  const pageSize = 6
  const pageCount = filteredData ? Math.ceil(filteredData.length / pageSize) : 0
  const pages = Dash.range(1, pageCount + 1)
  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * pageSize
    const paginatedPost = Dash(filteredData)
      .slice(startIndex)
      .take(pageSize)
      .value()
    setPaginatedPosts(paginatedPost)
    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <>
        {/* banner */}
        <>
          <div className="MKbanner">
            <div className="MKbanner-left">
              <img src={AdoptListBanner} alt="" />
            </div>
            <div className="MKbanner-right">
              <div className="MKbanner-text">
                <h2>毛孩找家</h2>
                <p>
                  你的一眼瞬間
                  <br />
                  就讓我有了被愛的機會
                </p>
              </div>
            </div>
          </div>
        </>
        {/* RWD-Banner */}
        <>
          <div className="MKRWD-banner">
            <div className="MKrwd-banner-text">
              <h5>毛孩找家</h5>
              <br />
              <p>
                你的一眼瞬間
                <br />
                <br />
                就讓我有了被愛的機會
              </p>
            </div>
          </div>
        </>
        {/* filter */}
        <>
          <div className="MKrowFilter">
            <div className="MKadopt-filter">
              <div className="MKfilter">
                <div className="MKselector">
                  <p>種類</p>
                  <select
                    value={selectType}
                    className="MKad-filter"
                    onChange={handleType}
                  >
                    <option value="">---請選擇---</option>
                    <option value="Cat">貓咪</option>
                    <option value="Dog">狗狗</option>
                  </select>
                </div>
                <div className="MKselector ">
                  <p>地區</p>
                  <select
                    value={selectLocation}
                    className="MKad-filter"
                    onChange={handleLocation}
                  >
                    <option value="">---請選擇---</option>
                    <option value="Taipei">台北市</option>
                    <option value="NewTaipei">新北市</option>
                    <option value="Taichung">台中市</option>
                  </select>
                </div>
                <div className="MKselector">
                  <p>性別</p>
                  <select
                    value={selectGender}
                    className="MKad-filter"
                    onChange={handleGender}
                  >
                    <option value="">---請選擇---</option>
                    <option value="Boy">男孩</option>
                    <option value="Girl">女孩</option>
                  </select>
                </div>
                {/* search BTN */}
                {/* <div className=" ">
                  <button
                    className="MKsearch-btn"
                    type="submit"
                    // onClick={(handleType, handleLocation, handleGender)}
                  >
                    <BsSearch />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </>
        {/* cards */}
        <>
          <div className="MKALrow-list">
            <div className="MKALlist">
              {selectType || selectGender || selectLocation === undefined
                ? filteredData.map((v, i) => {
                    return (
                      <p key={i} className="MKDisplayLi col-12 col-md-4">
                        <div className=" MKALcard ">
                          <div className="MKALcard-context">
                            <div className="MKALavatar">
                              <img
                                className="MKALCardImg"
                                src={v.avatar}
                                alt=""
                              />
                            </div>
                            <div className="MKALcardContent">
                              <p className="MKALcard-title">{v.name}</p>
                              <p className="MKALcard-text"> {v.info}</p>
                            </div>
                          </div>
                          <div className="MKALbutton" type="submit">
                            <div>
                              {/* 點擊按鈕跳對照id分頁 */}
                              <Link to={'/adoptlist/adoptpage/' + v.sid}>
                                <button className="MKALcard-btn">
                                  了解更多
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </p>
                    )
                  })
                : paginatedPosts.map((v, i) => {
                    return (
                      <p key={i} className="MKDisplayLi col-12 col-md-4">
                        <div className=" MKALcard ">
                          <div className="MKALcard-context">
                            <div className="MKALavatar">
                              <img
                                className="MKALCardImg"
                                src={v.avatar}
                                alt=""
                              />
                            </div>
                            <div className="MKALcardContent">
                              <p className="MKALcard-title">{v.name}</p>
                              <p className="MKALcard-text"> {v.info}</p>
                            </div>
                          </div>
                          <div className="MKALbutton" type="submit">
                            <div>
                              {/* 點擊按鈕跳對照id分頁 */}
                              <Link to={'/adoptlist/adoptpage/' + v.sid}>
                                <button className="MKALcard-btn">
                                  了解更多
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </p>
                    )
                  })}
            </div>
          </div>
          <div className="MKpagination">
            {/* 分頁按鈕 */}
            <ul className="pagination">
              {pages.map((page) => (
                <li
                  className={
                    page === currentPage ? ' page-item active ' : 'page-item'
                  }
                >
                  <p
                    className="page-link MKpage-link"
                    onClick={() => pagination(page)}
                  >
                    {page}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </>
      </>
    </>
  )
}

export default withRouter(AdoptList)
