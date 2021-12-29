import { useNavigate } from 'react-router-dom'

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


function ComponentList(props) {
  let items;

  if (props.type === 'page') {
    const pages = [
      {en: 'flights', ko: '항공권'},
      {en: 'hotels', ko: '호텔'},
      {en: 'rent-cars', ko: '렌트카'},
    ]
    items = pages.map(page => {
      return <PageList key={page.en} page={page}></PageList>
    })
  }

  return (
    <div className="list-box">
      {items}
    </div>
  );
}

export default ComponentList;