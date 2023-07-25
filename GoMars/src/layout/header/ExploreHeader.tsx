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
  return (
    <ExploreHeaderContainor>
      <Input placeholder="Search Twitter" size="large" />
    </ExploreHeaderContainor>
  );
};
export default ExploreHeader;
