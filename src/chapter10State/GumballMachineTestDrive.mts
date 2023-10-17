import { GumballMachine } from './GumballMachine.mjs';

export class GumballMachineTestDrive {
  public static run(): void {
    const gumballMachine = new GumballMachine(10);

    console.log(gumballMachine.toString());

    console.log('------------------');

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine.toString());

    console.log('------------------');

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine.toString());

    console.log('------------------');

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine.toString());

    console.log('------------------');

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine.toString());

    console.log('------------------');

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());
  }
}
