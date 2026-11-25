import http from 'k6/http';
import { sleep, check } from 'k6';

// lokal server, 30 VU, SLO baseline-aas gargasan
export const options = {
  vus: 30,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<50'], // lokal baseline p95 (102.79ms) x 1.5 = 154ms
    http_req_failed: ['rate<0.01'],   // error rate 1%-aas baga
  },
};

export default function () {
  const res = http.get('http://localhost:3000/slow');
  check(res, { 'status 200 baina': (r) => r.status === 200 });
  sleep(1);
}
