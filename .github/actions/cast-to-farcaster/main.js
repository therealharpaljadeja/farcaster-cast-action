const { NeynarAPIClient } = require("@neynar/nodejs-sdk");
const core = require("@actions/core");

async function run() {
    // Input values to the action
    let message = core.getInput("message", { required: true });
    let signerUUID = core.getInput("signer-uuid", { required: true });
    let neynarApiKey = core.getInput("neynar-api-key", { required: true });
    let releaseUrl = core.getInput("release-url");
    let channelId = core.getInput("channel-id", { required: false });

    const client = new NeynarAPIClient(neynarApiKey);

    await client.publishCast(signerUUID, message, {
        embeds: [{ url: releaseUrl }],
        channelId: channelId ?? undefined,
    });
}

run();
