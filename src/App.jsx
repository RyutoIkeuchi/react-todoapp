import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Text } from './components/Text';

function App() {
	const [text, setText] = useState('');
	const [tasks, setTasks] = useState([]);

	const onChangeText = (e) => {
		return setText(e.target.value);
	};

	const onSubmitButton = () => {
		if (text === '') return;
		const newTask = [...tasks, text];
		setTasks(newTask);
		setText('');
	};

	const onDeleteButton = (index) => {
		const newTask = [...tasks];
		newTask.splice(index, 1);
		setTasks(newTask);
	};

	return (
		<div className="w-4/6 mx-auto py-20 text-center bg-red-50 min-h-screen">
			<h1 className="mb-10	text-5xl ">React Todo</h1>
			<Form
				text={text}
				onChangeText={onChangeText}
				onSubmitButton={onSubmitButton}
			/>
			<Text tasks={tasks} onDeleteButton={onDeleteButton} />
		</div>
	);
}

export default App;
