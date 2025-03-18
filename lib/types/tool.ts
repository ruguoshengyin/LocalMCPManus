export interface Tag {
  id: string;
  name: string;
  color?: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon?: string;
  tags: Tag[];
  config?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface ToolCardProps extends Tool {
  onSettingsClick: (id: string) => void;
  onRunClick: (id: string) => void;
  onCloneClick: (id: string) => void;
} 