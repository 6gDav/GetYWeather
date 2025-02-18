export default function GetTheValueViaKey(searchingRacord: Record<string, string>, searchingKey: string): NullAndString {
    for (const [key, value] of Object.entries(searchingRacord)) {
        if (key === searchingKey) {
            return value;
        }
    }
    return null;
}