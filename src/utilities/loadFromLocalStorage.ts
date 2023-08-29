export function loadFromLocalStorage(): string[] {
  return JSON.parse(localStorage.getItem("passwordsHistory") as string) || [];
}
