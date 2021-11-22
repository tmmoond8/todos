import TodayStore from "./TodayStore";

const stores = {
  todayStore: new TodayStore(),
} as const;

export default stores;
