function makeTheActualClcok(continent: string, capital: string) {
  const timeZone = `${continent}/${capital.replace(/\s+/g, "_")}`;

  try {
    // Format date and time based on the time zone
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeStyle: "medium",
      hour12: false,
    });

    return formatter.format(new Date());
  }
  catch (error) {
    return `Invalid continent or capital: ${continent}/${capital}.`;
  }
}

let intervall: NodeJS.Timeout | undefined;

const AskTheClockMaker = (continent: string, town: string) => {
  SetClokcToNull();
  intervall = setInterval(() => {
    let time = makeTheActualClcok(continent, town);
    const clockHeadingEL = document.getElementById('clock')! as HTMLHeadElement;
    clockHeadingEL.innerText = time;
  }, 1_000);
};

export const SetClokcToNull = () => {
  if (intervall) {
    clearInterval(intervall);
    intervall = undefined;
  }
};

export default AskTheClockMaker;