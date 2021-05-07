export const Form = (props) => {
  return (
		<div className="mb-20">
			<input
				className="mr-6 shadow-md leading-10 rounded-2xl w-4/12 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent "
				type="text"
				onChange={props.onChangeText}
				value={props.text}
			/>
			<button
				className="cursor-pointer leading-10 rounded-2xl text-white w-20 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
				onClick={props.onSubmitButton}
			>
				送信
			</button>
		</div>
	);
}