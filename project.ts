import { Project } from "slack-cloud-sdk/mod.ts";
import { ReverseString } from "./functions/reverse.ts";
import { ReverseEchoString } from "./workflows/reverse_echo.ts";
import { ReverseEchoShortcut } from "./triggers/reverse_echo_shortcut.ts";
import { YellFunction } from "./functions/yell.ts";
import { YellWorkflow } from "./workflows/yell.ts";
import { YellShortcut } from "./triggers/yell_shortcut.ts";
import { CreateIncident } from "./functions/create_incident.ts"; 
import { NewIncidentWorkflow } from "./workflows/new_incident.ts";
import { NewIncidentShortcut } from "./triggers/new_incident_shortcut.ts";

// import the Reversals table and include it in the `tables` array
// below to store data via the Tables API
// import { Reversals } from "./tables/reversals.ts";

Project({
  name: "sp-app",
  description:
    "A demo showing how to use Slack workflows, functions, and triggers",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  functions: [ReverseString,YellFunction,CreateIncident],
  workflows: [ReverseEchoString,YellWorkflow,NewIncidentWorkflow],
  triggers: [ReverseEchoShortcut,YellShortcut,NewIncidentShortcut],
  tables: [],
  outgoingDomains: [],
});
