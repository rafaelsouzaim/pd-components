export function appendClassName(fixed: string, appended?: string) {
  const splittedFixed = fixed.split(' ');
  const appendedDynamic = appended?.split(' ');
  const merged = [...splittedFixed, ...(appendedDynamic ?? [])];
  return merged.join(' ');
}