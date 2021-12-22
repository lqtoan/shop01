import { UrlSegment } from '@angular/router';

export function formatPrice(value) {
  value = value.toString().replace(/[\,]+/g, '');
  value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return value.concat();
}

export function cutStringWithLength(text: string, length: number) {
  if (!text) return '';
  if (text.length <= length) return text;

  return text.slice(0, length);
}

export function customMatcher(url: UrlSegment[], type: string[]) {
  if (url.length === 0 || type.length === 0) return null;
  if (url[0].path.indexOf('-') < 0) return null;
  let arr = url[0].path.split('-');
  let match = false;
  type.forEach((i) => {
    if (arr[arr.length - 1].indexOf(i) > -1) {
      match = true;
    }
  });

  return match ? { consumed: url } : null;
}
