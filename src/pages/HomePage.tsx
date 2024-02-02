import DailyNorma from "../components/DailyNorma/DailyNorma";
import WaterList from "../components/WaterList/WaterList";
import Calendar from "../components/Calendar/Calendar";
import WaterRatio from "../components/WaterRatio/WaterRatio";
import { useEffect } from "react";
import { getAmountDailyThunk } from "../redux/water/water.operations";
import { useAppDispatch } from "../redux/redux_ts/hook";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAmountDailyThunk());
  }, [dispatch]);

  return (
    <section className="homePage-section">
      <div className="container">
        <DailyNorma />
        <WaterRatio />
        <WaterList />
        <Calendar />
      </div>
    </section>
  );
};

export default HomePage;
