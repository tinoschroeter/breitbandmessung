# Breitbandmessung

[https://www.breitbandmessung.de](https://www.breitbandmessung.de/)

[Speedtest](https://www.speedtest.net) exporter for Prometheus.

## /metrics

```text
# HELP speedtest_ping Latency (ms)
# TYPE speedtest_ping gauge
speedtest_ping 8.353
# HELP speedtest_jitter Latency (ms)
# TYPE speedtest_jitter gauge
speedtest_jitter 0.069
# HELP speedtest_download Download bandwidth (Mbps).
# TYPE speedtest_download gauge
speedtest_download 80.65
# HELP speedtest_upload Upload bandwidth (Mbps).
# TYPE speedtest_upload gauge
speedtest_upload 34.61
# HELP speedtest_packetLoss
# TYPE speedtest_packetLoss gauge
speedtest_packetLoss 0
```

## /json

```json
{
  "timestamp": "2022-02-23T18:18:33.000Z",
  "ping": {
    "jitter": 0.297,
    "latency": 11.996
  },
  "download": {
    "bandwidth": 2222951,
    "bytes": 29649600,
    "elapsed": 15005
  },
  "upload": {
    "bandwidth": 4576761,
    "bytes": 45745920,
    "elapsed": 10609
  },
  "packetLoss": 11.666666666666666,
  "isp": "O2 Deutschland",
  "interface": {
    "internalIp": "10.0.1.151",
    "name": "wlp3s0",
    "macAddr": "A0:88:B4:9A:37:B4",
    "isVpn": false,
    "externalIp": "95.116.155.244"
  },
  "server": {
    "id": 4087,
    "name": "wilhelm.tel",
    "location": "Norderstedt",
    "country": "Germany",
    "host": "speedtest.wtnet.de",
    "port": 8080,
    "ip": "213.209.106.95"
  },
  "result": {
    "id": "f2a0bce5-10e2-48a7-a951-30d49b298586",
    "url": "https://www.speedtest.net/result/c/f2a0bce5-10e2-48a7-a951-30d49b298586"
  }
}
```

## Grafana Dashboard

[https://grafana.com/grafana/dashboards/15808](https://grafana.com/grafana/dashboards/15808)

![Dashboard](https://raw.githubusercontent.com/tinoschroeter/breitbandmessung/master/grafana.png)
