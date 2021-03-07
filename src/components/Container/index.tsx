import React from "react";
import styled from "styled-components";

interface ContainerProps {
	children: React.ReactNode;
}

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerWrapper = styled.div`
    width: 400px;
    margin-top: 72px;
`;

const Container = (props: ContainerProps) => (
    <FlexBox>
        <ContainerWrapper>{props.children}</ContainerWrapper>
    </FlexBox>
);
export default Container;