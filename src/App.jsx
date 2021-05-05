import { useState } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [tasks, setTasks] = useState([]);

	const onChangeText = (e) => {
		return setText(e.target.value);
	};

	const onSubmitButton = () => {
		if (text === '') return;
		const newTask=[...tasks,text]
		setTasks(newTask);
		setText('');
	};

	const onDeleteButton = (index) => {
		const newTask = [...tasks];
		newTask.splice(index, 1);
		setTasks(newTask);
	};

	return (
		<div className="w-4/6 mx-auto pt-20 text-center bg-red-50 min-h-screen">
			<h1 className="mb-10	text-5xl ">React Todo</h1>
			<div>
				<input
					className="shadow-md leading-10 rounded-2xl w-4/12 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent "
					type="text"
					onChange={onChangeText}
					value={text}
				/>
				<button
					className="cursor-pointer leading-10 rounded-2xl text-white w-20 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
					onClick={onSubmitButton}
				>
					送信
				</button>
			</div>
			<ul>
				{tasks.map((task, index) => {
					return (
						<div key={task}>
							<li>{task}</li>
							<span onClick={() => onDeleteButton(index)}>削除</span>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
