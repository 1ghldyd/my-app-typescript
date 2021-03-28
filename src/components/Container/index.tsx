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
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-top: 72px;
`;

const Container = (props: ContainerProps) => (
    <FlexBox>
        <ContainerWrapper>{props.children}</ContainerWrapper>
    </FlexBox>
);
export default Container;