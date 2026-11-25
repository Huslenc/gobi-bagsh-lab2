import http from 'k6/http';
import { sleep, check } from 'k6';

// Stages-gui huvilbar: vus/duration-iig --vus --duration-aar davhar
export const options = { vus: 5, duration: '30s' };

export default function () {
  const res = http.get('https://test.k6.io'); // zuvshuursun bai
  check(res, { 'status 200 baina': (r) => r.status === 200 });
  sleep(1);
}
