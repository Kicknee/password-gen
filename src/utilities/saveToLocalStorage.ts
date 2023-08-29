export function saveToLocalStorage(password: string): void {
  if (!localStorage.getItem("passwordsHistory")) {
    localStorage.setItem("passwordsHistory", JSON.stringify([password]));
  } else {
    const source = localStorage.getItem("passwordsHistory") as string;
    let passwordsHistory: string[] = [...JSON.parse(source), password];

    localStorage.setItem("passwordsHistory", JSON.stringify(passwordsHistory));
  }
}
