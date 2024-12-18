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
  step: string;
  tag?: string;
  priority?: string;
  create_date: string;
  update_date: string;
}
