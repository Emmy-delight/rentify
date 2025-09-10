export function TimeStampToDate (stamp) {
    const t = new Date(stamp);
    return t.toLocaleDateString();
}