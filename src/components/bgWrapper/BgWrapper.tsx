
import { Header } from '../../layout/header/Header';
import { Main } from '../../layout/sections/main/Main';
import { Container } from '../Container';
import { S } from './BgWrapper_Styles';


export const BgWrapper:React.FC = () => {
  return (
    <S.BgWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </S.BgWrapper>
  );
}

