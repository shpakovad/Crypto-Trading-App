import data from "./chartData.json";

interface IChartData {
  name: string;
  uv: number;
}

export const getChartData = (): IChartData[] => {
  return data;
};
