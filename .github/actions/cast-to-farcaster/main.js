const { NeynarAPIClient } = require("@neynar/nodejs-sdk");
const core = require("@actions/core");

async function run() {
    // Input values to the action
    let message = core.getInput("message", { required: true });
    let signerUUID = core.getInput("signer-uuid", { required: true });
    let neynarApiKey = core.getInput("neynar-api-key", { required: true });

    const client = new NeynarAPIClient(neynarApiKey);

    try {
        await client.publishCast(signerUUID, message);
    } catch (error) {
        core.error("Something went wrong!");
    }
}

run();
