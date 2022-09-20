export type AllItems = {
  index?:number
  data?:string
}

export type CacheLocalStorage = {
    getItem(keyID: string): string | null
    setItem(userName: string, date:string): void
    getAllItems():AllItems[]
    removeAllItems():void
  }
  