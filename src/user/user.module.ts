import { Inject, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {
  complexUseFactory,
  mockedService,
  Service2,
  simpleUseFactory,
  UserService,
} from './user.service';

@Module({
  controllers: [UserController],
  /**************default behaviour */
  providers: [UserService],

  // UseFactory
  // providers: [
  //   UserService,
  //   {
  //     provide: 'ServiceAlias',
  //     useExisting: UserService,
  //   },
  // ],

  // use simple UseFactory
  //   providers: [
  //     {
  //       provide: UserService,
  //       useFactory: simpleUseFactory.useFactory,
  //     },
  //   ],

  // use simple UseFactory
  // providers: [
  //   Service2,
  //   {
  //     provide: UserService,
  //     ...complexUseFactory,
  //   },
  // ],

  /**************useClass */
  /**
   ceci est la meme chose
   providers : [
   {
    provide: UserService,
    useClass: UserService
   }
   ]
   */
  /**************UseValue */

  // providers: [
  //   {
  //     provide: UserService,
  //     useValue: mockedService,
  //   },
  // ],

  // non-class based providers
  // providers: [
  //   UserService,
  //   {
  //     provide: 'mock',
  //     useValue: mockedService,
  //   },
  // ],
  // for injection do this in the constructor of the class where we Inject
  // constructor(@Inject('mock') mock:  mockedService){}
})
export class UserModule {}
