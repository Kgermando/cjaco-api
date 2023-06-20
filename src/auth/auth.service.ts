import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor( ) { }



    // async userId(jwt: string): Promise<number> { 

    //     console.log(jwt);

    //     const data = await this.jwtService.verifyAsync(jwt);

    //     return data['id'];
    // }
}
