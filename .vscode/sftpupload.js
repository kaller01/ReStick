let Client = require("ssh2-sftp-client");
let sftp = new Client();
let glob = require("glob");
require("dotenv").config();

const localdir = "../frontend/dist";
const remotedir = "./restick";

sftp
  .connect({
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USER,
    password: process.env.PASSWORD,
  })
  .then(async () => {
    console.log(await sftp.mkdir(remotedir, true));
    console.log(await sftp.mkdir(remotedir + "/css", true));
    console.log(await sftp.mkdir(remotedir + "/js", true));
    console.log(await sftp.mkdir(remotedir + "/img", true));

    glob(localdir + "/**/*.*", null, async function (er, files) {
      for (const localfile of files) {
        const remotefile = localfile.replace(localdir, remotedir);
        try {
          // console.log(remotefile);
          const res = await sftp.fastPut(localfile, remotefile);
          console.log("Uploaded: " + remotefile);
        } catch (error) {
          console.log("ERROR: " + remotefile);
          console.log(error);
        }
      }

      sftp.end();
    });


    

    // console.log(await sftp.list("./restick2"));
  });
