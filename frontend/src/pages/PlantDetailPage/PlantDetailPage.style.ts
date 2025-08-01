import styled from "styled-components";

export const DetailWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 10vh;
    align-items: center;

    @media screen and (min-width: 1024px){ 
        width: 1024px;
        margin: 0 auto;
    }

    header{
        width: 100%;
    }
`

export const DetailHeader = styled.h1`
    width: 100%;
    font-size: 1.5rem;
`

export const DetailBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
`

export const WeatherInfo = styled.div`
    width: 100%;
    height: 10vh;
    background: white;
    box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 20%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WeatherWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const WeatherItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 8px;
`

export const DetailImageContainer = styled.div`
    img{
        width: 100%;
        border-radius: 10px;
    }
`

export const InfoWrapper = styled.div`
    width: 100%;
    flex: 1;
    background: #A9DFBF;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding: 24px 16px;
    padding-bottom: 86px;
`