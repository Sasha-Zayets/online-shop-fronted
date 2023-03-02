import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private readonly cookiePrefix = '';

  constructor() { }

  public setCookie(name: string, value: string, expireDays: number, path: string = ''): void {
    const d = new Date();
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=' + path;
  }

  public get(name: string): string | null {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.startsWith(`${this.cookiePrefix}${name}=`)) {
        return cookie.substring(name.length + this.cookiePrefix.length + 1);
      }
    }

    return null;
  }

  public deleteCookie(name: string, path: string = ''): void {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=' + path;
  }
}
