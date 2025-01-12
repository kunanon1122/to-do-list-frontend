export interface BoardColumn {
  id: number;
  title: string;
  step: string;
  create_date: Date;
  update_date: Date;
}

export interface ItemsCardDetail {
  id: number;
  title: string;
  description?: string;
  step: string;
  tag?: string;
  priority?: string;
  create_date: Date;
  update_date: Date;
}
