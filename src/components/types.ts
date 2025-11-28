export interface ITooltipProps {
  active?: boolean;
  payload?: Array<{
    stroke: string;
    strokeWidth: number;
    fill: string;
    dataKey: string;
    name: string;
    hide: boolean;
    color: string;
    value: number;
    payload: {
      name: string;
      uv: number;
    };
  }>;
}

export interface ITrade {
  id: number;
  name: string;
  time: string;
  action: string;
  amount: string;
  style: { bottom: string; left: string };
}

export interface INavigation {
  name: string;
  src: string;
  isActive?: boolean;
  reward?: string;
}
