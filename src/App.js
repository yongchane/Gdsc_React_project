import logo from './logo.svg';
import {useState, useRef,useCallback, useEffect} from 'react';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const App =() =>{
  //LocalStorage에서 할 일 목록 불러오기
  const initialTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [
    {
      id:1,
      text:'리엑트의 기초 알아보기',
      checked:true,
    },
    {
      id:2,
      text:'컴포넌트 스타일링 해 보기',
      checked:true,
    },
    {
      id:1,
      text:'일전 관리 앱 만들어 보기',
      checked:false,
    },
  ];
  
  const[todos,setTodos] =useState(initialTodos);

  useEffect(() => {
    //할 일 목록을 LocalStoeage에 저장
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 고윳값으로 사용될id
  // ref를 사용하여 변수 담기
  const nextId =useRef(4);
  const onInsert = useCallback(
text =>{
  const todo ={
    id:nextId.current,
    text,
    checked:false,
  };
  setTodos(todos.concat(todo));
  nextId.current +=1; //nextId 1씩 더하기
},
[todos],
  );

const onRemove =useCallback(
  id=>{
setTodos(todos.filter(todo => todo.id !==id));
  },
  [todos],
)
const onToggle=useCallback(
  id=>{
    setTodos(
      todos.map(todo =>
        todo.id ===id? {...todo,checked: !todo.checked}:todo,),
    );
  },
  [todos],
);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
