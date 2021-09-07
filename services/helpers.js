export const serialize = value => (value ? '?' + (new URLSearchParams(value)).toString() : '');
