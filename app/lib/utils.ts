export function ConvertStringToTime(time:string) {
    const date = new Date(time);

    return date.toLocaleDateString('en-GB', {
        day:"numeric",
        month:"short",
        year:"numeric"
    });
}