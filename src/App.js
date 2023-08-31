import { useState } from 'react';
import './App.css';

function App() {

  // 인풋 내용 입력
  const [inputContents, setInputContents] = useState('');

  // 인풋 내용 변경
  const onChangeContentsHandler = (evet) => {
    setInputContents(evet.target.value);
  }

  // card 정보
  const [cards, setCards] = useState([
    { id: 1, contents: 'react를 배워봅시다' }
  ])

  // '추가하기' 버튼 클릭
  const clickAddButtonHandler = (evet) => {
    // 인풋박스 초기화
    setInputContents('')

    // 새로운 card 추가
    const newCard = {
      id: cards.length + 1,
      contents: inputContents,
    }

    setCards([...cards, newCard])
  }

  return (
    <div>
      <div className='inputZone'>
        <input type='text'
          value={inputContents}
          onChange={onChangeContentsHandler} />
        <button
          onClick={clickAddButtonHandler}
        >추가하기</button>
      </div>

      <div className='titleZone'>
        <span>Todo List</span>
      </div>

      <div className='cardZone'>
        {cards.map((item) => {
          return (
            <Card
              item={item}
            />
          )
        })}
      </div>
    </div>
  )
}

const Card = ({ item }) => {
  return (
    <div className='card'>
      <p>{item.contents}</p>
    </div>
  )
};

export default App;
