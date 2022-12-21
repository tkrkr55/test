import './App.css';
import { useState } from 'react';
import { computeHeadingLevel } from '@testing-library/react';


function App() {

 
  let [Title,SetTitle] = useState(['개발 공부 하기','블로그 글쓰기','루루 간식 사주기']);
 let [good,setGood]=useState([0,0,0]);
 let [modal,setModal]=useState(false);
 let [모달제목, 모달제목변경] =useState(0);
 let [입력값,입력변경값] = useState('');

 [1,2,3].map(function(a){
  console.log(a)
  
 })

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 >React Blog</h4>
      </div>

      
      
      

      {
        Title.map((a,i)=>{
          return(
            <div className='list' key={i}>


            
       {/* 제목을 클릭했을때 모달창이 나오게 하자 */}
        <h4 onClick={()=>{
          setModal(true)
          모달제목변경(i)
        }}>{Title[i]} 
        {/* 하트를 눌렀을때 각각 추가가 되었음 좋겠다. */}
        <span onClick={(e)=>{ e.stopPropagation() 
  // array 자료가 나왔을때는 꼭 [...]copy본을 만들어줘야함
  // state가 나왔으니 변경함수를 작성해서 수정하면 됨
  // [i] 는 인덱스의 0,1,2 가 됨 
          let copy = [...good];
          copy[i] = copy[i] + 1;
          setGood(copy)
        }}> 💜</span>{good[i]}</h4>
      <p> 10월 14일 발행</p>
        <button onClick={()=>{
          let copy = [...Title];
          copy.shift(Title)
          SetTitle(copy);
        }}>글삭제</button>
        </div>
        )
        })

      }
  
    <input type="text" class="inputField" placeholder="" onChange={(e)=>{
        입력변경값(e.target.value)
    
      }}/>

      
<button class="snip1535"onClick={(e)=>{
  let copy= [...Title];
  copy.unshift(입력값)
  SetTitle(copy)
}}> 입력 </button>
     {
      modal == true ? <Modal 모달제목={모달제목}SetTitle={SetTitle} Title={Title}/> : '' 
     }

    </div>

   
  );
}

function Modal(props){
  return(
    <div className='modal'>
    <h3>{props.Title[props.모달제목]}</h3>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{
    
      props.SetTitle(['여자코트추천','강남 우동 맛집','파이썬 독학','혜루블로그추천'])
    }}>글수정</button>
    </div>
    
  )
}

  

export default App;
