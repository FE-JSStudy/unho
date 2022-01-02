import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import content_info_flights_1 from "../images/content_info_flights_1.svg"
import content_info_flights_2 from "../images/content_info_flights_2.svg"
import content_info_flights_3 from "../images/content_info_flights_3.svg"

// header - pages change buttons
function PageList(props) {
  let navigate = useNavigate();
  

  if (props.page.en === window.location.pathname.slice(1)) {
    return (
      <div className="header--bottom__page-box page-active" onClick={() => {
        navigate(`/${props.page.en}`);
      }}>{props.page.ko}</div>
    )
  } else {
    return (
      <div className="header--bottom__page-box" onClick={() => {
        navigate(`/${props.page.en}`);
      }}>{props.page.ko}</div>
    );
  }
}


// content - case flights reserve
function ReserveFlights(props) {
  if (props.radioType === 'roundTrip') {
    return (
      <label htmlFor={props.radioType.en}>
        <input
          type="radio"
          id={props.radioType.en}
          value={props.radioType.en}
          name="ReserveFlights"
          onChange={props.onChange}
          checked={props.radioValue === props.radioType.en ? true : false}
        />
          {props.radioType.ko}
      </label>
    )
  } else {
    return (
      <label htmlFor={props.radioType.en}>
        <input
          type="radio"
          id={props.radioType.en}
          value={props.radioType.en}
          name="ReserveFlights"
          onChange={props.onChange}
          checked={props.radioValue === props.radioType.en ? true : false}
        />
          {props.radioType.ko}
      </label>
    )
  }
}

// rserve-input
function ReserveInput(props) {
  if (props.page === 'flights') {
    return (
      <div className="content--reserve-table__input-list">
        <div className="content--reserve-table__input-item">
          <label>출발지</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.departure} onChange={props.onChange.bind(this, 'departure')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>도착지</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.destination} onChange={props.onChange.bind(this, 'destination')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>출발일</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.startDate} onChange={props.onChange.bind(this, 'startDate')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>도착일</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.endDate} onChange={props.onChange.bind(this, 'endDate')} ></input>
        </div>
      </div>
    );
  } else if (props.page === 'hotels') {
    return (
      <div className="content--reserve-table__input-list">
        <div className="content--reserve-table__input-item">
          <label>어디에 숙소를 잡고 싶으신가요?</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.location} onChange={props.onChange.bind(this, 'location')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>체크인</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.checkIn} onChange={props.onChange.bind(this, 'checkIn')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>체크아웃</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.checkOut} onChange={props.onChange.bind(this, 'checkOut')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>투숙객 및 객실</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.people} onChange={props.onChange.bind(this, 'people')} ></input>
        </div>
      </div>
    );
  } else if (props.page === 'rentCars') {
    return (
      <div className="content--reserve-table__input-list">
        <div className="content--reserve-table__input-item">
          <label>대여장소</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.location} onChange={props.onChange.bind(this, 'location')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>대여 날짜</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.startDate} onChange={props.onChange.bind(this, 'startDate')} ></input>
        </div>
        <div className="content--reserve-table__input-item">
          <label>반납 날짜</label>
          <input type="text" className="content--reserve-table__input-form" value={props.inputValue.endDate} onChange={props.onChange.bind(this, 'endDate')} ></input>
        </div>
      </div>
    );
  }
}

// content - info cards
function InfoCard(props) {
  if (props.page === 'flights') {
    const icons = [content_info_flights_1, content_info_flights_2, content_info_flights_3]
    return (
      <div className={`content--information__${props.page}`}>
        <img src={icons[props.info.id-1]} className="content--information__icon"></img>
        {props.info.text}
      </div>
    );
  } else if (props.page === 'hotels') {
    return (
      <div className={`content--information__${props.page}`}>
        {props.info.text}
      </div>
    );
  } else if (props.page === 'rentCars') {
    return (
      <div className={`content--information__${props.page}`}>
        {props.info.text}
      </div>
    );
  }
}


function ComponentList(props) {
  let items = null;

  // 헤더 페이지 구분 버튼들
  if (props.type === 'page') {
    const pages = [
      {en: 'flights', ko: '항공권'},
      {en: 'hotels', ko: '호텔'},
      {en: 'rent-cars', ko: '렌트카'},
    ]
    items = pages.map(page => {
      return <PageList key={page.en} page={page}></PageList>
    })

  // 컨텐츠 비행기 왕복, 편도, 다구간 구분 라디오 버튼
  } else if (props.type === 'ReserveFlights') {
    items = props.radioTypes.map(radioType => {
      return <ReserveFlights key={radioType.en} radioType={radioType} radioValue={props.radioValue} onChange={props.onChange}></ReserveFlights>
    })

  } else if (props.type === 'contentReserveInput') {
    items = <ReserveInput page={props.page} inputValue={props.inputValue} onChange={(type, event) => {
      props.onChange(event, type);
    }}></ReserveInput>
  
  // 예약창 아래 정보 화면
  } else if (props.infos) {
    if (props.page === 'flights') {
      items = props.infos.flights.map(info => {
        return <InfoCard key={info.id} page={props.page} info={info}></InfoCard>
      })
    } else if (props.page === 'hotels') {
      items = props.infos.hotels.map(info => {
        return <InfoCard key={info.id} page={props.page} info={info}></InfoCard>
      })
    } else if (props.page === 'rentCars') {
      items = props.infos.rentCars.map(info => {
        return <InfoCard key={info.id} page={props.page} info={info}></InfoCard>
      })
    }
  }

  return (
    <div className={`list-box content--information-${props.page}`}>
      {items}
    </div>
  );
}

export default ComponentList;