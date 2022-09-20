import {CacheLocalStorage} from '@customTypes/local-storage/LocalStorage';


  class LocalStorage implements CacheLocalStorage {
    items = {...localStorage}
    localStorageLength = Object.keys(this.items).length-1;
    getItem(keyID: string) {
      const item = localStorage.getItem(keyID)
  
      if (item === null) return undefined
  
      if (item === "null") return null
      if (item === "undefined") return undefined
  
      try {
        return JSON.parse(item)
      } catch {}
  
      return item
    }

    setItem(userName:string, time:string) {
        const dataIndex = `${this.localStorageLength + 1}`
        localStorage.setItem(dataIndex, JSON.stringify({userName, time}))
        
    }
    getAllItems() {
      const searchHistory = []
      for (let i = 0; i <= this.localStorageLength; i++) {
        searchHistory.push({index:i,data:this.items[i]})
      }
      return searchHistory.reverse()
    }
    removeAllItems(): void {
      localStorage.clear()
    }
  }
  
  class MockStorage implements CacheLocalStorage {
    getItem() {
      return null
    }
    setItem() {}
    removeAllItems() { }
    getAllItems(){
      return []
    }
  }
  let  persistentStorage:LocalStorage | MockStorage;
  if (typeof window !== 'undefined') {
      persistentStorage = new LocalStorage();
  } else {
    persistentStorage = new MockStorage()
  }
  
export {persistentStorage}