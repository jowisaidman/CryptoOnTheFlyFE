import { Command, ProviderRequest } from "../models";

export function dispatchEvent(command: Command) {
  const event = new CustomEvent("PyxineInterception", {
    detail: command,
  });

  window.dispatchEvent(event);
}