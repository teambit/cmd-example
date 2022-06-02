import { CLIAspect, CLIMain, MainRuntime } from '@teambit/cli';
import { CliExampleAspect } from './cli-example.aspect';
import { CmdExample } from './cmd-example.cmd';

export class CliExampleMain {
  // your aspect API goes here.
  getSomething() {}

  static slots = [];
  // define your aspect dependencies here.
  // in case you need to use another aspect API.
  static dependencies = [CLIAspect];

  static runtime = MainRuntime;

  static async provider([cli]: [CLIMain]) {
    cli.register(new CmdExample());
    return new CliExampleMain();
  }
}

CliExampleAspect.addRuntime(CliExampleMain);
