declare global {
    type NullAndString = string | null;
}

declare module '*.png'
{
    const value: string;
    export default value;
}

export { };