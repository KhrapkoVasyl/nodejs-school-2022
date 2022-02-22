import * as os from 'os';
import * as _process from 'process';
import * as si from 'systeminformation';
import { listSysInfo } from './listSysInfo';
import { sysInfoTemplate } from './sysInfoTemplate';

const displayPeriodicallySysInfo = async (
  frequency?: number
): Promise<void> => {
  if (!frequency) frequency = +_process.argv[2];
  if (!frequency || frequency < 0) {
    console.error('Incorrectly set frequency');
    _process.exit(0);
  }

  console.log(await listSysInfo(sysInfoTemplate));
  setTimeout(displayPeriodicallySysInfo, frequency * 1000, frequency);
};

displayPeriodicallySysInfo();
