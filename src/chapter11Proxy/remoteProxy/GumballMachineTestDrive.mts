import { LocalGumballMachine } from './gumballMachine/LocalGumballMachine.mjs';
import { GumballMonitor } from './GumballMonitor.mjs';
import { RmiGumballMachine } from './rmi/RmiGumballMachine.mjs';
import { RmiServer } from './rmi/RmiServer.mjs';
import { RmiSkeleton } from './rmi/RmiSkeleton.mjs';
import { RmiStub } from './rmi/RmiStub.mjs';

export class GumballMachineTestDrive {
  public static async run() {
    const rmiServer = new RmiServer(false);

    const localGumballMachine1 = new LocalGumballMachine('Santafe', 100);
    const localGumballMachine2 = new LocalGumballMachine('Boulder', 100);
    const localGumballMachine3 = new LocalGumballMachine('Austin', 250);

    const rmiSkeleton1 = new RmiSkeleton(localGumballMachine1, 'RemoteGumballMachineSkeleton1', false);
    const rmiSkeleton2 = new RmiSkeleton(localGumballMachine2, 'RemoteGumballMachineSkeleton2', false);
    const rmiSkeleton3 = new RmiSkeleton(localGumballMachine3, 'RemoteGumballMachineSkeleton3', false);

    const rmiStub1 = new RmiStub('RemoteGumballMachineStub1', 'RemoteGumballMachineSkeleton1', false);
    const rmiStub2 = new RmiStub('RemoteGumballMachineStub2', 'RemoteGumballMachineSkeleton2', false);
    const rmiStub3 = new RmiStub('RemoteGumballMachineStub3', 'RemoteGumballMachineSkeleton3', false);

    const rmiGumballMachine1 = new RmiGumballMachine(rmiStub1);
    const rmiGumballMachine2 = new RmiGumballMachine(rmiStub2);
    const rmiGumballMachine3 = new RmiGumballMachine(rmiStub3);

    await rmiServer.serve();
    await rmiSkeleton1.rebind();
    await rmiSkeleton2.rebind();
    await rmiSkeleton3.rebind();

    await rmiStub1.lookUp();
    await rmiStub2.lookUp();
    await rmiStub3.lookUp();

    await new GumballMonitor(rmiGumballMachine1).report();
    await new GumballMonitor(rmiGumballMachine2).report();
    await new GumballMonitor(rmiGumballMachine3).report();

    for (let i = 0; i < 10; i++) {
      localGumballMachine1.insertQuarter();
      localGumballMachine1.turnCrank();

      localGumballMachine2.insertQuarter();
      localGumballMachine2.turnCrank();

      localGumballMachine3.insertQuarter();
      localGumballMachine3.turnCrank();
    }

    await new GumballMonitor(rmiGumballMachine1).report();
    await new GumballMonitor(rmiGumballMachine2).report();
    await new GumballMonitor(rmiGumballMachine3).report();

    rmiServer.close();
  }
}
