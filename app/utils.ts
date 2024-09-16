import * as yaml from 'js-yaml';

export const yml = async (content: string) => {
  try {
    // Parse the YAML content into a JavaScript object
    return yaml.load(content);
  } catch (error) {
    console.error("Error reading or parsing YAML:", error);
    throw error; // Re-throw the error after logging
  }
};
