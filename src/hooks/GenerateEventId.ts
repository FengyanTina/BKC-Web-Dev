let eventGuid = 0;
export function createEventId(): string {
  return String(eventGuid++);
}