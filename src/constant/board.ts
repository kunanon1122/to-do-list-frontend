export interface BoardColumn {
  id: number;
  title: string;
  step: string;
  create_date: string;
  update_date: string;
}

export interface ItemsCardDetail {
  id: string;
  title: string;
  priority: string;
  step: string;
  tag?: string;
  create_date: string;
  update_date: string;
}
