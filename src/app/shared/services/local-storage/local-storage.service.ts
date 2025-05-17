import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public setLocalStorage(key: string, data: any) {
    try {
      const encryptedData = JSON.stringify(data);
      localStorage.setItem(key, encryptedData);
    } catch (error) {
      console.error(
        `Failed to set item in localStorage for key: ${key}`,
        error
      );
    }
  }

  public getLocalStorage(key: string) {
    try {
      const storedData = localStorage.getItem(key);
      if (storedData === null) {
        return '';
      }

      const decryptedData = storedData;
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error(
        `Failed to get and parse item from localStorage for key: ${key}`,
        error
      );
      return '';
    }
  }

  public clearLocalStorageByKey(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(
        `Failed to remove item from localStorage for key: ${key}`,
        error
      );
    }
  }

  public setSelectedMenuInfo(data: any) {
    localStorage.setItem('selected_menu', JSON.stringify(data));
  }

  public getSelectedMenuInfo() {
    return JSON.parse(localStorage.getItem('selected_menu') as string);
  }
}
