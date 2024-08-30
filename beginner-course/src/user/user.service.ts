import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    get() {
        return { name: "Fakher Zaman", email: "fakherzamanofficial@gmail.com" };
    }

    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    update(updateUserDto: UpdateUserDto, param: { userId: number }) {
        return { body: updateUserDto, param };
    }

    show(param: { userId: number }) {
        return param;
    }

    delete(param: { userId: number }) {
        return param;
    }
}
