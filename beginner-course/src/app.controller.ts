import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getMessage() {
        return 'I am from main controller';
    }
}
