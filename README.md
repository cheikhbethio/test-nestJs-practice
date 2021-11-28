<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Providers]
Il y'a 3 type de provider:
# DEFAULT
A single instance of the provider is shared across the entire application. The instance lifetime is tied directly to the application lifecycle. Once the application has bootstrapped, all singleton providers have been instantiated. Singleton scope is used by default.

# REQUEST
A new instance of the provider is created exclusively for each incoming request. The instance is garbage-collected after the request has completed processing.

# TRANSIENT
Transient providers are not shared across consumers. Each consumer that injects a transient provider will receive a new, dedicated instance.


# Divers
Controllers have default scope. Declare controller scope with the scope property of the ControllerOptions object:
@Controller({
  path: 'cats',
  scope: Scope.REQUEST,
})
export class CatsController {}

# Scope hierarchy
Scope bubbles up the injection chain. A controller that depends on a request-scoped provider will, itself, be request-scoped.
Imagine the following dependency graph: CatsController <- CatsService <- CatsRepository. If CatsService is request-scoped (and the others are default singletons), the CatsController will become request-scoped as it is dependent on the injected service. The CatsRepository, which is not dependent, would remain singleton-scoped.

# Request provider
In an HTTP server-based application (e.g., using @nestjs/platform-express or @nestjs/platform-fastify), you may want to access a reference to the original request object when using request-scoped providers

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
