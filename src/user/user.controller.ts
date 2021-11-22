import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Redirect,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   *
   * request with dto
   */
  @Get()
  getAllUser(): UserDto[] {
    return this.userService.getAllUser();
  }

  // routing
  // request params
  @Get('/willcards**')
  getAllWithWillCards() {
    return 'response for route willcard';
  }

  @Get('/with-custom-http-code')
  @HttpCode(200)
  getWithCustomHttpCode() {
    return 'response with custom http code';
  }

  @Post('/set-header')
  @Header('Cache-Control', 'none')
  create() {
    return 'create with setting header response';
  }

  @Get('/redirection-http')
  @Redirect('https://nestjs.com', 301)
  getWithRedirection() {
    return '';
  }

  @Get('/dynamic-redirection-http')
  @Redirect('https://nestjs.com', 301)
  getWithDynamicRedirection() {
    return {
      url: 'https://angular.io/cli',
      statusCode: 301,
    };
  }

  /**
   *
   * Also, in the example above, you lose compatibility with Nest features that depend on Nest standard response handling,
   * such as Interceptors and @HttpCode() / @Header() decorators.
   * To fix this, you can set the passthrough option to true, as follows:
   *
   @Get()
    findAll(@Res({ passthrough: true }) res: Response) {
      res.status(HttpStatus.OK);
      return [];
    }
   */
  @Get('/with-custom-response')
  getWithCustomResponse(@Res() res: Response) {
    return res.status(HttpStatus.OK).send('with-custom-response');
  }

  @Get(':id')
  findOne(@Param() params) {
    /**
     * we can retrive params one by one
     * @Param('id') id: string
     * @Param('name') name: string
     */
    return `Action is called with param id #${params.id}`;
  }
}
