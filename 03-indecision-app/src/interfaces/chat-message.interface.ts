export interface ChatMessage {
  id: number;
  message: string;
  itsMine: boolean;
  image?: string;
  timestamp: string;
  reaction: string | null;
}
