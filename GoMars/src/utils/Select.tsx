import React, { ChangeEvent, FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Icon } from ".";
import { down } from "@/assets/svg";
import styled from "styled-components";
interface SelectStyleProps {
  flexGrow?: number;
}
interface SelectProps extends SelectStyleProps {
  label: string;
  count: number;
  formatOption: (index: number) => string;
  selectValue: string;
  className: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
const SelcetWrraper = styled.div<SelectStyleProps>`
  display: flex;
  position: relative;
  flex-basis: auto;
  flex-direction: row;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 1);
  flex-grow: ${(props) => props.flexGrow};
  option:disabled {
    background-color: rgba(255, 255, 255, 1);
  }
  .icon-container {
    display: inline-block;
    max-width: 100%;
    vertical-align: text-bottom;
    user-select: none;
    position: absolute;
    pointer-events: none !important;
    color: rgb(83, 100, 113);
    height: 1.5em;
    margin-top: -0.75em;
    right: 12px;
    top: 50%;
  }
  option {
    line-height: 20px;
    font-size: 17px;
    cursor: pointer;
    color: rgb(15, 20, 25);
    background-color: rgba(255, 255, 255, 1);
  }
  select {
    width: 100%;
    padding: 12px 8px 8px 8px;
    line-height: 20px;
    outline-style: none;
    font-size: 17px;
    margin-top: 16px;
    appearance: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    color: rgb(15, 20, 25);
    border: none;
  }
  label {
    white-space: pre-wrap;
    padding-left: 8px;
    padding-right: 8px;
    position: absolute;
    word-wrap: break-word;
    font-weight: 400;
    padding-top: 8px;
    font-size: 13px;
    line-height: 16px;
    pointer-events: none !important;
    color: rgb(83, 100, 113);
    span {
      color: inherit;
      font: inherit;
      white-space: inherit;
      word-wrap: break-word;
      font-family: inherit;
    }
  }
`;

const Select: FC<SelectProps> = ({
  label,
  count,
  formatOption,
  flexGrow,
  selectValue,
  className,
  onChange,
}) => {
  return (
    <SelcetWrraper className="select-container" flexGrow={flexGrow}>
      <label>
        <span>{label}</span>
      </label>
      <select className={className} value={selectValue} onChange={onChange}>
        {/* <option disabled /> */}
        {[...Array(count)]
          .map(() => uuidv4())
          .map((e, i) => (
            <option key={e} value={formatOption(i)}>
              {formatOption(i)}
            </option>
          ))}
      </select>
      <div className="icon-container">
        <Icon color="rgb(83, 100, 113)" height={22.5} width={22.5} path={down} />
      </div>
    </SelcetWrraper>
  );
};

export default Select;
