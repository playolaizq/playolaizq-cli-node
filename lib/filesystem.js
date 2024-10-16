import { promises as fs } from "fs";
import path from "path";

/**
 * @param {String} source
 * @param {String} destination
 */
export async function copy_dir_recursively(source, destination) {
  await fs.mkdir(destination, { recursive: true });

  const entries = await fs.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const source_path = path.join(source, entry.name);
    const destination_path = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copy_dir_recursively(source_path, destination_path);
    } else {
      await fs.copyFile(source_path, destination_path);
    }
  }
}
