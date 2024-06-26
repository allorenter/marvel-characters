export function normalizeString(str: string) {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function getSecureUrl(uri: string) {
  return uri.replace('http://', 'https://');
}
