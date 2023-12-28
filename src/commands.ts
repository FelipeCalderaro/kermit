import { Command } from "./command";
import { Ping } from "./commands/utility/ping";
import { Server } from "./commands/utility/server";
import { User } from "./commands/utility/user";

export const Commands: Command[] = [
    Ping,
    Server,
    User,
];