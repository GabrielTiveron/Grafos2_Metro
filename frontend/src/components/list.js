import React, {useState} from 'react';
import {levelSP} from '../levels.js'

const List = ({selectedList}) => {
 
	console.log('selectedList: ', selectedList);
  return selectedList.map((todo, index) => (
    <div
      className={'todo-row'}
      key={index}
    >
      <div key={todo.id}>
        {todo.text}
      </div>
    </div>
  ));
}

export default List;
