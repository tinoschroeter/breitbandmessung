const speedTest = require("speedtest-net");
const express = require("express");
const app = express();

const BytesPerSecond2MegabitsPerSecond = (value) => {
  return ((value * 8) / 1024 / 1024).toFixed(2);
};

app.get("/", (req, res) => res.redirect("/metrics"));
app.get("/metrics", async (req, res) => {
  try {
    const result = await speedTest({ acceptGdpr: true, acceptLicense: true });

    const output =
      "# HELP speedtest_ping Latency (ms)\n# TYPE speedtest_ping gauge\n" +
      `speedtest_ping ${result.ping.latency}\n` +
      "# HELP speedtest_jitter Latency (ms)\n# TYPE speedtest_jitter gauge\n" +
      `speedtest_jitter ${result.ping.jitter}\n` +
      "# HELP speedtest_download Download bandwidth (Mbps).\n# TYPE speedtest_download gauge\n" +
      `speedtest_download ${BytesPerSecond2MegabitsPerSecond(
        result.download.bandwidth
      )}\n` +
      "# HELP speedtest_upload Upload bandwidth (Mbps).\n# TYPE speedtest_upload gauge\n" +
      `speedtest_upload ${BytesPerSecond2MegabitsPerSecond(
        result.upload.bandwidth
      )}\n` +
      "# HELP speedtest_packetLoss\n# TYPE speedtest_packetLoss gauge\n" +
      `speedtest_packetLoss ${result.packetLoss}\n` +
      "# HELP speedtest_isp\n# TYPE speedtest_isp gauge\n" +
      `speedtest_isp ${result.isp}\n` +
      "# HELP speedtest_externalIp\n# TYPE speedtest_externalIp gauge\n" +
      `speedtest_externalIp ${result.interface.externalIp}\n` +
      "# HELP speedtest_server_name\n# TYPE speedtest_server_name gauge\n" +
      `speedtest_server_name ${result.server.name}\n` +
      "# HELP speedtest_server_location\n# TYPE speedtest_server_location gauge\n" +
      `speedtest_server_location ${result.server.location}\n` +
      "# HELP speedtest_server_country\n# TYPE speedtest_server_country gauge\n" +
      `speedtest_server_country ${result.server.country}\n` +
      "# HELP speedtest_server_host\n# TYPE speedtest_server_host gauge\n" +
      `speedtest_server_host ${result.server.host}\n`;

    res.set("Content-Type", "text/plain");
    res.send(output);
  } catch (err) {
    console.log(err)
    res.set("Content-Type", "text/plain");
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 9112;
app.listen(port, () => {
  console.log(`Speedtest listen on port ${port}`);
});
