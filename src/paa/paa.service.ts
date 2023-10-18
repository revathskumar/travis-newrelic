import { Injectable } from '@nestjs/common';

@Injectable()
export class PaaService {
    getPaa(): string {
        return 'Hello Paa!';
    }
}
