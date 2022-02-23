const speedTest = require("speedtest-net");

const speed = async () => {
  try {
    console.log(await speedTest({ acceptGdpr: true }));
  } catch (err) {
    console.error(err.message);
  } finally {
    process.exit(0);
  }
};

speed();
