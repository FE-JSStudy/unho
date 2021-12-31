import { useState } from 'react'

import ComponentList from '../ComponentList'


function ReserveTitle(props) {
  const titles = {
    flights: '출발지나 도착지에 관계없이 저렴한 항공편',
    hotels: '머무를 곳을 찾아보세요',
    rentCars: '렌터카를 검색해 보세요',
  }
  
  return (
    <h2 className="content--reserve-title">{titles[props.type]}</h2>
  );
}

function ReserveTable(props) {
  const [radioTypes, setRadioTypes] = useState([
    {en: 'roundTrip', ko: '왕복'},
    {en: 'oneWay', ko: '편도'},
    {en: 'multi', ko: '다구간'},
  ])
  const [radioValue, setRadioValue] = useState('roundTrip')

  function radioChange(event) {
    setRadioValue(event.target.value);
    console.log(`Now Selected : ${event.target.value}`);
  }

  function reserve(event) {
    event.preventDefault();
    console.log('reserve submit clicked!');
  }

  return (
    <div className="content--reserve-table">
      <form>
        <div className="content--reserve-table__radio-list">
          <ComponentList type="ReserveFlights" radioTypes={radioTypes} radioValue={radioValue} onChange={radioChange}></ComponentList>
        </div>
        <div>
          중간 - 데이트타임
        </div>
        <div className="content--reserve-table__submit">
          <button className="content--reserve-table__submit-btn" onClick={reserve}>검색하기 ➜</button>
        </div>
      </form>
    </div>
  );
}

function Information(props) {
  const info = {
    flights: [
      {id: 1, text: '1,000개 이상의 업체가 제공하는 옵션 중 최저가 항공권을 선택해 수수료 없이 예약하세요'},
      {id: 2, text: '여행 계획에 변동이 생기거나 여행이 취소되어도 불이익이 없도록 변경 가능한 항공권을 선택하세요'},
      {id: 3, text: '승객 안전을 위해 각 항공사가 마련한 코로나19 관련 방역 조치를 확인하여 안심하고 여행을 즐기세요'},
    ],
    hotels: [
      {id: 1, text: 'booking.com'},
      {id: 2, text: 'hotels.com'},
      {id: 3, text: 'Trip.com'},
      {id: 4, text: 'Hilton'},
      {id: 5, text: 'agoda'},
      {id: 6, text: 'INTERCONTINENTAL'},
    ],
    rentCars: [
      {id: 1, text: 'GreenCar'},
      {id: 2, text: 'SOCAR'},
      {id: 3, text: '딜카'},
    ]
  }

  return (
    <ComponentList page={props.type} info={info}></ComponentList>
  )
}

function Content(props) {
  return (
    <div>
      <div className="content--background">
        <ReserveTitle type={props.type}></ReserveTitle>
        <ReserveTable type={props.type}></ReserveTable>
      </div>
      <div className='content--information'>
        <Information type={props.type}></Information>
      </div>
      <div>
        특가
      </div>
    </div>
  );
}

export default Content;