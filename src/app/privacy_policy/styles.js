import styled from 'styled-components';

export const Container = styled.div`
  color: #744441;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  margin-top: 100px;
  width: calc(100% - 200px);
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    width: calc(100% - 100px);
  }

  @media (max-width: 600px) {
    width: calc(100% - 60px);
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  > h1 {
    letter-spacing: 4px;
  }
`;

export const PrivacyDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const PrivacyTileDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 40px;
`;

export const TextsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > p {
    font-size: 1.2rem;
    span {
      font-weight: bolder;
    }
  }
`;

export const OptionsListDiv = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    display: flex;
    gap: 20px;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const OptionNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #744441;
  width: 30px;
  height: 30px;
  border-radius: 60px;

  p {
    color: #ede5d8;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`;

export const CommitmentDiv = styled.div`
  position: relative;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommitmentOptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > p {
    span {
      font-size: 1.1rem;
      font-weight: bolder;
    }
  }
`;

export const CocoonImageDiv = styled.div`
  height: 50dvh;
  position: absolute;
  z-index: -1;
  right: 0;
  top: -120px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1500px) {
    right: 100px;
    top: -140px;
  }
`;

export const MoreInfomationDiv = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
