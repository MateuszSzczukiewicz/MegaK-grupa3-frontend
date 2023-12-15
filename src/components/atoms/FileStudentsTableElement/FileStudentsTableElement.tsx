import { useState } from 'react';
import { FileStudentsTableElementProps } from '../../../types/HrStudentsAdd.type.ts';
import { Stars } from '../../../types/General/General.types';

export const FileStudentsTableElement = ({
	id,
	column,
	text,
	type,
	changeData,
}: FileStudentsTableElementProps) => {
	const [editMode, setEditMode] = useState<boolean>(false);
	const [value, setValue] = useState<string | string[] | Stars>(text);

	const modeHandler = () => {
		setEditMode((prevState) => !prevState);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const newText = !e.target[0].value ? text : e.target[0].value;

		modeHandler();
		setValue(newText);
		changeData(id, column, newText);
	};
	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<td>
			{!editMode ? (
				<p onDoubleClick={modeHandler}>{text}</p>
			) : (
				<form onSubmit={(e) => submitHandler(e)}>
					{type ? (
						<input
							onChange={(e) => changeHandler(e)}
							autoFocus={true}
							type={type}
							value={value}
							placeholder={String(text)}
						/>
					) : (
						<input
							onChange={(e) => changeHandler(e)}
							autoFocus={true}
							type="text"
							value={value}
							placeholder={String(text)}
							pattern="[1-5]"
						/>
					)}
					<button>Save</button>
				</form>
			)}
		</td>
	);
};
