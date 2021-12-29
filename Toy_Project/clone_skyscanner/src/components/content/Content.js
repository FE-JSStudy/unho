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
  return (
    <div className="content--reserve-table">
      <form>
        <div>
          위 - 라디오 버튼들
        </div>
        <div>
          중간 - 데이트타임
        </div>
        <div>
          아래 - 체크박스, 검색 버튼
        </div>
      </form>
    </div>
  );
}

function Content(props) {
  return (
    <div>
      <div className="content--background">
        <ReserveTitle type={props.type}></ReserveTitle>
        <ReserveTable type={props.type}></ReserveTable>
      </div>
      <div>
        안내 사항
      </div>
      <div>
        특가
      </div>
    </div>
  );
}

export default Content;