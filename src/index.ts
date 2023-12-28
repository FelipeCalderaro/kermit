// Require the necessary discord.js classes
import { Client, GatewayIntentBits, } from 'discord.js';
import ready from "./listeners/ready"
import interactionCreate from './listeners/interactionCreate';

import 'dotenv/config'
import 'node:path';
import 'node:fs';


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
ready(client);
interactionCreate(client);

// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);