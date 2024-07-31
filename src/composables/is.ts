export const isUrl = (url: string): boolean => /^https?:\/\/.*/.test(url)
export const isWindow = typeof window !== 'undefined'
