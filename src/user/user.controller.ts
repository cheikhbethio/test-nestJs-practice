import { Controller, Get } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUser(): UserDto[] {
    return this.userService.getAllUser();
  }
}
