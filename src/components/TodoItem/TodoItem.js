import React from 'react';
import styles from './TodoItem.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class TodoItem extends React.Component{
  render() {
    const {done, children, onToggle, onRemove} = this.props;

    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
        <div className={cx('text', {done})}>{children}</div>
        <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
      </div>
    );
  }
}

export default TodoItem;