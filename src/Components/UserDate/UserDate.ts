export default class Infos {
    //#region Town Name
    private static townName: string = ''; //field

    static get TownName(): string {
        return this.townName;
    }

    static set TownName(value: string) {
        this.townName = value;
    }
    //#endregion

    //#region Town Continent
    private static continent: string = ''; //filed

    static get Continent(): string {
        return this.continent;
    }

    static set Continent(value: string) {
        this.continent = value;
    }
    //#endregion
}