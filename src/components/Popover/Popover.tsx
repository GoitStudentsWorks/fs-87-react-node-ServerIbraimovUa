import { FC } from "react";
import { PopoverMessage, PopoverWrapper } from "./Popover.styled";


interface Props {
    message?: string;
    dailyNorma?: boolean;
    waterAmount?:boolean;
    verify?:boolean;
  }

const Popover: FC<Props> = ({ message, ...arg }) => {

  return (
    <>
    <PopoverWrapper 
      $dailyNorma={arg.dailyNorma}
      $waterAmount={arg.waterAmount}
      $verify={arg.verify}>
      <PopoverMessage>{message}</PopoverMessage>
    </PopoverWrapper>
    </>
  );
};

export default Popover;

