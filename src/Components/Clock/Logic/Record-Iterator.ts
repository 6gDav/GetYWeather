export default function GetTheValueViaKey(searchingRacord: Record<string, string>, searchingKey: string): NullAndString {
    for (const [key, value] of Object.entries(searchingRacord)) {
        if (key === searchingKey) //if the key equal with the searchd one
        {
            return value;
        }
    }
    return null;
}