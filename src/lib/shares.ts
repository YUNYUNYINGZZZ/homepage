export const SHARE_TYPES = ['book', 'movie', 'game', 'music', 'other'] as const;
export type ShareType = (typeof SHARE_TYPES)[number];

export interface ShareTypeMeta {
  label: string;
  color: string;
}

// 新增类型：在这里加一行即可，页面逻辑无需改动。
export const SHARE_TYPE_META: Record<ShareType, ShareTypeMeta> = {
  book: { label: '书籍', color: '#6f8f88' },
  movie: { label: '电影', color: '#9a7b57' },
  game: { label: '游戏', color: '#7c8aa3' },
  music: { label: '音乐', color: '#9a7290' },
  other: { label: '其他', color: '#7d8b95' },
};
