import { Controller, Get, Inject } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  // constructor(private userService: UserService) { }
  // Use Existingclass
  // constructor(@Inject('ServiceAlias') private userService: UserService){}
  private userService: UserService;

  // You can't retrieve scoped providers (transient or request-scoped) with the get() method.
  // constructor(private modulRef: ModuleRef) {
  //   this.userService = modulRef.get(UserService);
  // }

  // To dynamically resolve a scoped provider (transient or request-scoped), use the resolve() method, passing the provider's injection token as an argument.
  // constructor(private modulRef: ModuleRef) {
  //   this.userService = await modulRef.resolve(GlobalServiceName);
  // }

  // if want to retrive instance form global context => example other module
  // constructor(private modulRef: ModuleRef) {
  //   this.userService = modulRef.get(UserService, { strict: false });
  // }

  //  la methode resolve retourne un identifiant qui depend du context. en l'appemelant plusieur fois
  // on a differenst instance. si on veut avoir la même instance il faut passer en parametre le contectid
  // constructor(private modulRef: ModuleRef) {
  //   const contextId = ContextIdFactory.create();
  //   const transientServices = await Promise.all([
  //     this.modulRef.resolve(UserServiceTransient, contextId),
  //     this.modulRef.resolve(UserServiceTransient, contextId),
  //   ]);
  // }

  // on peut aussi créer une instance d'une class qui n'a pas été déclarée comme proviver
  // private catsFactory: CatsFactory;
  // constructor(private moduleRef: ModuleRef) {}

  // async onModuleInit() {
  //   this.catsFactory = await this.moduleRef.create(CatsFactory);
  // }

  // on peut avoir des services optionnel
  // ==> directement dans le constructeur
  //   constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
  // ==> ou dans les attributs de la class
  //   @Inject('HTTP_OPTIONS')
  //   private readonly httpClient: T;
  // If your class doesn't extend another provider, you should always prefer using constructor-based injection.

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/with-promise')
  getUsersWithPromise() {
    return this.userService.getAllUsersWithPromise();
  }

  @Get('/with-observable')
  getUsersWithObservale() {
    return this.userService.getAllUsersWithObservable();
  }
}
