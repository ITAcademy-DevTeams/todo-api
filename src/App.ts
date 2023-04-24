import Inquirer from "./cli/inquirer.start";
import JsonTaskStorage from "./user/domain/repositories/JsonTaskStorage";
import Controller from "./user/infrastructure/controller";
import Service from "./user/infrastructure/service";

const path = "./src/jsonDB/db.json";
const jsonTaskStorage = new JsonTaskStorage(path);
const service = new Service(jsonTaskStorage);
const controller = new Controller(service);
const inquirer = new Inquirer(controller);

inquirer.start();
/* import {
	createTask,
	deleteTask,
	listTasks,
	searchTask,
	updateTask,
} from "./user/infrastructure/controller";
import { inquirerMenu, pause } from "./user/infrastructure/inquirer/inquirerMenu";

const main = async () => {
	let opt = "";
	do {
		console.clear();
		opt = await inquirerMenu();
		try {
			switch (opt) {
				case "1":
					await createTask();
					break;
				case "2":
					await listTasks();
					break;
				case "3":
					await updateTask();
					break;
				case "4":
					await searchTask();
					break;
				case "5":
					await deleteTask();
					break;
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log("An error occurred");
			}
		}
		await pause();
	} while (opt !== "0");
};

main(); */
