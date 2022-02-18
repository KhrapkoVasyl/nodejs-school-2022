import * as os from 'os';
import * as si from 'systeminformation';

export const listSysInfo = async (template: string): Promise<string> => {
  let sysInfo: string = template;
  const defaultValue: string = 'N/A';

  const osInfo: string = os.platform() || defaultValue;
  sysInfo = sysInfo.replace('OS', osInfo);
  const arch: string = os.arch() || defaultValue;
  sysInfo = sysInfo.replace('ARCH', arch);
  const userName: string = os.userInfo()?.username || defaultValue;
  sysInfo = sysInfo.replace('CUR_N', userName);

  const cpuModels =
    os
      .cpus()
      .reduce(
        (acc, cur) =>
          acc.indexOf(cur.model) === -1 ? [...acc, cur.model] : acc,
        []
      )
      .join(',\t') || defaultValue;

  sysInfo = sysInfo.replace('CPU_M', cpuModels);

  const cpuTemperatureInfo = await si.cpuTemperature();
  const temperature: string =
    cpuTemperatureInfo?.main?.toString() || defaultValue;
  sysInfo = sysInfo.replace('CPU_T', temperature);

  // graphic controllers

  const graphicInfo = await si.graphics();
  const graphConrollers = graphicInfo?.controllers
    .map(el => `${el.vendor} - ${el.model}`)
    .join(',\t');

  sysInfo = sysInfo.replace('GRAPH_CONTR', graphConrollers);

  // Memory

  const bytesPerGigabyte = 1073741824;

  const totalMem: string | number =
    (os.totalmem() / bytesPerGigabyte).toFixed(4) || defaultValue;

  const freeMem: string | number =
    (os.freemem() / bytesPerGigabyte).toFixed(4) || defaultValue;

  const usedMem: string | number =
    (+totalMem - +freeMem).toFixed(4) || defaultValue;

  sysInfo = sysInfo.replace('TOTAL_MEM', totalMem?.toString());
  sysInfo = sysInfo.replace('USED_MEM', usedMem?.toString());
  sysInfo = sysInfo.replace('FREE_MEM', freeMem?.toString());

  //Battery

  const batteryInfo = await si.battery();
  const charging = batteryInfo?.isCharging?.toString() || defaultValue;
  const percent = batteryInfo?.percent?.toString() || defaultValue;
  const remainingTime = batteryInfo?.timeRemaining?.toString() || defaultValue;

  sysInfo = sysInfo.replace('B_CHRG', charging);
  sysInfo = sysInfo.replace('B_PERC', percent);
  sysInfo = sysInfo.replace('B_REM_TIME', remainingTime);

  return sysInfo;
};
