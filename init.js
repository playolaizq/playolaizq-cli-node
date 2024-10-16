#!/usr/bin/env node

import path from "path";
import { copy_dir_recursively } from "./lib/filesystem.js";
import {
  prompt_app_name,
  prompt_language,
  prompt_state_lib
} from "./lib/prompts.js";

async function init() {
  console.log("===============================");
  console.log("   Welcome to playolaizq CLI   ");
  console.log("===============================");

  const app_name = await prompt_app_name();
  const language = await prompt_language();
  const state_lib = await prompt_state_lib();
  
  const copy_start_time = Date.now();

  const source = `./templates/react-vite-${language}-${state_lib}`;
  const destination = `./${app_name}`;
  console.log(`Copying template... ${source}`);

  await copy_dir_recursively(source, destination);

  const copy_end_time = Date.now();
  const duration = copy_end_time - copy_start_time;
  const duration_in_seconds = duration / 1000;

  console.log(`✨ Done in ${duration_in_seconds}s`);
  console.log(`📦 Your app is ready at ${path.resolve(destination)}`)
}

init();
