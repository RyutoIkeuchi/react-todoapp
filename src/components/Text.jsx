export const Text = (props) => {
  return (
		<ul className="bg-red-400 w-4/5 m-auto min-h-screen rounded-3xl py-10">
			{props.tasks.map((task, index) => {
				return (
					<li
						className="flex justify-between p-4 bg-white w-3/5 m-auto mb-6 rounded-full"
						key={task}
					>
						<p className="mr-6 text-2xl">{task}</p>
						<button
							className="cursor-pointer leading-8	rounded-2xl text-white w-16 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
							onClick={() => props.onDeleteButton(index)}
						>
							削除
						</button>
					</li>
				);
			})}
		</ul>
	);
}