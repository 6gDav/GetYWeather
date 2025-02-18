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

const AskTheClockMaker = (contient: string, town: string) => {
  let intervall = setInterval(() => {
    let time = makeTheActualClcok(contient, town);
    const clockHeadingEL: HTMLHeadElement = document.getElementById('clock')! as HTMLHeadElement;
    clockHeadingEL.innerText = time;
    console.log(time);
  }, 1_000);
  intervall;
};

export default AskTheClockMaker;