import { TouchBallLoading } from 'react-loadingg';
import { Container } from '../components/commons/containers'

function Loading() {

    return (
        <Container>
            <TouchBallLoading color={"white"} size={"large"} />
        </Container>
    );
}
export default Loading;
