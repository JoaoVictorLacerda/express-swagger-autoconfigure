export default class LoggerComponent {



    public debug(message: string): void {

        console.log(message, "level: DEBUG");

    }

    public info(message: string): void {

        console.log(message, "level: INFO");

    }

    public error(message: string, error:unknown): void {

        console.error(message, error, "level: ERROR");

    }


    public warn(message: string): void {

        console.log(message, "level: WARN");

    }
}