// import React, { useEffect, useState } from 'react'
// import { withRouter, Link } from 'react-router-dom'
// import Axios from 'axios'
// import Dash from 'lodash'
// const pageSize = 9

// const AdoptCards = (props) => {
//   const { selectType, selectGender, selectLocation,handleType,setSelectType } = props
//   // console.log(selectType)
//   // console.log(selectLocation)
//   // console.log(selectGender)
//   //petlist serverdata
//   const [petList, setPetList] = useState([])
//   //paginatePart
//   const [paginatedPosts, setPaginatedPosts] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   useEffect(() => {
//     Axios.get('http://localhost:3002/api/getpetlist').then((response) => {
//       setPetList(response.data)
//       setPaginatedPosts(Dash(response.data).slice(0).take(pageSize).value())
//     })
//   }, [])
//   const handleType1 = (e) => {
//     setSelectType(e.target.value)
//     console.log(e.target.value)
//   }
//   // console.log(paginatedPosts)
//   // console.log(petList)
//   // console.log(paginatedPosts)

//   const pageCount = petList ? Math.ceil(petList.length / pageSize) : 0
//   const pages = Dash.range(1, pageCount + 1)
//   const pagination = (pageNo) => {
//     setCurrentPage(pageNo)
//     const startIndex = (pageNo - 1) * pageSize
//     const paginatedPost = Dash(petList).slice(startIndex).take(pageSize).value()
//     setPaginatedPosts(paginatedPost)
//   }

//   return (
//     <>
//       {/* 引入資料 */}
//       <div className="MKALrow-list">
//         <div className="MKALlist">
//           {paginatedPosts.map((v, i) => {
//             return (
//               <p key={i} className="MKDisplayLi col-12 col-md-4">
//                 <div className=" MKALcard ">
//                   <div className="MKALcard-context">
//                     <div className="MKALavatar">
//                       <img className="MKALCardImg" src={v.avatar} alt="" />
//                     </div>
//                     <div className="MKALcardContent">
//                       <p className="MKALcard-title">{v.name}</p>
//                       <p className="MKALcard-text"> {v.info}</p>
//                     </div>
//                   </div>
//                   <div className="MKALbutton" type="submit">
//                     <div>
//                       {/* 點擊按鈕跳對照id分頁 */}
//                       <Link to={'/adoptlist/adoptpage/' + v.sid}>
//                         <button className="MKALcard-btn">了解更多</button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </p>
//             )
//           })}
//         </div>
//       </div>
//       <div className="MKpagination">
//         {/* 分頁按鈕 */}
//         <ul className="pagination">
//           {pages.map((page) => (
//             <li
//               className={
//                 page === currentPage ? ' page-item active ' : 'page-item'
//               }
//             >
//               <p
//                 className="page-link MKpage-link"
//                 onClick={() => pagination(page)}
//               >
//                 {page}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default withRouter(AdoptCards)
