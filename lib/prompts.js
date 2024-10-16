import { input, select } from "@inquirer/prompts";

export async function prompt_app_name() {
  const app_name = await input({
    message: "What is your project named?",
    default: "app-name"
  });

  return app_name;
}

export async function prompt_language() {
  const language = await select({
    message: "What is your preferred language?",
    choices: [
      {
        name: "JavaScript",
        value: "javascript",
      },
      {
        name: "TypeScript",
        value: "typescript",
      }
    ],
    default: "javascript"
  });

  return language;
}

export async function prompt_state_lib() {
  const state_lib = await select({
    message: "What is your preferred state management lib?",
    choices: [
      {
        name: "Zustand",
        value: "zustand",
        description: "(npmjs.com/package/zustand)",
      },
      {
        name: "Redux Toolkit",
        value: "redux-toolkit",
        description: "(npmjs.com/package/redux-toolkit)"
      }
    ],
    default: "zustand"
  });

  return state_lib;
}
