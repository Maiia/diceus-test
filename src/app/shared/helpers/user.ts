export function getInitials(name: string, surname: string): string {
    const first = name?.trim()?.[0] ?? '';
    const last = surname?.trim()?.[0] ?? '';
    return (first + last).toUpperCase();
}
