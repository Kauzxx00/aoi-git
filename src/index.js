const fs = require("fs");
const path = require("path");

class AoiGit {
    constructor(client, username, repoLink) {
        if (!client?.client) {
            console.error(
                '"client" is not provided. Provide a valid client in handler.',
            );
            process.exit(1);
        }

        this.client = client.client;
        this.username = username;
        this.repoLink = repoLink;

        const functionsPath = path.join(__dirname, "./functions");
        for (const file of fs
            .readdirSync(functionsPath)
            .filter((file) => file.endsWith(".js"))) {
            const funcs = require(path.join(functionsPath, file));
            this.client.functionManager.createFunction(funcs);
        }
    }
}

module.exports = {
    AoiGit,
};
