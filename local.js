import http from 'k6/http';
import { sleep, check } from 'k6';

// lokal server, 100ms hoorondoltoi endpoint
export const options = { vus: 5, duration: '30s' };

export default function () {
  const res = http.get('http://localhost:3000/slow');
  check(res, { 'status 200 baina': (r) => r.status === 200 });
  sleep(1);
}
