import { Inject, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}

@Injectable()
export class HttpService<T> {
    @Inject('HTTP_OPTIONS')
    private readonly httpClient: T;
}
