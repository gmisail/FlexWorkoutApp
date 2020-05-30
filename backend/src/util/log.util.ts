import chalk from "chalk";

export default class Log
{
    static title: string = "flex";

    static error(message: string)
    {
        console.log(chalk.red("[" + Log.title + "] " + message));
    }

    static success(message: string)
    {
        console.log(chalk.green("[" + Log.title + "] " + message));
    }

    static info(message: string)
    {
        console.log(chalk.yellow("[" + Log.title + "] " + message));
    }
}