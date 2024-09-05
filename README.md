<h1 align="center">
  aoi.git
</h1>
<b>test</b>

<h2 align="center">
  Setup
</h2>

```js
//aoi setup
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "Discord Bot Token",
  prefix: "Discord Bot Prefix",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

//aoi.git setup
const { AoiGit } = require("aoi.git");
const aoigit = new AoiGit({
  client: client, // or bot as per your config
});
```

<h2 align="center">
  Current Functions
</h2>

- `$gitCommit`

<h2 align="center">
  Credits
</h2>

- kauzx00