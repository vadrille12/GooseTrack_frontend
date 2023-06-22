import { Container } from 'Styles/Container';
import { GlobalStyle } from 'Styles/GlobalStyle';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';

export default function CalendarPage() {
  return (
    <div>
      <h1>Calendar Page</h1>
      <Container>
        <ChoosedDay />
        <GlobalStyle />
      </Container>
    </div>
  );
}
