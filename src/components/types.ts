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
