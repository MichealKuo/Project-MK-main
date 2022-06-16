import React, { useEffect, useState } from 'react'
import './HotelPage.scss'
import { AiFillStar } from 'react-icons/ai'
import { FaLine } from 'react-icons/fa'
import { BsScissors } from 'react-icons/bs'
import { MdOutlineAtm } from 'react-icons/md'
import {
  FaSyringe,
  FaCookieBite,
  FaMusic,
  FaSearch,
  FaRegCreditCard,
} from 'react-icons/fa'

import ComAvatar1 from './adoptlist-01_300x300.jpg'
import ComAvatar2 from './adoptlist-02_300x300.jpg'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
// map
import { Key } from './Key' // 引入 API key
import GoogleMapReact from 'google-map-react'

import { FcHome } from 'react-icons/fc'
// comments
import Comments from './Comments/Comments'
// Collapse
import Collapse from './Collapse'
import Collapse1 from './Collapse1'
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact'
function HotelPage(props) {
  // const coll = document.getElementsByclassNameName('collapsible')

  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener('click', function () {
  //     this.classNameList.toggle('active')
  //     var content = this.nextElementSibling
  //     if (content.style.maxHeight) {
  //       content.style.maxHeight = null
  //     } else {
  //       content.style.maxHeight = content.scrollHeight + 'px'
  //     }
  //   })
  // }
  const [hotelList, setHotelList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3002/api/gethotellist').then((response) => {
      setHotelList(response.data)
    })
  }, [])
  const [hotelPage, setHotelPage] = useState({
    sid: '',
    avatar: '',
    avatar01: '',
    avatar02: '',
    avatar03: '',
    name: '',
    lat: '',
    lng: '',
    cell: '',
    address: '',
  })
  useEffect(() => {
    if (hotelList.length > 0) {
      const id = props.match.params.id
      // 如果id存在的話
      // ex.用id向伺服器(資料庫)要資料
      if (id) {
        const foundPet = hotelList.find((v, i) => {
          return String(v.sid) === String(id)
        })
        setHotelPage(foundPet)
      }
    }
  }, [hotelList, props.match.params.id])
  // map
  const AnyReactComponent = ({ text }) => (
    <div className="MKMapBox">
      <div>
        <FcHome className="MKMapIcon"> </FcHome>
      </div>
      <div className="MKMapInfo">{text}</div>
    </div>
  )

  // detailBtn
  const [isCollapsed, setIsCollapsed] = useState('collapsed')
  return (
    <>
      <>
        {/* title */}
        <>
          <div className="MKHotelHeaderTitle">
            <p>
              旅宿明細:<span className="MKtitle-text"> {hotelPage.name}</span>
            </p>
          </div>
        </>
        <div className="MKAPCarousel">
          <MDBCarousel
            activeItem={1}
            length={3}
            // showControls={true}
            // showIndicators={true}
            // className="z-depth-1"
          >
            <MDBCarouselInner className="MKHPCarousel">
              <MDBCarouselItem itemId="1">
                <MDBView className="MKHPCarouselBox">
                  <img
                    className="MKHPCarouselimg"
                    src={hotelPage.avatar}
                    alt="First slide"
                  />
                  {/* <MDBMask overlay="black-light" /> */}
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView className="MKAPCarouselBox">
                  <img
                    className="MKAPCarouselimg"
                    src={hotelPage.avatar01}
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView className="MKAPCarouselBox">
                  <img
                    className="MKAPCarouselimg"
                    src={hotelPage.avatar02}
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView className="MKAPCarouselBox">
                  <img
                    className="MKAPCarouselimg"
                    src={hotelPage.avatar03}
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>

        {/* booking form */}
        {/* <Row>
          <div className="MKbooking">
            <div className="MKbookBanner">
              <h2>訂房資訊</h2>
            </div>
            <div className="MKwrap">
              <form>
                <div className="MKbookFormGroup">
                  <label for="MKbooking">入房時間</label>
                  <input type="date" className="MKform-control" />
                </div>
                <div className="MKbookFormGroup">
                  <label for="checkout">退房日期</label>
                  <input type="date" className="MKform-control" />
                </div>
                <div className="MKbookFormGroup">
                  <label for="count">狗</label>
                  <input
                    type="count"
                    className="MKform-control"
                    placeholder="數量"
                  />
                </div>
                <div className="MKbookFormGroup">
                  <label for="count">貓</label>
                  <input
                    type="count"
                    className="MKform-control"
                    placeholder="數量"
                  />
                </div>
                <div className="MKprice">
                  <div className="MKwrap">
                    <div className="MKdatePrice">
                      <p className="MKperCost">$1200 x 2 晚</p>
                      <p className="MKperCost">$2400</p>
                    </div>
                  </div>
                  <div className="MKwrap">
                    <div className="MKdatePrice">
                      <p>總價</p>
                      <p>$2400</p>
                    </div>
                  </div>
                </div>
                <button type="submit" className="MKbtn MKlogin">
                  馬上預約
                </button>
              </form>
            </div>
          </div>
        </Row> */}
        {/* roomService */}
        <>
          <div className="row MKrowService ">
            <div className="MKroomService ">
              <Collapse>
                <div className="MKcontent">
                  <div className="MKHPDetailBox">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <FaSyringe />
                      </li>
                      <li>
                        <p>疫苗注射</p>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <FaCookieBite />
                      </li>
                      <li>
                        <p>下午茶點</p>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <FaMusic />
                      </li>
                      <li>
                        <p>音樂療癒</p>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <FaSearch />
                      </li>
                      <li>
                        <p>建康檢查</p>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <BsScissors />
                      </li>
                      <li>
                        <p>毛髮修容</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="MKcreditCard  ">
              <Collapse1>
                <div className="MKcontent ">
                  <div className="MKHPDetailBox">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <FaRegCreditCard />
                      </li>
                      <li>
                        <p>信用卡支付</p>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <FaLine />
                      </li>
                      <li>
                        <p>LINE Pay</p>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="MKservice">
                      <li className="MKdetailIcon">
                        <MdOutlineAtm />
                      </li>
                      <li>
                        <p>ATM轉帳</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse1>
            </div>
          </div>
        </>
        {/* map */}
        <div style={{ height: '50vh', width: '70%', margin: '10rem auto' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: Key }}
            defaultCenter={{ lat: 25.0325308, lng: 121.546538 }}
            defaultZoom={15}
          >
            <AnyReactComponent
              lat={hotelPage.lat}
              lng={hotelPage.lng}
              text={hotelPage.name}
              zoom={17}
            />
          </GoogleMapReact>
        </div>
        {/* hotel comments */}
        <>
          {/* <div className="MKHotelRowComment">
            <div className="MKHotelComm">
              <div className="MKcom-header">
                <h6 className="MKcom-header-title">旅宿評價</h6>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <img src={ComAvatar2} alt="" />
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcomNameH">
                      <p>專業貓貓鏟屎官4我</p>
                    </div>
                    <div className="MKstart">
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                    </div>
                    <div className="MKcomMsn">
                      <h6>
                        成貓真的要結紮！發情期會叫到無法睡覺，結紮也讓貓貓身體不會有一些賀爾蒙相關的疾病，這間旅宿結合獸醫進駐，真的解決很多不方便之處！
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <img src={ComAvatar1} alt="" />
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcomNameH">
                      <p>我是貓奴</p>
                    </div>
                    <div className="MKstart">
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                    </div>
                    <div className="MKcomMsn">
                      <h6>
                        因為工作關係出差異地，臨時找不到人照顧毛小孩，無意見發現喵星球，除了環境優美員工訓練很客氣又專業，五星推薦！
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MKHProwBtn">
                <div className="MKHPutton" type="submit">
                  <div>
                    <button className="MKHPcard-btn">我要回覆</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <Comments currentUserId="1" />
        </>
      </>
    </>
  )
}

export default withRouter(HotelPage)
