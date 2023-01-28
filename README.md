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

## Kubernetes deployment

* [prometheus_exporter](https://github.com/tinoschroeter/prometheus_exporter)
* [Deployment](https://github.com/tinoschroeter/prometheus_exporter/blob/master/k3s/base/speedtest.yaml)
* [Dockerfile](https://github.com/tinoschroeter/prometheus_exporter/blob/master/Dockerfile#L2-L13)

## Grafana Dashboard

[https://grafana.com/grafana/dashboards/15808](https://grafana.com/grafana/dashboards/15808)

![Dashboard](https://raw.githubusercontent.com/tinoschroeter/breitbandmessung/master/grafana.png)
