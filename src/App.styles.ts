import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)`
    positon: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`;