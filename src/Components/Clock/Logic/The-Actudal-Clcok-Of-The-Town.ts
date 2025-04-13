function makeTheActualClcok(continent: string, capital: string) {
  const timeZone = `${continent}/${capital.replace(/\s+/g, "_")}`; //replcae the miss leading characters

  try //Set the time
  {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeStyle: "medium",
      hour12: false,
    });

    return formatter.format(new Date()); //format the actual time
  }
  catch (error) {
    return `Invalid continent or capital: ${continent}/${capital}.`;
  }
}

let intervall: NodeJS.Timeout | undefined;

//start the clock
const AskTheClockMaker = (continent: string, town: string) => {
  SetClokcToNull();
  intervall = setInterval(() => {
    let time = makeTheActualClcok(continent, town);
    const clockHeadingEL = document.getElementById("clock")! as HTMLHeadElement;
    clockHeadingEL.innerText = time;
  }, 1_000); //update every sec
};

//Reaset the clock if there is anathor city
export const SetClokcToNull = () => {
  if (intervall) {
    clearInterval(intervall);
    intervall = undefined;
  }
};

export default AskTheClockMaker;