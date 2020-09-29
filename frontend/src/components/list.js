import React from 'react';

const List = ({selectedList}) => {
 
	console.log('selectedList: ', selectedList);
  return selectedList.map((todo, index) => (
    <div
      className={'todo-row'}
      key={index}
    >
      <div key={todo.id}>
        {todo.label}
      </div>
    </div>
  ));
}

export default List;
