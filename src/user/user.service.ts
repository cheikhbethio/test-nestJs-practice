import { Injectable } from '@nestjs/common';
import { userData } from './user.data';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  public getAllUser(): UserDto[] {
    return userData;
  }
}
