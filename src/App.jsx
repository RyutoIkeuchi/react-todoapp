import { useState } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [tasks, setTasks] = useState([]);

	const onChangeText = (e) => {
		return setText(e.target.value);
	};

	const onSubmitButton = () => {
		setTasks([...tasks,text]);
		setText('');
	};

	return (
		<div className="App">
			<h1 className="text-center mt-8">こんにちは</h1>
			<div>
				<input
					className="border-solid border border-gray-700"
					type="text"
					onChange={onChangeText}
					value={text}
				/>
				<button onClick={onSubmitButton}>送信</button>
			</div>
			<ul>
				{tasks.map((task) => {
          return (
            <div key={task}>
              <li>{task}</li>
            </div>
          )
				})}
			</ul>
		</div>
	);
}

export default App;
