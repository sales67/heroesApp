## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Installation

docker build -t angular . -f Dockerfile-angular (port80)
docker build -t jsonserver . -f Dockerfile-jsonserver (port3000)

version: 3
services:
  foo:
    image: user/foo
    build:
      context: .../docks
      dockerfile: foo.Dockerfile
  bar:
    image: user/bar
    build:
      context: .../docks
      dockerfile: bar.Dockerfile