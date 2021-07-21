import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자 코트 추천', '강남 우동 맛집', '파이썬독학'] );
  let [modal, modal변경] = useState(false);
  let [따봉, 따봉변경] = useState(0);

  var 어레이 = [2,3,4];

  어레이.map(function(a){
    return a*2
  });


  // function 반복된UI(){
  //   var 어레이 = [];
  //   for (var i =0; i< 3; i++){
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이
  // };

  


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      
      <div>

      {

        글제목.map(function(a){
          return (
            <div className="list">
            <h3>{ a } <span onClick={ ()=>{ 따봉변경( 따봉 + 1) } }>★</span> {따봉} </h3>
            <p>2월 17일 발행</p>
            <hr/>
            
           </div>
          )
        })
      }

      <button onClick={ ()=>{modal변경(!modal)}}>열고닫기</button>     

      
      { 
         modal === true 
         ? <Modal 글제목={글제목} ></Modal>
         : null
      }

      </div>
      

    </div>
  )
}


function Modal(props){
  return (
    <div className="modal">
      <h2>{props.글제목[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
