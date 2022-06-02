import { Command, CommandOptions } from '@teambit/cli';

export class CmdExample implements Command {
  name = 'cmd-example';
  options: CommandOptions = [];
  async report() {
    return 'hello world'
  }
}