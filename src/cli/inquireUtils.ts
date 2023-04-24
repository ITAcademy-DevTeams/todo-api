import inquirer from "inquirer";

const confirmOperation = async (message: string): Promise<boolean> => {
	const question = [
		{
			type: "confirm",
			name: "ok",
			message,
		},
	];

	const { ok } = await inquirer.prompt(question);

	return ok;
};
const readInput = async (message: string): Promise<string> => {
	const question = [
		{
			type: "input",
			name: "description",
			message,
			validate(value: string) {
				if (value.length === 0) {
					return "Please, add  a value";
				}

				return true;
			},
		},
	];
	const { description } = await inquirer.prompt(question);

	return description;
};
const pause = async (): Promise<void> => {
	const questions = [
		{
			type: "input",
			name: "enter",
			message: `Presione para continuar`,
		},
	];

	console.log("\n");
	await inquirer.prompt(questions);
};
export { confirmOperation, pause, readInput };
