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

    update(updateUserDto: UpdateUserDto, userId: number ) {
        return { body: updateUserDto, userId };
    }

    show(userId: number) {
        return { userId };
    }

    delete(userId: number) {
        return { userId };
    }
}
