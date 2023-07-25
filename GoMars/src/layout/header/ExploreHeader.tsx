import useInput from "@/hooks/useInput";
import { Input } from "@/utils";
import styled from "styled-components";

const ExploreHeaderContainor = styled.div`
  display: flex;
  align-items: center;
  width: 598px;
  height: 53px;
  padding: 0 16px;
`;
const ExploreHeader = () => {
  const [searchValue, onChangesearchDataHandler] = useInput({
    searchValue: "",
  });
  return (
    <ExploreHeaderContainor>
      <Input
        placeholder="Search Twitter"
        size="large"
        value={searchValue["seasearchValuerchData"]}
        handleInputChange={onChangesearchDataHandler}
      />
    </ExploreHeaderContainor>
  );
};
export default ExploreHeader;
