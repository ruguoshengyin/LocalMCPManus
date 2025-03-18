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
  command: string;
  config?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface ToolCardProps extends Tool {
  onSettingsClick: (id: string) => void;
  onRunClick: (id: string) => void;
  onCloneClick: (id: string) => void;
} 