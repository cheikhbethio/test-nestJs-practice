/* eslint-disable @typescript-eslint/no-empty-function */
import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { of } from 'rxjs';

@Injectable()
export class Service2 {
  getValue() {
    return 20;
  }
}

@Injectable()
export class UserService {
  // for injection do this in the constructor of the class where we Inject
  // constructor(@Inject('mock') private mock: UserService) {}
  // public getAllUsers() {
  //   return this.mock.getAllUsers();
  // }

  public getAllUsers() {
    return 'all users';
  }

  public getAllUsersWithPromise() {
    return Promise.resolve('all users in promise mode');
  }

  public getAllUsersWithObservable() {
    return of('all users in observable mode');
  }
}

@Injectable({ scope: Scope.REQUEST })
export class OtherScopeService {}

// class ToUse {}
// @Injectable({
//   provide: CACHE_MANAGER,
//   useClass: ToUse,
//   scope: Scope.TRANSIENT,
// })
// export class TransientScopeService {}

// get request provider in the service
@Injectable({ scope: Scope.REQUEST })
export class HandleRequestInTheService {
  constructor(@Inject(REQUEST) private request: Request) {}
}
export const simpleUseFactory = {
  useFactory: () => mockedService,
  // other posiblity
  // return process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
};

export const complexUseFactory = {
  useFactory: (service2: Service2) => {
    return {
      getAllUsers: () => {
        return 100 + service2.getValue();
      },
      getAllUsersWithPromise: () => {},
      getAllUsersWithObservable: () => {},
    };
  },
  inject: [Service2],
};

export const mockedService = {
  getAllUsers: () => {
    return 100;
  },
  getAllUsersWithPromise: () => {},
  getAllUsersWithObservable: () => {},
};
