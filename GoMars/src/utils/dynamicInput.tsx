import { StyledDivStyle } from "@/styles/main/mainstyles";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import styled from "styled-components";

const InputDivContainer = styled(StyledDivStyle)`
  padding: 13px 0;
  width: 100%;
`;
interface disable {
  disabled?: boolean;
}
const InputLabel = styled.label<disable>`
  border: 1px solid rgb(207, 217, 222);
  border-radius: 4px;
  flex-direction: row;
  background-color: ${(props) => props.disabled && "rgb(239, 243, 244)"};
  &.active {
    border-color: rgb(29, 155, 240);
  }
`;

const InputLabelContainer = styled.div`
  position: absolute;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const InputLabelWrraper = styled.div<disable>`
  direction: ltr;
  unicode-bidi: isolate;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 8px;
  word-wrap: break-word;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  padding-top: 16px;
  transition:
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    font-size 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  color: rgb(83, 100, 113);
  &.focused {
    color: ${(props) => (props.disabled ? "rgb(239, 243, 244)" : "rgb(29, 155, 240)")};
    font-size: small;
    padding-top: 8px;
    transition:
      -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      font-size 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    line-height: 16px;
  }
  span {
    color: ${(props) => (props.disabled ? "rgb(239, 243, 244)" : "rgb(29, 155, 240)")};
    font: inherit;
    white-space: inherit;
    word-wrap: break-word;
    font-family: inherit;
  }
`;

const InputBox = styled.div<disable>`
  overflow: hidden;
  padding: 12px 8px 8px 8px;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  margin-top: 16px;

  .inputbox-wrraper {
    white-space: pre-wrap;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 17px;
    line-height: 24px;
    color: rgb(15, 20, 25);
  }
  input {
    white-space: pre-wrap;
    word-wrap: break-word;
    unicode-bidi: isolate;
    outline-style: none;
    width: 100%;
    border: none;
    appearance: none;
    resize: none;
    background-color: rgba(0, 0, 0, 0);
    color: inherit;
    font-size: inherit;
    text-align: left;

    &:focus {
      .active {
        border-color: rgb(29, 155, 240);
      }
    }
  }
`;

interface InputProps extends disable {
  value: string;
  handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

const DynamicInput: React.FC<InputProps> = (props) => {
  const {
    value,
    type = "text",
    placeholder,
    disabled = false,
    handleInputChange = () => {},
    className,
  } = props;
  const [active, setActive] = useState<boolean>(false);

  return (
    <InputDivContainer>
      <InputLabel disabled={disabled} className={active ? "active" : ""}>
        <InputLabelContainer>
          <InputLabelWrraper className={value.length >= 1 || active ? "focused" : ""}>
            <span>{placeholder}</span>
          </InputLabelWrraper>
        </InputLabelContainer>
        <InputBox disabled={disabled}>
          <div className="inputbox-wrraper">
            <input
              disabled={disabled}
              type={type}
              name="text"
              dir="auto"
              value={value}
              onChange={handleInputChange}
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              className={className}
            />
          </div>
        </InputBox>
      </InputLabel>
    </InputDivContainer>
  );
};
export default DynamicInput;
