type StorageType = 'session' | 'local'
type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string
  setItem: (key: string, value: string, type?: StorageType) => boolean
  removeItem: (key: string, type?: StorageType) => void
}

const useStorage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' =>
    `${type ?? 'session'}Storage`

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')()

  const getItem = (key: string, type?: StorageType): string => {
    try {
      return isBrowser ? JSON.parse(window[storageType(type)][key]) : ''
    } catch (Exception) {
      return ''
    }
  }

  const setItem = (key: string, value: string, type?: StorageType): boolean => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, JSON.stringify(value))
      return true
    }

    return false
  }

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem,
  }
}

export default useStorage
