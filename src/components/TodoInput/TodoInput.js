import React from 'react';
import styles from './TodoInput.scss'; //책에는 ./TodoInput.scss 라고 적혀있는데 이러면 에러남...
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//Input과 버튼이 함께 있는 컴포넌트
/*
    value : input 값
    onChange : input 변경 이벤트
    onInsert : '추가' 버튼 클릭 시 발생하는 이벤트
*/
const TodoInput = ({ value, onChange, onInsert }) => {
  //Enter 키를 누르면 onInsert 실행
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  }

  return (
    <div className={cx('todo-input')}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
      <div className={cx('add-button')} onClick={onInsert}>추가</div>
    </div>
  );
};

export default TodoInput;